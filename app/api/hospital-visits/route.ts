export async function GET(req: Request) {
    try {
        const url = new URL(req.url);
        const page = parseInt(url.searchParams.get("page") || "1");
        const limit = 20; // Load 20 records at a time
        const skip = (page - 1) * limit;

        const visits = await prisma.hospitalVisit.findMany({
            skip,
            take: limit,
            orderBy: { date: "desc" },
        });

        const totalRecords = await prisma.hospitalVisit.count();

        return NextResponse.json({ visits, totalRecords }, { status: 200 });
    } catch (error) {
        console.error("Error fetching visits:", error);
        return NextResponse.json({ error: "Failed to fetch visits" }, { status: 500 });
    }
}
