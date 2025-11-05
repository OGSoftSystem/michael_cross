import { NextRequest, NextResponse } from "next/server";
import { authClient } from "./lib/auth-client";

export async function proxy(request: NextRequest) {
  const session = await authClient.getSession(); // Get session from Better Auth

  if (!session) {
    // User is not authenticated, redirect to login
    return NextResponse.redirect(new URL("/sig-in", request.url));
  }

  // User is authenticated, proceed with authorization checks
  if (request.nextUrl.pathname.startsWith("/dashboard") && !session.data?.user) {
    // User is not an admin, redirect to a different page or show an error
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  // Continue to the requested page
  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
