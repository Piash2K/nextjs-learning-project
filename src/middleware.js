import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const currentCookie = request.cookies.get("nextjs-token")
  console.log(currentCookie)
  const dummyUserSData = {
    role: "admin",
    // role: "user",
    email: "test@admin.com"
  }
  let isServicesPage = request.nextUrl.pathname.startsWith("/services");
  let isAdmin = dummyUserSData.role =="admin"
  if(isServicesPage && !isAdmin)
    // return NextResponse.redirect(new URL("/login", request.url))
    return NextResponse.rewrite(new URL("/login", request.url))
  return NextResponse.next();
}
// export const config ={
//   matcher: '/about/:path*',
// }