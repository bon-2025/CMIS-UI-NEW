export const getDefaultValues = () => ({
  // Descendant fields
  descendantFirstName: "",
  descendantLastName: "",
  descendantGender: "",
  descendantAddressRegion: "",
  descendantAddressProvince: "",
  descendantAddressMunicipality: "",
  descendantAddressBarangay: "",

  // Contact fields
  contactFirstName: "",
  contactLastName: "",
  contactGender: "",
  contactNumber: "",
  contactEmail: "",
  contactAddressRegion: "",
  contactAddressProvince: "",
  contactAddressMunicipality: "",
  contactAddressBarangay: "",

  // Other
  burialPermitNumber: "",
  contractStart: "",
  contractEnd: "",
});


export const genderOptions = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Other", value: "Other" },
];
