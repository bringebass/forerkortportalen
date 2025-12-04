import { NextResponse } from "next/server";

import Lead from "@/lib/models/Lead";
import { connectToDatabase } from "@/lib/mongodb";
import { leadSchema } from "@/lib/validation/leadSchema";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = leadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Valideringsfeil",
        errors: parsed.error.flatten(),
      },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();

    await Lead.create({
      ...parsed.data,
      sourcePage: parsed.data.sourcePage ?? "forerkortportalen.no",
    });

    return NextResponse.json(
      { message: "Lead lagret" },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    console.error("Failed to save lead", error);
    
    // More detailed error logging for debugging
    const errorMessage = error?.message || "Unknown error";
    const errorName = error?.name || "Unknown";
    
    console.error("Error details:", {
      name: errorName,
      message: errorMessage,
      stack: error?.stack,
      hasMongoUri: !!process.env.MONGODB_URI,
      mongoDbName: process.env.MONGODB_DB || "drivingschool_leads",
    });
    
    // Check for specific MongoDB connection errors
    if (errorMessage.includes("MONGODB_URI mangler")) {
      return NextResponse.json(
        {
          message: "Database konfigurasjon mangler. Kontakt systemadministrator.",
        },
        { status: 500 }
      );
    }
    
    if (errorMessage.includes("authentication") || errorMessage.includes("Authentication failed")) {
      return NextResponse.json(
        {
          message: "Database autentisering feilet. Kontakt systemadministrator.",
        },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      {
        message:
          "Vi klarte ikke å lagre henvendelsen akkurat nå. Prøv igjen om litt.",
        // Only include error details in development
        ...(process.env.NODE_ENV === "development" && {
          error: errorMessage,
        }),
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "API kjører",
  });
}



