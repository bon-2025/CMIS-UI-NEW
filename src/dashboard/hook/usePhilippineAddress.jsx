import { useState, useEffect } from "react";
import axios from "axios";


export const usePhilippineAddress = (regionCode, provinceCode, municipalityCode) => {
  const [regions, setRegions] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [barangays, setBarangays] = useState([]);

  // Fetch regions on mount
  useEffect(() => {
    axios.get("https://psgc.gitlab.io/api/regions/")
      .then(res => setRegions(res.data))
      .catch(err => console.error("Failed to fetch regions:", err));
  }, []);

  // Fetch provinces when regionCode changes
  useEffect(() => {
    if (regionCode) {
      axios.get(`https://psgc.gitlab.io/api/regions/${regionCode}/provinces/`)
        .then(res => setProvinces(res.data))
        .catch(err => console.error("Failed to fetch provinces:", err));
    } else {
      setProvinces([]);
    }
  }, [regionCode]);

  // Fetch municipalities when provinceCode changes
  useEffect(() => {
    if (provinceCode) {
      axios.get(`https://psgc.gitlab.io/api/provinces/${provinceCode}/municipalities/`)
        .then(res => setMunicipalities(res.data))
        .catch(err => console.error("Failed to fetch municipalities:", err));
    } else {
      setMunicipalities([]);
    }
  }, [provinceCode]);

  // Fetch barangays when municipalityCode changes
  useEffect(() => {
    if (municipalityCode) {
      axios.get(`https://psgc.gitlab.io/api/municipalities/${municipalityCode}/barangays/`)
        .then(res => setBarangays(res.data))
        .catch(err => console.error("Failed to fetch barangays:", err));
    } else {
      setBarangays([]);
    }
  }, [municipalityCode]);

  return {
    regions,
    provinces,
    municipalities,
    barangays,
  };
};
