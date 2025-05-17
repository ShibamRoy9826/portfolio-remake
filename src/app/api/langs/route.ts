import { NextResponse } from 'next/server';
import {promises as fs} from 'fs';
import path from 'path';

export async function GET(request) {
  try {
    const fPath=path.join(process.cwd(), 'myinfo', 'skills.json');
    const content=await fs.readFile(fPath,"utf8");
    const contentParsed=JSON.parse(content);
    return NextResponse.json(contentParsed);


  } catch (error) {
    console.error('Error reading skill files:', error);
    return NextResponse.json(
      { message: 'Failed to load skill set', error: error.message },
      { status: 500 }
    );
  }
}