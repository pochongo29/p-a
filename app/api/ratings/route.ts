import { NextRequest, NextResponse } from "next/server";

// In-memory store — resets on server restart, no DB required
const ratingsStore: Record<string, { total: number; count: number }> = {};

export async function GET(req: NextRequest) {
  const dishId = req.nextUrl.searchParams.get("dishId") ?? "";
  const data = ratingsStore[dishId] ?? { total: 0, count: 0 };
  const average =
    data.count > 0
      ? Math.round((data.total / data.count) * 10) / 10
      : 0;
  return NextResponse.json({ average, count: data.count });
}

export async function POST(req: NextRequest) {
  const { dishId, rating } = await req.json();
  if (!dishId || rating < 1 || rating > 5) {
    return NextResponse.json({ error: "Invalid" }, { status: 400 });
  }
  if (!ratingsStore[dishId]) {
    ratingsStore[dishId] = { total: 0, count: 0 };
  }
  ratingsStore[dishId].total += rating;
  ratingsStore[dishId].count += 1;
  const { total, count } = ratingsStore[dishId];
  const average = Math.round((total / count) * 10) / 10;
  return NextResponse.json({ average, count });
}
