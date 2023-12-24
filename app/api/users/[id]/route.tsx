import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import scheme from '../schema';

export async function GET(req: NextRequest, params: { id: string }) {
    const user = await prisma.user.findMany({
        where: { id: parseInt(params.id)}
    })

    if (!user)
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    return NextResponse.json(user);
}

export async function PUT(req: NextRequest, {params}: {params: {id: string}}) {
    // validate body
    const body = await req.json();
    const validation =  scheme.safeParse(body);

    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });

   const user = await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    })

    if (!user)
        return NextResponse.json({ error: "User not found" }, { status: 404 });

    // update user in database
 const updatedUser =  await  prisma.user.update({
        where: {  id: user.id},
        data: {
            name: body.name,
            email: body.email
        }
    })

    return NextResponse.json(updatedUser);
   
}

export async function DELETE(req: NextRequest, params: { id: number }) {
    // fetch user from database
    if (params.id > 10)
        return NextResponse.json({ error: "User not found" }, { status: 404 }); 

    // if not found, return NextResponse.json({error: "User not found"}, {status: 404})
    // delete user from database
    return NextResponse.json({ message: "User deleted successfully" });

}