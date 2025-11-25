import { Schema, model, models, type InferSchemaType } from "mongoose";

const LeadSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    postalCode: { type: String, required: true },
    licenseType: { type: String, required: true },
    startDate: { type: String, required: true },
    intensiveCourse: { type: String, enum: ["ja", "nei", "usikker"], required: true },
    preferredContact: { type: String, enum: ["telefon", "epost"], required: true },
    trafficCourseStatus: {
      type: String,
      enum: ["fullfort", "pagar", "ikke"],
      required: true,
    },
    message: { type: String },
    marketingConsent: { type: Boolean, required: true },
    sourcePage: { type: String, default: "forerkorttilbud.no" },
  },
  { timestamps: true }
);

export type LeadDocument = InferSchemaType<typeof LeadSchema>;

const Lead = models.Lead || model("Lead", LeadSchema);

export default Lead;

