import RegisterForm from "../components/RegisterForm";
///import { HandleSubmit } from "../utils/HandleSubmit";
import { useAddressForm, useDetailsForm, useOtherInfo } from "../hook/RegisterUseEffect";

import InputForm from '../shared/InputForm';
import SelectForm from '../shared/SelectForm';
import { useState } from 'react';
import { navigate, registerForm, FormSubmit } from '../service/RegisterService';

const Register = () => {
    const descendants = useDetailsForm();
    const descendantsAdress = useAddressForm();
    const contactPerson = useDetailsForm();
    const contactAddress = useAddressForm();
    const otherInformation = useOtherInfo();

    const [validationError, setValidationError] = useState("");

    const HandleSubmit = () =>{
        const data = {
            information : {
                descendants,
                address:{
                    descendantsAdress
                }
            },
            contact:{
                contactPerson,
                address: {
                    contactAddress
                }
            }
        }

        console.log(data);
    }


    return (
        <RegisterForm header={"Registration Form"} handleSubmit={HandleSubmit}>
             <h4 className="mt-3">Information</h4>
            <InputForm label="First Name" 
                        name={"firstName"} 
                        placeholder={"Enter first name"} 
                        value={descendants.firstName} 
                        onChange={(e) => descendants.setFirstName(e.target.value)}
                        controlId={"firstName"}/>
            <InputForm label="Last Name" 
                        name={"lastName"} 
                        placeholder={"Enter last name"} 
                        value={descendants.lastName} 
                        onChange={(e) => descendants.setLastName(e.target.value)}
                        controlId={"lastanme"}/>
            <SelectForm label="Gender"
                        name="gender"
                        value={descendants.gender}
                        onChange={(e) => descendants.setGender(e.target.value)}
                        controlId="gender">
                <option value="" disabled>Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </SelectForm>

             <h4 className="mt-3">Address</h4>

            <InputForm label="Region" 
                        name={"region"} 
                        placeholder={"Enter Region"} 
                        value={descendantsAdress.region} 
                        onChange={(e) => descendantsAdress.setRegion(e.target.value)}
                        controlId={"region"}
                        type={"text"}/>
            <InputForm label="Province" 
                        name={"province"} 
                        placeholder={"Enter province"} 
                        value={descendantsAdress.province} 
                        onChange={(e) => descendantsAdress.setProvince(e.target.value)}
                        controlId={"province"}type={"text"}/>
            <InputForm label="Municipal" 
                        name={"municipal"} 
                        placeholder={"Enter municipal"} 
                        value={descendantsAdress.province} 
                        onChange={(e) => descendantsAdress.setMunicipal(e.target.value)}
                        controlId={"municipal"}
                        type={"text"}/>
            <InputForm label="Barangay" 
                        name={"barangay"} 
                        placeholder={"Enter barangay"} 
                        value={descendantsAdress.barangay} 
                        onChange={(e) => descendantsAdress.setBarangay(e.target.value)}
                        controlId={"barangay"}
                        type={"text"}/>

             <h4 className="mt-3">Contact Information</h4>

            <InputForm label="Contact First Name" 
                        name={"contactFirstName"} 
                        placeholder={"Enter Contact first name"} 
                        value={contactPerson.firstName} 
                        onChange={(e) => contactPerson.setFirstName(e.target.value)}
                        controlId={"contactFirstName"}
                        type={"text"}/>
            <InputForm label="Contact Last Name" 
                        name={"contactLastname"} 
                        placeholder={"Enter contact last name"} 
                        value={contactPerson.lastName} 
                        onChange={(e) => contactPerson.setLastName(e.target.value)}
                        controlId={"contactLastname"}
                        type={"text"}/>
            <SelectForm label="Gender"
                        name="contactGender"
                        value={contactPerson.gender}
                        onChange={(e) => contactPerson.setGender(e.target.value)}
                        controlId="contactGender">
                <option value="" disabled>Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </SelectForm>

            <h4 className="mt-3">Contact Address</h4>

            <InputForm label="Contact Region" 
                        name={"contactRegion"} 
                        placeholder={"Enter Contact Region"} 
                        value={contactAddress.region} 
                        onChange={(e) => contactAddress.setRegion(e.target.value)}
                        controlId={"contactRegion"}/>
            <InputForm label="Contact Province" 
                        name={"contactProvince"} 
                        placeholder={"Enter Contact Province"} 
                        value={contactAddress.province} 
                        onChange={(e) => contactAddress.setProvince(e.target.value)}
                        controlId={"contactProvince"}
                        type={"text"}/>
            <InputForm label="Contact Municipal" 
                        name={"contactMunicipal"} 
                        placeholder={"Enter Contact Municipal"} 
                        value={contactAddress.province} 
                        onChange={(e) => contactAddress.setMunicipal(e.target.value)}
                        controlId={"contactMunicipal"}
                        type={"text"}/>
            <InputForm label="Contact Barangay" 
                        name={"contactBarangay"} 
                        placeholder={"Enter Contact Barangay"} 
                        value={contactAddress.barangay} 
                        onChange={(e) => contactAddress.setBarangay(e.target.value)}
                        controlId={"contactBarangay"}
                        type={"text"}/>

             <h4 className="mt-3">Other Information</h4>

            <InputForm label="Burial Permit Number" 
                        name={"permitNumber"} 
                        placeholder={"Enter Burial Permit Number"} 
                        value={otherInformation.burialNumber} 
                        onChange={(e) => otherInformation.setBurialNumber(e.target.value)}
                        controlId={"permitNumber"}/>

            <div className="d-flex gap-4">
                <InputForm label="Contract Start" 
                        name={"contratcStart"} 
                        placeholder={"Enter Contract Start"} 
                        value={otherInformation.contractStart} 
                        onChange={(e) => otherInformation.setContractStart(e.target.value)}
                        controlId={"contratcStart"}
                        type={"date"}/>
                <InputForm label="Contract End" 
                        name={"contractEnd"} 
                        placeholder={"Enter Contract End"} 
                        value={otherInformation.contractEnd} 
                        onChange={(e) => otherInformation.setContractEnd(e.target.value)}
                        controlId={"contractEnd"}
                        type={"date"}/>
            </div>
            <InputForm label="Contract End" 
                        value={"Register"} 
                        type={"submit"}/>


        </RegisterForm>
    );
}

export default Register;
