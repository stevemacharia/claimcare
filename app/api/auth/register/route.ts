import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';
import { hashPassword } from '@/utils/auth';

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // Check if the email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: 'Email already in use.' }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Save user to the database
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'client',
      },
    });

    return NextResponse.json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Registration failed.' }, { status: 500 });
  }
}
