import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: "akaid Doe" },
        { id: 2, name: "John Doe" },
    ]);
}

export async function POST(request: NextRequest) {
    const body  = await request.json();
    // validate body
    // if invalid, return NextResponse.json({error: "Invalid body"}, {status: 400})
    if (!body.name)
        return NextResponse.json({ error: "Name is required" }, { status: 400 });

    return NextResponse.json({id: 3, name: body.name});
}