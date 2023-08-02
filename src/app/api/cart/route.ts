import dbConnect from "@/lib/dbConnect";
import ProductsCollection from "@/models/products";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  const ids = req.nextUrl.searchParams.get("ids") as string;
  const productIds = ids.split(",");

  try {
    await dbConnect();
    const cartProducts = await ProductsCollection.find({
      _id: { $in: productIds },
    });
    return NextResponse.json({ success: true, cartProducts });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 400 });
  }
}
