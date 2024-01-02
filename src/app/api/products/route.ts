import { NextResponse } from "next/server";
import ProductsCollection from "@/models/products";
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    // Connect to the database using the dbConnect utility
    await dbConnect();

    // Retrieve all products from the ProductsCollection
    const products = await ProductsCollection.find();

    // Return a JSON response with success and data fields
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    // Return a JSON response with failure, error, and status fields
    return NextResponse.json({ success: false, error: error }, { status: 400 });
  }
}
