import dbConnect from "@/lib/dbConnect";
import ProductsCollection from "@/models/products";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Connect to the database using the dbConnect utility
    await dbConnect();

    // Find a product by ID in the ProductsCollection
    const products = await ProductsCollection.findById({ _id: params.id });

    // Return a JSON response with success and data fields
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    // Return a JSON response with failure, error, and status fields
    return NextResponse.json({ success: false, error: error }, { status: 400 });
  }
}
