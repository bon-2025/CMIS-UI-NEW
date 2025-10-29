// schemas/addressSchema.js
import { z } from "zod";

export const addressSchema = z.object({
  region: z.string().min(1, "Region is required"),
  province: z.string().min(1, "Province is required"),
  municipality: z.string().min(1, "Municipality is required"),
  barangay: z.string().min(1, "Barangay is required"),
});
