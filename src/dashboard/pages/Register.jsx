import RegisterForm from "../components/RegisterForm";
import { useAddressForm, useDetailsForm, useOtherInfo } from "../hook/RegisterUseEffect";

import InputForm from '../shared/InputForm';
import SelectForm from '../shared/SelectForm';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner, Alert, Modal } from 'react-bootstrap';

const Register = () => {
    const descendants = useDetailsForm();
    const descendantsAddress = useAddressForm();
    const contactPerson = useDetailsForm();
    const contactAddress = useAddressForm();
    const otherInformation = useOtherInfo();

    const [isValid, setIsValid] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(null); // null | true | false

    // Validation
    useEffect(() => {
        const isFilled = (...values) => values.every(val => val && val.toString().trim().length > 0);

        const infoValid = isFilled(
            descendants.firstName,
            descendants.lastName,
            descendants.gender
        );

        const addressValid = isFilled(
            descendantsAddress.region,
            descendantsAddress.province,
            descendantsAddress.municipal,
            descendantsAddress.barangay
        );

        const contactValid = isFilled(
            contactPerson.firstName,
            contactPerson.lastName,
            contactPerson.gender
        );

        const contactAddrValid = isFilled(
            contactAddress.region,
            contactAddress.province,
            contactAddress.municipal,
            contactAddress.barangay
        );

        const otherInfoValid = isFilled(
            otherInformation.burialNumber,
            otherInformation.contractStart,
            otherInformation.contractEnd
        );

        setIsValid(infoValid && addressValid && contactValid && contactAddrValid && otherInfoValid);

    }, [
        descendants.firstName,
        descendants.lastName,
        descendants.gender,
        descendantsAddress.region,
        descendantsAddress.province,
        descendantsAddress.municipal,
        descendantsAddress.barangay,
        contactPerson.firstName,
        contactPerson.lastName,
        contactPerson.gender,
        contactAddress.region,
        contactAddress.province,
        contactAddress.municipal,
        contactAddress.barangay,
        otherInformation.burialNumber,
        otherInformation.contractStart,
        otherInformation.contractEnd
    ]);

    const HandleSubmit = async () => {
        if (!isValid) {
            alert("Please fill out all required fields before submitting.");
            return;
        }

        const data = {
            information: {
                descendants,
                address: descendantsAddress
            },
            contact: {
                contactPerson,
                address: contactAddress
            },
            other: otherInformation
        };

        try {
            setIsSubmitting(true);
            setSubmitSuccess(null);

            const response = await axios.post("http://localhost:5000/records", data);
            console.log("Response:", response.data);

            // Delay hiding loading modal for UX
            setTimeout(() => {
                setIsSubmitting(false);
                setSubmitSuccess(true);
            }, 1000);

        } catch (error) {
            console.error("Submission error:", error);
            setTimeout(() => {
                setIsSubmitting(false);
                setSubmitSuccess(false);
            }, 1000);
        }
    }

    return (
        <>
            <RegisterForm header={"Registration Form"} handleSubmit={HandleSubmit}>

                {submitSuccess === true && <Alert variant="success">Registration successful!</Alert>}
                {submitSuccess === false && <Alert variant="danger">Submission failed. Try again.</Alert>}

                <h4 className="mt-3">Information</h4>
                <InputForm
                    label="First Name"
                    name="firstName"
                    placeholder="Enter first name"
                    value={descendants.firstName}
                    onChange={(e) => descendants.setFirstName(e.target.value)}
                    controlId="firstName"
                />
                <InputForm
                    label="Last Name"
                    name="lastName"
                    placeholder="Enter last name"
                    value={descendants.lastName}
                    onChange={(e) => descendants.setLastName(e.target.value)}
                    controlId="lastName"
                />
                <SelectForm
                    label="Gender"
                    name="gender"
                    value={descendants.gender}
                    onChange={(e) => descendants.setGender(e.target.value)}
                    controlId="gender"
                >
                    <option value="" disabled>Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </SelectForm>

                <h4 className="mt-3">Address</h4>
                <InputForm
                    label="Region"
                    name="region"
                    placeholder="Enter Region"
                    value={descendantsAddress.region}
                    onChange={(e) => descendantsAddress.setRegion(e.target.value)}
                    controlId="region"
                />
                <InputForm
                    label="Province"
                    name="province"
                    placeholder="Enter province"
                    value={descendantsAddress.province}
                    onChange={(e) => descendantsAddress.setProvince(e.target.value)}
                    controlId="province"
                />
                <InputForm
                    label="Municipal"
                    name="municipal"
                    placeholder="Enter municipal"
                    value={descendantsAddress.municipal}
                    onChange={(e) => descendantsAddress.setMunicipal(e.target.value)}
                    controlId="municipal"
                />
                <InputForm
                    label="Barangay"
                    name="barangay"
                    placeholder="Enter barangay"
                    value={descendantsAddress.barangay}
                    onChange={(e) => descendantsAddress.setBarangay(e.target.value)}
                    controlId="barangay"
                />

                <h4 className="mt-3">Contact Information</h4>
                <InputForm
                    label="Contact First Name"
                    name="contactFirstName"
                    placeholder="Enter Contact first name"
                    value={contactPerson.firstName}
                    onChange={(e) => contactPerson.setFirstName(e.target.value)}
                    controlId="contactFirstName"
                />
                <InputForm
                    label="Contact Last Name"
                    name="contactLastName"
                    placeholder="Enter Contact last name"
                    value={contactPerson.lastName}
                    onChange={(e) => contactPerson.setLastName(e.target.value)}
                    controlId="contactLastName"
                />
                <SelectForm
                    label="Gender"
                    name="contactGender"
                    value={contactPerson.gender}
                    onChange={(e) => contactPerson.setGender(e.target.value)}
                    controlId="contactGender"
                >
                    <option value="" disabled>Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </SelectForm>

                <h4 className="mt-3">Contact Address</h4>
                <InputForm
                    label="Contact Region"
                    name="contactRegion"
                    placeholder="Enter Contact Region"
                    value={contactAddress.region}
                    onChange={(e) => contactAddress.setRegion(e.target.value)}
                    controlId="contactRegion"
                />
                <InputForm
                    label="Contact Province"
                    name="contactProvince"
                    placeholder="Enter Contact Province"
                    value={contactAddress.province}
                    onChange={(e) => contactAddress.setProvince(e.target.value)}
                    controlId="contactProvince"
                />
                <InputForm
                    label="Contact Municipal"
                    name="contactMunicipal"
                    placeholder="Enter Contact Municipal"
                    value={contactAddress.municipal}
                    onChange={(e) => contactAddress.setMunicipal(e.target.value)}
                    controlId="contactMunicipal"
                />
                <InputForm
                    label="Contact Barangay"
                    name="contactBarangay"
                    placeholder="Enter Contact Barangay"
                    value={contactAddress.barangay}
                    onChange={(e) => contactAddress.setBarangay(e.target.value)}
                    controlId="contactBarangay"
                />

                <h4 className="mt-3">Other Information</h4>
                <InputForm
                    label="Burial Permit Number"
                    name="permitNumber"
                    placeholder="Enter Burial Permit Number"
                    value={otherInformation.burialNumber}
                    onChange={(e) => otherInformation.setBurialNumber(e.target.value)}
                    controlId="permitNumber"
                />

                <div className="d-flex gap-4">
                    <InputForm
                        label="Contract Start"
                        name="contractStart"
                        placeholder="Enter Contract Start"
                        value={otherInformation.contractStart}
                        onChange={(e) => otherInformation.setContractStart(e.target.value)}
                        controlId="contractStart"
                        type="date"
                    />
                    <InputForm
                        label="Contract End"
                        name="contractEnd"
                        placeholder="Enter Contract End"
                        value={otherInformation.contractEnd}
                        onChange={(e) => otherInformation.setContractEnd(e.target.value)}
                        controlId="contractEnd"
                        type="date"
                    />
                </div>

                <div className="mt-3">
                    <button
                        type="button"
                        className="btn btn-primary"
                        disabled={!isValid || isSubmitting}
                        onClick={HandleSubmit}
                    >
                        {isSubmitting ? (
                            <>
                                <Spinner animation="border" size="sm" role="status" className="me-2" />
                                Submitting...
                            </>
                        ) : (
                            "Register"
                        )}
                    </button>
                </div>
            </RegisterForm>

            {/* Loading Modal */}
            <Modal
                show={isSubmitting}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Body className="text-center py-5">
                    <Spinner animation="border" role="status" className="mb-3" />
                    <div>Submitting, please wait...</div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Register;
