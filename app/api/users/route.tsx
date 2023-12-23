import { NextRequest, NextResponse } from "next/server";
import scheme from './schema';

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: "akaid Doe" },
        { id: 2, name: "John Doe" },
    ]);
}

export async function POST(request: NextRequest) {
    const body  = await request.json();

    const validation =  scheme.safeParse(body);

    // validate body
    // if invalid, return NextResponse.json({error: "Invalid body"}, {status: 400})
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });

    return NextResponse.json({id: 3, name: body.name});
}