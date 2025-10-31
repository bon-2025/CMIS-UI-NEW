// src/utils/archiveUtils.js

export const validateArchiveForm = (formData) => {
  if (!formData.year || !formData.recordType) {
    return { valid: false, message: 'Please fill in all required fields.' }
  }
  return { valid: true, message: '' }
}
