import { NextRequest, NextResponse } from "next/server";

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

  const { email } = body as Record<string, unknown>;

  if (typeof email !== "string" || email.trim() === "") {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json({ error: "Email address is invalid." }, { status: 400 });
  }

  console.log("[newsletter] New subscriber:", email.trim());

  return NextResponse.json(
    { success: true, message: "You're subscribed!" },
    { status: 200 }
  );
}
