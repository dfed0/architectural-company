import { google } from 'googleapis'
import { GoogleAuth } from 'google-auth-library'
import { serviceAccount } from '../secretApi'
async function fetchImagesRecursively(drive, folderId) {
  let allImages = []
  const imageMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
  const mimeTypeQuery = imageMimeTypes
    .map((type) => `mimeType = '${type}'`)
    .join(' or ')

  const filesRes = await drive.files.list({
    q: `'${folderId}' in parents and (${mimeTypeQuery}) and trashed = false`,
    fields: 'files(id, name, mimeType, size, createdTime)',
    corpora: 'allDrives',
    includeItemsFromAllDrives: true,
    supportsAllDrives: true,
  })

  if (filesRes.data.files?.length) {
    const imagesWithDriveUrl = filesRes.data.files.map((file) => ({
      file,
      name: file.name,
      id: file.id,
      url: `/api/googleApis/image?id=${file.id}`,
      size: parseInt(file.size),
      updated_at: file.createdTime,
      fullPath: `projects/${folderId}/${file.name}`,
    }))
    allImages = allImages.concat(imagesWithDriveUrl)
  }

  const foldersRes = await drive.files.list({
    q: `'${folderId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
    fields: 'files(id, name)',
    corpora: 'allDrives',
    includeItemsFromAllDrives: true,
    supportsAllDrives: true,
  })

  if (foldersRes.data.files?.length) {
    const recursiveResults = await Promise.all(
      foldersRes.data.files.map((subfolder) =>
        fetchImagesRecursively(drive, subfolder.id)
      )
    )
    recursiveResults.forEach((res) => {
      allImages = allImages.concat(res)
    })
  }

  return allImages
}

async function fetchSheetsData(authClient, spreadsheetId, range) {
  const sheets = google.sheets({ version: 'v4', auth: authClient })
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    })
    let values = response.data.values || []
    if (values.length > 0) values = values.slice(1)
    return values.map((row) => ({
      titleen: row[0] || '',
      titleuk: row[1] || '',
      date: row[2] || '',
      order: row[3] || '',
    }))
  } catch (error) {
    console.error(
      '❌ Ошибка при получении данных из Google Sheets:',
      error.message
    )
    throw new Error(`Failed to fetch data from Google Sheets: ${error.message}`)
  }
}

export async function GET() {
  try {
    // const keyFile = path.join(
    //   process.cwd(),
    //   'src/app/api/googleApis/secretApi.json'
    // )
    const auth = new GoogleAuth({
      credentials: serviceAccount,
      scopes: [
        'https://www.googleapis.com/auth/drive.readonly',
        'https://www.googleapis.com/auth/spreadsheets.readonly',
      ],
    })
    const drive = google.drive({ version: 'v3', auth })
    const mainDriveFolderId = '1jho1nZkJJcHlJAiZf9FKZ_ATZ6yZtdu8'
    const spreadsheetId = '1IdGYJBBNtHJ4BkNAeQxNSwWbIkWK9tEdoaLBBYt4BOU'
    const sheetRange = 'A:Z'
    console.log('Spreadsheet ID:', spreadsheetId)
    console.log('Main Drive Folder ID:', mainDriveFolderId)

    const sheetsData = await fetchSheetsData(auth, spreadsheetId, sheetRange)

    const directSubfoldersRes = await drive.files.list({
      q: `'${mainDriveFolderId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
      fields: 'files(id, name)',
      corpora: 'allDrives',
      includeItemsFromAllDrives: true,
      supportsAllDrives: true,
    })

    const numericSubfolders = (directSubfoldersRes.data.files || [])
      .filter(
        (subfolder) =>
          !isNaN(parseFloat(subfolder.name)) && isFinite(subfolder.name)
      )
      .sort((a, b) => parseFloat(a.name) - parseFloat(b.name))

    const projectsArray = await Promise.all(
      numericSubfolders.map(async (subfolder) => {
        const imagesInSubfolder = await fetchImagesRecursively(
          drive,
          subfolder.id
        )
        const mainImage = imagesInSubfolder.find(
          (img) => img.name === 'photo-main.jpg'
        )
        const mainImageUrl = mainImage
          ? mainImage.url
          : imagesInSubfolder.length > 0
          ? imagesInSubfolder[0].url
          : 'https://placehold.co/600x400/cccccc/333333?text=No+Image'

        return {
          id: parseFloat(subfolder.name),
          folderName: subfolder.name,
          mainImageUrl,
          images: imagesInSubfolder.filter(
            (file) => file.name !== 'photo-main.jpg'
          ),
        }
      })
    )

    return new Response(
      JSON.stringify({
        images: {
          projects: projectsArray,
        },
        table: sheetsData,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (err) {
    console.error('❌ API error:', err)
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    })
  }
}
