import {NextResponse} from "next/server";
import skillsData from "@/myinfo/skills.json";

export async function GET(){
    return NextResponse.json(skillsData);
}