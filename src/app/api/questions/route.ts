import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const birth_history_question =
      await prisma.birth_history_question.findMany();
    if (birth_history_question.length === 0)
      return NextResponse.json(
        { status: "error", message: "No Data Found" },
        { status: 200 }
      );

    const health_status_question =
      await prisma.health_status_question.findMany();

    if (health_status_question.length === 0)
      return NextResponse.json(
        { status: "error", message: "No Data Found" },
        { status: 200 }
      );

    const expert_examination_question =
      await prisma.expert_examination_question.findMany();

    if (expert_examination_question.length === 0)
      return NextResponse.json(
        { status: "error", message: "No Data Found" },
        { status: 200 }
      );
    return NextResponse.json(
      {
        status: "success",
        questions: {
          birth_history_question,
          health_status_question,
          expert_examination_question,
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { status: "error", message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
