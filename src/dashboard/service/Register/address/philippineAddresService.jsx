// src/services/philippineAddress.service.js
import axios from "axios";

const API_BASE = "https://psgc.gitlab.io/api";

export const philippineAddressService = {
  getRegions: async () => {
    const { data } = await axios.get(`${API_BASE}/regions/`);
    return data;
  },

  getProvincesByRegion: async (regionCode) => {
    const { data } = await axios.get(`${API_BASE}/regions/${regionCode}/provinces/`);
    return data;
  },

  getMunicipalitiesByProvince: async (provinceCode) => {
    const { data } = await axios.get(`${API_BASE}/provinces/${provinceCode}/municipalities/`);
    return data;
  },

  getBarangaysByMunicipality: async (municipalityCode) => {
    const { data } = await axios.get(`${API_BASE}/municipalities/${municipalityCode}/barangays/`);
    return data;
  },
};
