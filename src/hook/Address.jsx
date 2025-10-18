import { useEffect, useState } from 'react';
import { getAddress } from './GeographicData';

const API_ADDRESS = {
  Region: 'https://psgc.gitlab.io/api/regions/',
  Province: 'https://psgc.gitlab.io/api/regions/', // +regionCode/provinces/
  Municipal: 'https://psgc.gitlab.io/api/provinces/', // +provinceCode/municipalities/
  Barangay: 'https://psgc.gitlab.io/api/municipalities/', // +municipalityCode/barangays/
};

const Address = () => {
  const [regions, setRegions] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [barangays, setBarangays] = useState([]);

  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedMunicipality, setSelectedMunicipality] = useState(null);
  const [selectedBarangay, setSelectedBarangay] = useState(null);

  const [loading, setLoading] = useState({
    provinces: false,
    municipalities: false,
    barangays: false,
  });

  // Fetch regions on mount
  useEffect(() => {
    const fetchRegions = async () => {
      const data = await getAddress(API_ADDRESS.Region);
      setRegions((data || []).sort((a, b) => a.name.localeCompare(b.name)));
    };
    fetchRegions();
  }, []);

  // Fetch provinces on region change
  useEffect(() => {
    const fetchProvinces = async () => {
      setSelectedProvince(null);
      setSelectedMunicipality(null);
      setSelectedBarangay(null);

      if (selectedRegion?.code) {
        setLoading(prev => ({ ...prev, provinces: true }));
        const data = await getAddress(API_ADDRESS.Province + selectedRegion.code + '/provinces/');
        setProvinces((data || []).sort((a, b) => a.name.localeCompare(b.name)));
        setLoading(prev => ({ ...prev, provinces: false }));
      } else {
        setProvinces([]);
      }
    };

    fetchProvinces();
  }, [selectedRegion]);

  // Fetch municipalities on province change
  useEffect(() => {
    const fetchMunicipalities = async () => {
      setSelectedMunicipality(null);
      setSelectedBarangay(null);

      if (selectedProvince?.code) {
        setLoading(prev => ({ ...prev, municipalities: true }));
        const data = await getAddress(API_ADDRESS.Municipal + selectedProvince.code + '/municipalities/');
        setMunicipalities((data || []).sort((a, b) => a.name.localeCompare(b.name)));
        setLoading(prev => ({ ...prev, municipalities: false }));
      } else {
        setMunicipalities([]);
      }
    };

    fetchMunicipalities();
  }, [selectedProvince]);

  // Fetch barangays on municipality change
  useEffect(() => {
    const fetchBarangays = async () => {
      setSelectedBarangay(null);

      if (selectedMunicipality?.code) {
        setLoading(prev => ({ ...prev, barangays: true }));
        const data = await getAddress(API_ADDRESS.Barangay + selectedMunicipality.code + '/barangays/');
        setBarangays((data || []).sort((a, b) => a.name.localeCompare(b.name)));
        setLoading(prev => ({ ...prev, barangays: false }));
      } else {
        setBarangays([]);
      }
    };

    fetchBarangays();
  }, [selectedMunicipality]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Address Selector</h2>

      {/* REGION SELECT */}
      <div>
        <label>Region:&nbsp;</label>
        <select
          value={selectedRegion?.code || ''}
          onChange={e =>
            setSelectedRegion(regions.find(r => r.code === e.target.value))
          }
        >
          <option value="">-- Select Region --</option>
          {regions.map(region => (
            <option key={region.code} value={region.code}>
              {region.regionName} - {region.name}
            </option>
          ))}
        </select>
      </div>

      {/* PROVINCE SELECT */}
      <div>
        <label>Province:&nbsp;</label>
        <select
          value={selectedProvince?.code || ''}
          onChange={e =>
            setSelectedProvince(provinces.find(p => p.code === e.target.value))
          }
          disabled={!provinces.length}
        >
          <option value="">{loading.provinces ? 'Loading...' : '-- Select Province --'}</option>
          {provinces.map(province => (
            <option key={province.code} value={province.code}>
              {province.name}
            </option>
          ))}
        </select>
      </div>

      {/* MUNICIPALITY SELECT */}
      <div>
        <label>Municipality:&nbsp;</label>
        <select
          value={selectedMunicipality?.code || ''}
          onChange={e =>
            setSelectedMunicipality(municipalities.find(m => m.code === e.target.value))
          }
          disabled={!municipalities.length}
        >
          <option value="">{loading.municipalities ? 'Loading...' : '-- Select Municipality --'}</option>
          {municipalities.map(m => (
            <option key={m.code} value={m.code}>
              {m.name}
            </option>
          ))}
        </select>
      </div>

      {/* BARANGAY SELECT */}
      <div>
        <label>Barangay:&nbsp;</label>
        <select
          value={selectedBarangay?.code || ''}
          onChange={e =>
            setSelectedBarangay(barangays.find(b => b.code === e.target.value))
          }
          disabled={!barangays.length}
        >
          <option value="">{loading.barangays ? 'Loading...' : '-- Select Barangay --'}</option>
          {barangays.map(b => (
            <option key={b.code} value={b.code}>
              {b.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Address;
