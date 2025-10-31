// src/validations/descendantSchema.js
import { z } from "zod"

export const descendantSchema = z.object({
  descendantFirstName: z.string().min(1, "First name is required"),
  descendantLastName: z.string().min(1, "Last name is required"),
  descendantGender: z.string().min(1, "Gender is required"),
})
