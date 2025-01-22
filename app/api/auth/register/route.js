import pool from "@/lib/db";
import { hashPassword } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password, role } = await req.json();

  if (!email || !password || !role) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  try {
    // Check if the user already exists
    const [existingUser] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    if (existingUser.length > 0) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Insert the new user into the database
    await pool.query("INSERT INTO users (email, password, role) VALUES (?, ?, ?)", [
      email,
      hashedPassword,
      role,
    ]);

    return NextResponse.json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
