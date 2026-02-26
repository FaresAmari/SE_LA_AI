import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // TODO: Replace this with a real email service
  console.log("New contact form submission:", { name, email, message });

  return NextResponse.json({ success: true });
}
