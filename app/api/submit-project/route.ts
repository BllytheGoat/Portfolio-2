import { kv } from "@vercel/kv"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { name, email, projectIdea } = await request.json()

  if (!name || !email || !projectIdea) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const projectId = `project:${Date.now()}`
  await kv.hset(projectId, { name, email, projectIdea, status: "new" })

  return NextResponse.json({ message: "Project submitted successfully" }, { status: 201 })
}

