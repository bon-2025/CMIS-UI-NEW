// src/validations/contactSchema.js
import { z } from "zod"

export const contactSchema = z.object({
  contactFirstName: z.string().min(1, "Contact first name is required"),
  contactLastName: z.string().min(1, "Contact last name is required"),
  contactGender: z.string().min(1, "Contact gender is required"),
  contactNumber: z
    .string()
    .regex(/^09\d{9}$/, "Contact number must be a valid 11-digit Philippine number (e.g. 09123456789)"),
  contactEmail: z.string().email("Invalid email address"),
})
