import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'quiz-results.json');

export async function GET() {
  try {
    const file = await fs.readFile(DATA_FILE, 'utf-8');
    const results = JSON.parse(file);
    return NextResponse.json({ success: true, results });
  } catch (e) {
    return NextResponse.json({ success: false, error: 'No data found' }, { status: 404 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    let results = [];
    try {
      const file = await fs.readFile(DATA_FILE, 'utf-8');
      results = JSON.parse(file);
    } catch (e) {
      results = [];
    }
    results.push({ ...data, createdAt: new Date().toISOString() });
    await fs.writeFile(DATA_FILE, JSON.stringify(results, null, 2));
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ success: false, error: 'Failed to save data' }, { status: 500 });
  }
}