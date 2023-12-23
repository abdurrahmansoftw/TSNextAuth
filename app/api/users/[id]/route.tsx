import { NextRequest, NextResponse } from "next/server";

export function get(req: NextRequest, params: { id: number }) {
    if (params.id > 10)
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    return NextResponse.json({ id: params.id, name: "aakid Doe" });
}