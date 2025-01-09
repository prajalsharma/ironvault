import connectToMongoose from "@/db/connection";
import BtcJob from "@/models/job";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectToMongoose();

    const btcJobs = await BtcJob.find().sort({ id: 1 });
    
    const response = NextResponse.json({ status: 200, btcJobs });
    response.headers.set("Cache-Control", "no-store");
    return response;
  } catch (error) {
    console.error("Error fetching sorted jobs:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

