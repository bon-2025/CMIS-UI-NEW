import { useState, useEffect } from "react";
import { philippineAddressService } from "../../service/Register/address/philippineAddresService";

export const usePhilippineAddress = (regionCode, provinceCode, municipalityCode) => {
  const [regions, setRegions] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [barangays, setBarangays] = useState([]);

  useEffect(() => {
    philippineAddressService.getRegions().then(setRegions).catch(console.error);
  }, []);

  useEffect(() => {
    if (!regionCode) return setProvinces([]);
    philippineAddressService.getProvincesByRegion(regionCode).then(setProvinces).catch(console.error);
  }, [regionCode]);

  useEffect(() => {
    if (!provinceCode) return setMunicipalities([]);
    philippineAddressService.getMunicipalitiesByProvince(provinceCode).then(setMunicipalities).catch(console.error);
  }, [provinceCode]);

  useEffect(() => {
    if (!municipalityCode) return setBarangays([]);
    philippineAddressService.getBarangaysByMunicipality(municipalityCode).then(setBarangays).catch(console.error);
  }, [municipalityCode]);

  return { regions, provinces, municipalities, barangays };
};
