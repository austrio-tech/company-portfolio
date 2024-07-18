import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = new URL(request.url);

  // List of routes
  const routes = ["/about", "/contact", "/services", "/portfolio"];

  // Check if the path matches any routes
  const isRoute = routes.some((path) =>
    url.pathname.includes(path)
  );

  if (isRoute) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/404", request.url));
  }
}

export const config = {
  matcher: ["/about", "/contact", "/services", "/portfolio"],
};

