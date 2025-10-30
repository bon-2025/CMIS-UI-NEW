// src/hooks/Register/usePhilippineAddressDropdown.js
import { usePhilippineAddress } from "../../hook/Register/usePhilippineAddress";

export const usePhilippineAddressDropdown = (watch, setValue, namePrefix = "") => {
  const regionField = `${namePrefix}Region`;
  const provinceField = `${namePrefix}Province`;
  const municipalityField = `${namePrefix}Municipality`;
  const barangayField = `${namePrefix}Barangay`;

  const regionCode = watch(regionField) || "";
  const provinceCode = watch(provinceField) || "";
  const municipalityCode = watch(municipalityField) || "";

  const { regions, provinces, municipalities, barangays } = usePhilippineAddress(
    regionCode,
    provinceCode,
    municipalityCode
  );

  const handleRegionChange = (value) => {
    setValue(regionField, value);
    setValue(provinceField, "");
    setValue(municipalityField, "");
    setValue(barangayField, "");
  };

  const handleProvinceChange = (value) => {
    setValue(provinceField, value);
    setValue(municipalityField, "");
    setValue(barangayField, "");
  };

  const handleMunicipalityChange = (value) => {
    setValue(municipalityField, value);
    setValue(barangayField, "");
  };

  const handleBarangayChange = (value) => setValue(barangayField, value);

  return {
    fields: {
      regionField,
      provinceField,
      municipalityField,
      barangayField,
    },
    values: {
      regionCode,
      provinceCode,
      municipalityCode,
      barangayCode: watch(barangayField) || "",
    },
    options: { regions, provinces, municipalities, barangays },
    handlers: {
      handleRegionChange,
      handleProvinceChange,
      handleMunicipalityChange,
      handleBarangayChange,
    },
  };
};
