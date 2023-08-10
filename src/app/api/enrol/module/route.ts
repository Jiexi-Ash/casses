import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import axios from "axios";

export const POST = async (req: NextRequest, res: NextResponse) => {
    const body = await req.json();

    const { moduleCode } = body;

    const data = {
        moduleCode,
        "wsfunction": "enrol_manual_enrol_users",
        "wstoken": process.env.WSTOKEM,
        "moodlewsrestformat": "json",
        "enrolments[0][roleid]": 5,
        "enrolments[0][userid]": 5,
        "enrolments[0][courseid]": 9,
    }

    try {
         await axios.post("https://jiexiash.moodlecloud.com", data);

        return new NextResponse("Enrolled successfully", {status: 201});
    } catch (error) {
        console.error(error);
        return new NextResponse("Something went wrong", { status: 500 });
    }
};