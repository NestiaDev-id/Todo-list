import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

// GET - Ambil daftar todos dari database
export async function GET() {
  const todos = await prisma.todo.findMany();
  return NextResponse.json(todos);
}

// POST - Tambah todo baru
export async function POST(req) {
  const { text } = await req.json();
  const newTodo = await prisma.todo.create({ data: { text } });
  return NextResponse.json(newTodo);
}

// PUT - Edit todo berdasarkan ID
export async function PUT(req) {
  const { id, text } = await req.json();
  await prisma.todo.update({
    where: { id },
    data: { text },
  });
  return NextResponse.json({ message: "Updated" });
}

// DELETE - Hapus todo berdasarkan ID
export async function DELETE(req) {
  const { id } = await req.json();
  await prisma.todo.delete({ where: { id } });
  return NextResponse.json({ message: "Deleted" });
}
