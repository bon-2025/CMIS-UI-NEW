import { useState } from "react";
import { register } from '../service/RegisterService';


export const useAddressForm = () => {
   const [region, setRegion] = useState("");
   const [province, setProvince] = useState("");
   const [municipal, setMunicipal] = useState("");
   const [barangay, setBarangay] = useState("");

   const isAddressFormValid =  region !== "" || province !== "" || municipal !== "" || barangay !== "";

   return { region, setRegion, province, setProvince, municipal, setMunicipal, barangay, setBarangay, isAddressFormValid, };
}
export const useDetailsForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");

  const isDetailsFormValid = firstName.length > 0 && lastName.length > 0 && gender !== "";
  return { firstName, setFirstName, lastName, setLastName, gender, setGender, isDetailsFormValid };
};
export const useOtherInfo = () => {
  const [burialNumber, setBurialNumber] = useState("");
  const [contractStart, setContractStart] = useState("");
  const [contractEnd, setContractEnd] = useState("");

  const isuseOtherInfoValid = burialNumber !== "" || contractStart !== "" || contractEnd !== "";

  return { burialNumber, setBurialNumber, contractStart, setContractStart, contractEnd, setContractEnd, isuseOtherInfoValid };
};