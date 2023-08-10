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
       const closedCases = await prisma.case.findMany({
           where: {
                status: 'CLOSED'
           },
       });

            if (!closedCases) {
                throw new Error("No cases found");
            }

            console.log(closedCases);

            return NextResponse.json(closedCases);

    }
    catch (error) {
        console.error(error);
        return new NextResponse("Something went wrong", { status: 500 });
    }
};