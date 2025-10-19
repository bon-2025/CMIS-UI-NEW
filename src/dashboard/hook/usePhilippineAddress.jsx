// hooks/usePhilippineAddress.js
import { useState, useEffect } from "react";
import axios from "axios";

export const usePhilippineAddress = () => {
  const [regions, setRegions] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [barangays, setBarangays] = useState([]);

  const [regionCode, setRegionCode] = useState("");
  const [provinceCode, setProvinceCode] = useState("");
  const [municipalityCode, setMunicipalityCode] = useState("");
  const [barangayCode, setBarangayCode] = useState("");

  // Fetch regions on mount
  useEffect(() => {
    axios.get("https://psgc.gitlab.io/api/regions/")
      .then(res => setRegions(res.data))
      .catch(err => console.error("Failed to fetch regions:", err));
  }, []);

  // Fetch provinces when region changes
  useEffect(() => {
    if (regionCode) {
      axios.get(`https://psgc.gitlab.io/api/regions/${regionCode}/provinces/`)
        .then(res => {
          setProvinces(res.data);
          setProvinceCode("");
          setMunicipalities([]);
          setMunicipalityCode("");
          setBarangays([]);
          setBarangayCode("");
        })
        .catch(err => console.error("Failed to fetch provinces:", err));
    }
  }, [regionCode]);

  // Fetch municipalities when province changes
  useEffect(() => {
    if (provinceCode) {
      axios.get(`https://psgc.gitlab.io/api/provinces/${provinceCode}/municipalities/`)
        .then(res => {
          setMunicipalities(res.data);
          setMunicipalityCode("");
          setBarangays([]);
          setBarangayCode("");
        })
        .catch(err => console.error("Failed to fetch municipalities:", err));
    }
  }, [provinceCode]);

  // Fetch barangays when municipality changes
  useEffect(() => {
    if (municipalityCode) {
      axios.get(`https://psgc.gitlab.io/api/municipalities/${municipalityCode}/barangays/`)
        .then(res => {
          setBarangays(res.data);
          setBarangayCode("");
        })
        .catch(err => console.error("Failed to fetch barangays:", err));
    }
  }, [municipalityCode]);

  return {
    regions,
    provinces,
    municipalities,
    barangays,
    regionCode,
    setRegionCode,
    provinceCode,
    setProvinceCode,
    municipalityCode,
    setMunicipalityCode,
    barangayCode,
    setBarangayCode,
  };
};
