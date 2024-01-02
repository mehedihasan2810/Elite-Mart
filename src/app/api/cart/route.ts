import dbConnect from "@/lib/dbConnect";
import ProductsCollection from "@/models/products";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  // Extract product IDs from the query parameter
  const ids = req.nextUrl.searchParams.get("ids") as string;
  const productIds = ids.split(",");

  try {
    // Connect to the database using the dbConnect utility
    await dbConnect();

    // Retrieve products from the ProductsCollection based on the provided IDs
    const cartProducts = await ProductsCollection.find({
      _id: { $in: productIds },
    });

    // Return a JSON response with success and cartProducts fields
    return NextResponse.json({ success: true, cartProducts });
  } catch (error) {
    // Return a JSON response with failure, error, and status fields
    return NextResponse.json({ success: false, error: error }, { status: 400 });
  }
}
