import connectToMongoose from "@/db/connection";
import BtcJob from "@/models/job";
import { NextResponse } from "next/server";

// ✅ Force dynamic rendering in Next.js
export const dynamic = "force-dynamic";

// ✅ Handle GET requests to fetch sorted BTC jobs
export async function GET() {
  try {
    // 🔗 Connect to MongoDB
    await connectToMongoose();

    // ✅ Fetch jobs and sort by 'id' (including decimals)
    const btcJobs = await BtcJob.aggregate([
      {
        $addFields: {
          numericId: {
            $convert: {
              input: "$id",
              to: "double", // 🔢 Convert string or numeric values to double (handles decimals too)
              onError: 0,   // 🛑 Default value if conversion fails
              onNull: 0,    // 🛑 Default value if null
            },
          },
        },
      },
      {
        $sort: { numericId: 1 }, // 🔼 Sort ascending based on the numeric ID
      },
    ]);

    // ✅ Send a successful response with sorted jobs
    const response = NextResponse.json({ status: 200, btcJobs });
    response.headers.set("Cache-Control", "no-store"); // 🚫 Disable caching for fresh data
    return response;
  } catch (error) {
    // ❌ Error handling
    console.error("Error fetching sorted jobs:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}


