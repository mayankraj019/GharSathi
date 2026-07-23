import { z } from "zod";

export const rentalRequirementSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must not exceed 100 characters"),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must not exceed 15 digits")
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(254, "Email must not exceed 254 characters"),
  city: z
    .string()
    .trim()
    .min(2, "City is required")
    .max(100, "City must not exceed 100 characters"),
  preferredArea: z
    .string()
    .trim()
    .min(2, "Preferred area/locality is required")
    .max(150, "Preferred area must not exceed 150 characters"),
  budget: z
    .string()
    .trim()
    .min(1, "Please enter your budget")
    .max(50, "Budget must not exceed 50 characters"),
  flatType: z.enum(["1RK", "1BHK", "2BHK", "3BHK"], {
    message: "Please select a valid flat type",
  }),
  tenantType: z.enum(
    [
      "Student (Boys)",
      "Student (Girls)",
      "Working Professional",
      "Couple",
      "Family",
    ],
    {
      message: "Please select a valid tenant type",
    }
  ),
  moveInDate: z
    .string()
    .trim()
    .min(1, "Please select an expected move-in date")
    .max(20, "Invalid date format"),
  additionalRequirements: z
    .string()
    .trim()
    .max(1000, "Additional requirements must not exceed 1000 characters")
    .optional(),
});

export type RentalRequirementInput = z.infer<typeof rentalRequirementSchema>;
