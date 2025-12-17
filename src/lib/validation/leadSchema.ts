import { z } from "zod";

export const leadSchema = z.object({
  fullName: z.string().min(2, "Oppgi fullt navn"),
  email: z.string().email("Ugyldig e-post"),
  phone: z
    .string()
    .min(8, "Oppgi telefonnummer") // Phone number with country code can be longer
    .max(25, "Telefonnummer er for langt"),
  postalCode: z
    .string()
    .regex(/^\d{4}$/, "Oppgi et norsk postnummer på fire siffer"),
  licenseType: z.string().min(1),
  mainLicenseSelection: z.string().optional(), // B, B_AUT, OTHER
  additionalInfo: z.string().max(800).optional().or(z.literal("")), // Optional free text field
  marketingConsent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Du må godta samtykke for å sende skjemaet.",
    }),
  sourcePage: z
    .string()
    .default("forerkortportalen.no")
    .optional(),
});

export type LeadPayload = z.infer<typeof leadSchema>;

