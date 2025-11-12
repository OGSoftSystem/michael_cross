import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";
import { UserRoles } from "./database/models/user.model";

export async function proxy(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    // If no session and trying to access protected route
    if (!session?.user) {
      if (request.nextUrl.pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/auth/sign-in", request.url));
      }
      return NextResponse.next();
    }
    // If no session and trying to access protected route
    if (!session?.user || session.user.role !== UserRoles.ADMIN) {
      if (request.nextUrl.pathname.startsWith("/auth/sign-up")) {
        return NextResponse.redirect(new URL("/", request.url));
      }
      return NextResponse.next();
    }
    // If no session and trying to access protected route
    if (session?.user && session.user.role !== UserRoles.ADMIN) {
      if (request.nextUrl.pathname == "/auth/sign-up") {
        return NextResponse.redirect(new URL("/", request.url));
      }
      return NextResponse.next();
    }

    // User is signed in
    const user = session.user;

    // If user is on auth pages but already signed in, redirect to home
    if (request.nextUrl.pathname.startsWith("/auth") && user) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Check dashboard access - user must be either USER or CREATOR
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
      const hasAccess =
        user.role === UserRoles.ADMIN || user.role === UserRoles.CREATOR;

      if (!hasAccess) {
        return NextResponse.redirect(new URL("/unauthorized", request.url));
      }
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);

    if (request.nextUrl.pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/auth/sign-in", request.url));
    }

    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};
