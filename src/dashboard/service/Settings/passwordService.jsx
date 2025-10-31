// src/services/passwordService.js
export const changePassword = async ({ currentPassword, newPassword }) => {
  // Replace with actual API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (currentPassword === 'wrong') {
        reject({ message: 'Current password is incorrect.' })
      } else {
        resolve({ message: 'Password changed successfully!' })
      }
    }, 800)
  })
}
