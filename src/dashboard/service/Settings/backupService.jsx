// src/services/backupService.js

export const simulateBackup = (onProgress) => {
  return new Promise((resolve) => {
    let progress = 0
    const interval = setInterval(() => {
      progress += 20
      onProgress(progress)
      if (progress >= 100) {
        clearInterval(interval)
        resolve('Backup completed successfully!')
      }
    }, 400)
  })
}

export const simulateRestore = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject('No backup file selected.')
      return
    }
    setTimeout(() => {
      resolve('Data restored successfully from backup!')
    }, 1500)
  })
}
