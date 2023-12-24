import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import scheme from './schema';

export async function GET(request: NextRequest) {
  const users =await  prisma.user.findMany()
    return NextResponse.json(users);
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