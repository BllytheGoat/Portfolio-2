import { kv } from "@vercel/kv"
import { NextResponse } from "next/server"

export async function GET() {
  const count = await kv.incr("visitor_count")

  return new NextResponse(`data: ${count}\n\n`, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  })
}

