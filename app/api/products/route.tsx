import { NextRequest, NextResponse } from "next/server";
import scheme from './schema';

export function GET(request: NextRequest) {
  return NextResponse.json([
      { id: 1, name: "milk", price: 2.99 },
      { id: 2, name: "bread", price: 3.99 },
  ]);
}

export async function POST(request: NextRequest) {
  const body  = await request.json();
  const validation =  scheme.safeParse(body);
  if (!validation.success)
      return NextResponse.json(validation.error.errors, { status: 400 });

  return NextResponse.json({id: 3, name: body.name, price: body.price}, { status: 201 })
}