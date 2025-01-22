import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function middleware(request: Request) {
  const publicRoutes = ["/", "/register", "/login"];

  const url = new URL(request.url);
  if (publicRoutes.some((route) => url.pathname.startsWith(route))) {
    return NextResponse.next();
  }

  const token = request.headers.get("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    jwt.verify(token, JWT_SECRET);
    return NextResponse.next();
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
