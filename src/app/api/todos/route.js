import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

// GET - Ambil daftar todo dari database
export async function GET() {
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(todos);
}

// POST - Tambah todo baru
export async function POST(req) {
  const { title } = await req.json();
  const newTodo = await prisma.todo.create({
    data: { title },
  });
  return NextResponse.json(newTodo);
}

// PUT - Edit atau Toggle Selesai
export async function PUT(req) {
  const { id, title, isCompleted } = await req.json();
  const updateData = {};
  if (title !== undefined) updateData.title = title;
  if (isCompleted !== undefined) updateData.isCompleted = isCompleted;

  await prisma.todo.update({
    where: { id },
    data: updateData,
  });
  return NextResponse.json({ message: "Updated" });
}

// DELETE - Hapus todo berdasarkan ID
export async function DELETE(req) {
  const { id } = await req.json();
  await prisma.todo.delete({ where: { id } });
  return NextResponse.json({ message: "Deleted" });
}
