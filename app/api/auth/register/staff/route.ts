import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { hashPassword } from "@/lib/auth";

export async function POST(req: Request) {
  const { email, password, role } = await req.json();

  if (role !== "ADMIN" && role !== "STAFF") {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }

  const hashedPassword = await hashPassword(password);

  const user = await prisma.user.create({
    data: { email, password: hashedPassword, role },
  });

  return NextResponse.json({ user });
}
