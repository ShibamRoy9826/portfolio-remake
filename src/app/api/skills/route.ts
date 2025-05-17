import { promises as fs } from 'fs';
import {NextResponse} from "next/server";

export async function GET(){
    const file = await fs.readFile(process.cwd() + '/myinfo/skills.json', 'utf8')
    const jsonData=JSON.parse(file);
    return NextResponse.json(jsonData);
}