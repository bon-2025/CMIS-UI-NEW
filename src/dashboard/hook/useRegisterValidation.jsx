// in useRegisterValidation.js (or wherever)
export const validateRegistration = ({ descendants, descendantsAddress, contactPerson, contactAddress, otherInformation }) => {
  const isFilled = (...values) => values.every(val => val && val.trim().length > 0);

  const isValid = isFilled(
    descendants.firstName, descendants.lastName, descendants.gender,
    descendantsAddress.regionCode, descendantsAddress.provinceCode, descendantsAddress.municipalityCode, descendantsAddress.barangayCode,
    contactPerson.firstName, contactPerson.lastName, contactPerson.gender,
    contactAddress.regionCode, contactAddress.provinceCode, contactAddress.municipalityCode, contactAddress.barangayCode,
    otherInformation.burialNumber, otherInformation.contractStart, otherInformation.contractEnd
  );

  return isValid;
};
