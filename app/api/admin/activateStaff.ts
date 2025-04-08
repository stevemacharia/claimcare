import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export async function POST(req: Request) {
  const { staffId } = await req.json();

  const staff = await prisma.user.update({
    where: { id: staffId },
    data: { isActive: true },
  });

  return NextResponse.json({ message: 'Staff activated successfully', staff });
}
