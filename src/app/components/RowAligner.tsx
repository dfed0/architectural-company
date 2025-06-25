// import { useState } from 'react'

// type RowAlignerProps = {
//   children: (
//     reportHeight: (height: number, index: number) => void,
//     maxHeight: number
//   ) => React.ReactNode
// }


// export default function RowAligner({ children }: RowAlignerProps) {
//   const [heights, setHeights] = useState<number[]>([])

//   // Функция для обновления высот по индексу
//   const reportHeight = (height: number, index: number) => {
//     setHeights((prev) => {
//       const newHeights = [...prev]
//       newHeights[index] = height
//       return newHeights
//     })
//   }

//   const maxHeight = heights.length ? Math.max(...heights) : 0

//   return (
//     <>
//       {children(reportHeight, maxHeight)}
//     </>
//   )
// }
