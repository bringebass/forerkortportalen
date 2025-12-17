import { Schema, model, models, type InferSchemaType } from "mongoose";

const LeadSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }, // Phone number with country code (e.g., "+47 9X XX XX XX")
    postalCode: { type: String, required: true },
    licenseType: { type: String, required: true },
    mainLicenseSelection: { type: String }, // B, B_AUT, OTHER
    additionalInfo: { type: String }, // Optional free text field for additional information
    marketingConsent: { type: Boolean, required: true },
    sourcePage: { type: String, default: "forerkortportalen.no" },
  },
  { timestamps: true }
);

export type LeadDocument = InferSchemaType<typeof LeadSchema>;

const Lead = models.Lead || model("Lead", LeadSchema);

export default Lead;

