// src/validations/index.js
import { z } from "zod"
import { descendantSchema } from "./Validation/descendantSchema"
import { contactSchema } from "./Validation/contactSchema"
import { descendantAddressSchema, contactAddressSchema } from "./Validation/addressSchema"

export const RegisterValidation = z
  .object({
    burialPermitNumber: z.string().optional(),
    contractStart: z.string().optional(),
    contractEnd: z.string().optional(),
  })
  // Combine all parts into one full validation schema
  .merge(descendantSchema)
  .merge(descendantAddressSchema)
  .merge(contactSchema)
  .merge(contactAddressSchema)
