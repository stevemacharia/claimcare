import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, department, amount, date, status } = body;

        console.log("Received POST data:", body);

        if (!name || !department || !amount || !date || !status) {
            return NextResponse.json(
                { success: false, error: "Missing fields" },
                { status: 400 }
            );
        }

        const parsedAmount = parseFloat(amount);
        const parsedDate = new Date(date);

        const newVisit = await prisma.HospitalVisit.create({
            data: {
                name,
                department,
                amount: parsedAmount,
                date: parsedDate,
                status,
            },
        });

        return NextResponse.json({ success: true, visit: newVisit }, { status: 201 });

    } catch (error) {
        console.error("❌ POST error:", error);
        return NextResponse.json(
            { success: false, error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export async function GET(req: Request) {
    try {
        const url = new URL(req.url);
        const page = parseInt(url.searchParams.get("page") || "1");
        const limit = 20;
        const skip = (page - 1) * limit;

        const visits = await prisma.hospitalVisit.findMany({
            skip,
            take: limit,
            orderBy: { date: "desc" },
        });

        const totalRecords = await prisma.hospitalVisit.count();

        return NextResponse.json({ visits, totalRecords }, { status: 200 });
    } catch (error) {
        console.error("❌ Error in GET hospital-visits route:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}