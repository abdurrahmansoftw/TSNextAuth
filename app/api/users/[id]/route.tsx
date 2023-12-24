import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import scheme from '../schema';

export async function GET(req: NextRequest, params: { id: number }) {
    const user = await prisma.user.findMany({
        where: {
            id: params.id
        }
    })

    if (!user)
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    return NextResponse.json(user);
}

export async function PUT(req: NextRequest, params: { id: number }) {
    // validate body
    const body = await req.json();

  const validation =  scheme.safeParse(body);

    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });

    if (params.id > 10)
        return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json({ id: 3, name: body.name });
   
}

export async function DELETE(req: NextRequest, params: { id: number }) {
    // fetch user from database
    if (params.id > 10)
        return NextResponse.json({ error: "User not found" }, { status: 404 }); 

    // if not found, return NextResponse.json({error: "User not found"}, {status: 404})
    // delete user from database
    return NextResponse.json({ message: "User deleted successfully" });

}