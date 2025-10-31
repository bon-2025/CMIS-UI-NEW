// src/validations/addressSchema.js
import { z } from "zod"

export const descendantAddressSchema = z.object({
  descendantAddressRegion: z.string().min(1, "Region is required"),
  descendantAddressProvince: z.string().min(1, "Province is required"),
  descendantAddressMunicipality: z.string().min(1, "Municipality is required"),
  descendantAddressBarangay: z.string().min(1, "Barangay is required"),
})

export const contactAddressSchema = z.object({
  contactAddressRegion: z.string().min(1, "Contact region is required"),
  contactAddressProvince: z.string().min(1, "Contact province is required"),
  contactAddressMunicipality: z.string().min(1, "Contact municipality is required"),
  contactAddressBarangay: z.string().min(1, "Contact barangay is required"),
})
