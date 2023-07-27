import dbConnect from "@/lib/dbConnect";
import ProductsCollection from "@/models/products";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const products = await ProductsCollection.findById({ _id: params.id });
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 400 });
  }
}
