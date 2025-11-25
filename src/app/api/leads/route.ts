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
      sourcePage: parsed.data.sourcePage ?? "forerkorttilbud.no",
    });

    return NextResponse.json(
      { message: "Lead lagret" },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Failed to save lead", error);
    return NextResponse.json(
      {
        message:
          "Vi klarte ikke å lagre henvendelsen akkurat nå. Prøv igjen om litt.",
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

