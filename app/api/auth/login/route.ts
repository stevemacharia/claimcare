import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';
import { verifyPassword } from '@/utils/auth';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Find the user by email
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
    }

    // Verify the password
    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
    }

    // Create a token (for simplicity, using a placeholder token here)
    const token = `${user.role}-token`;

    // Set the authentication cookie
    const response = NextResponse.json({ message: 'Login successful.' });
    response.cookies.set(`${user.role}-token`, token, {
      httpOnly: true,
      path: '/',
      sameSite: 'strict',
    });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Login failed.' }, { status: 500 });
  }
}
