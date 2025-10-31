// src/services/archiveService.js

export const archiveRecords = ({ year, recordType, keyword }, onProgress) => {
  return new Promise((resolve) => {
    let progress = 0
    const interval = setInterval(() => {
      progress += 20
      onProgress(progress)
      if (progress >= 100) {
        clearInterval(interval)
        resolve('Records archived successfully!')
      }
    }, 500)
  })
}
