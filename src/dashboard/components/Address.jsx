import { useEffect } from "react";
import SelectForm from "../shared/SelectForm";
import { Controller, useWatch } from "react-hook-form";
import { usePhilippineAddress } from "../hook/usePhilippineAddress";

const Address = ({ control, setValue, labelPrefix = "" }) => {
  // Watch values of selects from RHF to drive fetching
  const regionCode = useWatch({ control, name: `${labelPrefix}region` });
  const provinceCode = useWatch({ control, name: `${labelPrefix}province` });
  const municipalityCode = useWatch({ control, name: `${labelPrefix}municipality` });

  // Fetch dropdown data based on selected codes
  const { regions, provinces, municipalities, barangays } = usePhilippineAddress(
    regionCode,
    provinceCode,
    municipalityCode
  );

  // Clear dependent fields on parent change
  useEffect(() => {
    setValue(`${labelPrefix}province`, "");
    setValue(`${labelPrefix}municipality`, "");
    setValue(`${labelPrefix}barangay`, "");
  }, [regionCode, setValue, labelPrefix]);

  useEffect(() => {
    setValue(`${labelPrefix}municipality`, "");
    setValue(`${labelPrefix}barangay`, "");
  }, [provinceCode, setValue, labelPrefix]);

  useEffect(() => {
    setValue(`${labelPrefix}barangay`, "");
  }, [municipalityCode, setValue, labelPrefix]);

  return (
    <>
      {/* REGION */}
      <Controller
        name={`${labelPrefix}region`}
        control={control}
        rules={{ required: "Region is required" }}
        render={({ field, fieldState }) => (
          <SelectForm
            controlId={`${labelPrefix}region`}
            label={`${labelPrefix}Region`}
            {...field}
            error={fieldState.error}
          >
            <option value="">Select region</option>
            {regions.map((r) => (
              <option key={r.code} value={r.code}>
                {r.regionName ? `${r.regionName} - ${r.name}` : r.name}
              </option>
            ))}
          </SelectForm>
        )}
      />

      {/* PROVINCE */}
      <Controller
        name={`${labelPrefix}province`}
        control={control}
        rules={{ required: "Province is required" }}
        render={({ field, fieldState }) => (
          <SelectForm
            controlId={`${labelPrefix}province`}
            label={`${labelPrefix}Province`}
            {...field}
            error={fieldState.error}
            disabled={!regionCode}
          >
            <option value="">Select province</option>
            {provinces.map((p) => (
              <option key={p.code} value={p.code}>
                {p.name}
              </option>
            ))}
          </SelectForm>
        )}
      />

      {/* MUNICIPALITY */}
      <Controller
        name={`${labelPrefix}municipality`}
        control={control}
        rules={{ required: "Municipality is required" }}
        render={({ field, fieldState }) => (
          <SelectForm
            controlId={`${labelPrefix}municipality`}
            label={`${labelPrefix}Municipality`}
            {...field}
            error={fieldState.error}
            disabled={!provinceCode}
          >
            <option value="">Select municipality</option>
            {municipalities.map((m) => (
              <option key={m.code} value={m.code}>
                {m.name}
              </option>
            ))}
          </SelectForm>
        )}
      />

      {/* BARANGAY */}
      <Controller
        name={`${labelPrefix}barangay`}
        control={control}
        rules={{ required: "Barangay is required" }}
        render={({ field, fieldState }) => (
          <SelectForm
            controlId={`${labelPrefix}barangay`}
            label={`${labelPrefix}Barangay`}
            {...field}
            error={fieldState.error}
            disabled={!municipalityCode}
          >
            <option value="">Select barangay</option>
            {barangays.map((b) => (
              <option key={b.code} value={b.code}>
                {b.name}
              </option>
            ))}
          </SelectForm>
        )}
      />
    </>
  );
};

export default Address;
