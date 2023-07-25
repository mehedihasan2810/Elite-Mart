// without a defined matcher this one liner applies
// next auth to entire project
export { default } from "next-auth/middleware";

// applies next auth to only matched routes
// https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
// export const config = {
//     matcher: ['/practice', '/'],
//   }
