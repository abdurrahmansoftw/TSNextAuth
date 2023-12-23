import { NextRequest } from "next/server";

export function get(req: NextRequest) {
    return {
        body: [
            { id: 1, name: "akaid Doe" },
            { id: 2, name: "John Doe" },
        ],
    };
}