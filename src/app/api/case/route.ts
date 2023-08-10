import { NextResponse, NextRequest } from "next/server";
import { supabase } from "@/lib/supabaseServer";
import { prisma } from "@/lib/prisma";


export const POST = async (req: NextRequest, res: NextResponse) => {
    const body = await req.json();
    console.log(body);

    const { customer, studentNumber, campus, email, title, description, reason } = body;

    try {
        const user = await supabase.auth.getUser();
        console.log(user);
        if (!user || !user.data.user?.id) {
            throw new Error("You must be logged in to submit a case");
        }
       const caseLogged = await  prisma.case.create({
            data: {
                customer,
                studentNumber,
                campus,
                email,
                title,
                description,
                reason,
                userId: user.data.user.id,
            },
            
        });

        return new NextResponse("Ticket logged successfully", {status: 201});
        
    } catch (error) {
        console.error(error);
        return new NextResponse("Something went wrong", { status: 500 });
    }
};