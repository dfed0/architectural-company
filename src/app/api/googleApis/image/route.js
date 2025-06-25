import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';
import path from 'path';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const fileId = searchParams.get('id');

  if (!fileId) {
    return new Response('Missing file ID', { status: 400 });
  }

  try {
    const keyFile = path.join(process.cwd(), 'src/app/api/googleApis/secretApi.json');

    const auth = new GoogleAuth({
      keyFile,
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });

    const drive = google.drive({ version: 'v3', auth });

    const fileMeta = await drive.files.get({
      fileId,
      fields: 'name, mimeType',
      supportsAllDrives: true,
    });

    const fileStream = await drive.files.get(
      {
        fileId,
        alt: 'media',
        supportsAllDrives: true,
      },
      { responseType: 'stream' }
    );

    const headers = {
      'Content-Type': fileMeta.data.mimeType || 'application/octet-stream',
      'Content-Disposition': `inline; filename="${fileMeta.data.name}"`,
      'Cache-Control': 'public, max-age=31536000',
    };

    const stream = fileStream.data;

    return new Response(stream, { headers });
  } catch (error) {
    console.error('❌ Proxy error:', error.message);
    return new Response('Failed to fetch image from Google Drive', { status: 500 });
  }
}
