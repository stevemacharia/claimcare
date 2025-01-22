import pool from "@/lib/db";
import { verifyPassword } from "@/lib/auth";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';  // You can use jsonwebtoken or any other JWT library

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);

    if (rows.length === 0) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const user = rows[0];
    const isValid = await verifyPassword(password, user.password);

    if (!isValid) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const userData = { id: user.id, email: user.email, role: user.role };
    

    // Save session (optional with next-auth or your custom method)
    return NextResponse.json({ user: userData });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
