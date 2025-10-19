import SelectForm from '../shared/SelectForm';

const Address = ({ addressState, labelPrefix = "" }) => {
  const {
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
  } = addressState;

  return (
    <>
      {/* REGION */}
      <SelectForm
        name={`${labelPrefix}Region`}
        label={`${labelPrefix}Region`}
        value={regionCode}
        onChange={(e) => setRegionCode(e.target.value)}
        controlId={`${labelPrefix}region`}
      >
        <option value="">Select region</option>
        {regions.map((r) => (
          <option key={r.code} value={r.code}>
            {r.regionName ? `${r.regionName} - ${r.name}` : r.name}
          </option>
        ))}
      </SelectForm>

      {/* PROVINCE */}
      <SelectForm
        name={`${labelPrefix}Province`}
        label={`${labelPrefix}Province`}
        value={provinceCode}
        onChange={(e) => setProvinceCode(e.target.value)}
        controlId={`${labelPrefix}province`}
      >
        <option value="">Select province</option>
        {provinces.map((p) => (
          <option key={p.code} value={p.code}>
            {p.name}
          </option>
        ))}
      </SelectForm>

      {/* MUNICIPALITY */}
      <SelectForm
        name={`${labelPrefix}Municipality`}
        label={`${labelPrefix}Municipality`}
        value={municipalityCode}
        onChange={(e) => setMunicipalityCode(e.target.value)}
        controlId={`${labelPrefix}municipality`}
      >
        <option value="">Select municipality</option>
        {municipalities.map((m) => (
          <option key={m.code} value={m.code}>
            {m.name}
          </option>
        ))}
      </SelectForm>

      {/* BARANGAY */}
      <SelectForm
        name={`${labelPrefix}Barangay`}
        label={`${labelPrefix}Barangay`}
        value={barangayCode}
        onChange={(e) => setBarangayCode(e.target.value)}
        controlId={`${labelPrefix}barangay`}
      >
        <option value="">Select barangay</option>
        {barangays.map((b) => (
          <option key={b.code} value={b.code}>
            {b.name}
          </option>
        ))}
      </SelectForm>
    </>
  );
};

export default Address;
