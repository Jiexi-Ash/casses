import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseServer";
import { prisma } from "@/lib/prisma";


type Params = {
    params: {
        status: string;
    };
};
export const GET = async (req:NextRequest, { params }:Params) => {
   

    try {
       const openCases = await prisma.case.findMany({
           where: {
                status: 'OPEN'
           },
       });

            if (!openCases) {
                throw new Error("No cases found");
            }

            return NextResponse.json(openCases);

    }
    catch (error) {
        console.error(error);
        return new NextResponse("Something went wrong", { status: 500 });
    }
};