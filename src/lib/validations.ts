import { z } from "zod";

export const rentalRequirementSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(2, "City is required"),
  preferredArea: z.string().min(2, "Preferred area/locality is required"),
  budget: z.string().min(1, "Please enter your budget"),
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
  moveInDate: z.string().min(1, "Please select an expected move-in date"),
  additionalRequirements: z.string().optional(),
});

export type RentalRequirementInput = z.infer<typeof rentalRequirementSchema>;
