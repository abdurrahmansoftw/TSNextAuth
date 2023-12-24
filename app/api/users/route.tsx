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

  const user = await  prisma.user.findUnique({
        where: {
            email: body.email
        }
    })

    // check if user exists
    if (user)
        return NextResponse.json({error: "User already exists"}, {status: 400})
    
    // create user in database
    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
        }
    })

    return NextResponse.json(newUser, { status: 201 });
}