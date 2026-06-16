import { NextRequest, NextResponse } from "next/server";

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest): Promise<NextResponse> {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return NextResponse.json({ error: "Request body must be a JSON object." }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || name.trim() === "") {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (typeof email !== "string" || email.trim() === "") {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json({ error: "Email address is invalid." }, { status: 400 });
  }
  if (typeof message !== "string" || message.trim() === "") {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const submission: ContactBody = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  };

  console.log("[contact] New submission:", submission);

  return NextResponse.json(
    { success: true, message: "We'll be in touch soon!" },
    { status: 200 }
  );
}
