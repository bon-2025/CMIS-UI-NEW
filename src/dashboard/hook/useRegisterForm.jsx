// hooks/useRegisterForm.js
import { useState } from "react";
import { usePhilippineAddress } from "./usePhilippineAddress";


export const useRegisterForm = () => {
  const [descendants, setDescendants] = useState({
    firstName: "", lastName: "", gender: ""
  });

  const [contactPerson, setContactPerson] = useState({
    firstName: "", lastName: "", gender: ""
  });

  const [otherInformation, setOtherInformation] = useState({
    burialNumber: "", contractStart: "", contractEnd: ""
  });

  // Use separate address logic for each address block
  const descendantsAddress = usePhilippineAddress();
  const contactAddress = usePhilippineAddress();

  return {
    descendants,
    contactPerson,
    otherInformation,
    descendantsAddress,
    contactAddress,
    setDescendants,
    setContactPerson,
    setOtherInformation
  };
};
