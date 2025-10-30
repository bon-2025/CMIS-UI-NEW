import { z } from "zod";

export const addressSchema = z.object({
  descendantFirstName: z.string().min(1, "First name is required"),
  descendantLastName: z.string().min(1, "Last name is required"),
  descendantGender: z.string().min(1, "Gender is required"),

  // Updated to match prefixed address fields
  descendantAddressRegion: z.string().min(1, "Region is required"),
  descendantAddressProvince: z.string().min(1, "Province is required"),
  descendantAddressMunicipality: z.string().min(1, "Municipality is required"),
  descendantAddressBarangay: z.string().min(1, "Barangay is required"),

  contactFirstName: z.string().min(1, "Contact first name is required"),
  contactLastName: z.string().min(1, "Contact last name is required"),
  contactGender: z.string().min(1, "Contact gender is required"),

  // New fields for contact person
  contactNumber: z
    .string()
    .regex(/^09\d{9}$/, "Contact number must be a valid 11-digit Philippine number (e.g. 09123456789)"),
  contactEmail: z.string().email("Invalid email address"),

  // Updated to match prefixed contact address fields
  contactAddressRegion: z.string().min(1, "Contact region is required"),
  contactAddressProvince: z.string().min(1, "Contact province is required"),
  contactAddressMunicipality: z.string().min(1, "Contact municipality is required"),
  contactAddressBarangay: z.string().min(1, "Contact barangay is required"),

  burialPermitNumber: z.string().optional(),
  contractStart: z.string().optional(),
  contractEnd: z.string().optional(),
});
