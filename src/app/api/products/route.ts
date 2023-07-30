import { NextResponse } from "next/server";
import ProductsCollection from "@/models/products";
import dbConnect from "@/lib/dbConnect";
// import isAuthenticated from "@/utilities/isAuthenticated";

export async function GET() {
  try {
    // if (isAuthenticated()) {
      await dbConnect();
      const products = await ProductsCollection.find();
      return NextResponse.json({ success: true, data: products });
      // return NextResponse.json({ success: true, data: 'foooooooooooooooo' });
    // } else {
    //   return NextResponse.json(
    //     { success: false, message: "authentication failed" },
    //     { status: 401, headers: { "content-type": "application/json" } }
    //   );
    // }
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 400 });
  }
}
