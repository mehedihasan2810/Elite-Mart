import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";
import { options } from "./app/api/auth/[...nextauth]/options";
import chalk from "chalk";
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";
// without a defined matcher this one liner applies
// next auth to entire project
export { default } from "next-auth/middleware";

// applies next auth to only matched routes
// https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher

// export function middleware() {
//   const session = await getSession();
//   console.log(chalk.red(session));

//   if(!session){

//  NextResponse.redirect('http://localhost:3000/api/auth/signin');
//  return NextResponse.json({foo: 'fooo'})
//   }
//   if (!session) {
//     return NextResponse.json(
//       { success: false, message: "authentication failed" },
//       { status: 401, headers: { "content-type": "application/json" } }
//     );

//   }
//   NextResponse.next();
// }

export const config = {
  matcher: "/",
};

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
