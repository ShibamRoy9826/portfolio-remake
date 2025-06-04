import {NextResponse} from "next/server";
import acheivementsData from "@/myinfo/acheivements.json";


export async function GET(){
    return NextResponse.json(acheivementsData);
}