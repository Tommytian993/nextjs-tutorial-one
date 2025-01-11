import books from "../../db";

// PUT 端点：根据 id 更新指定书籍信息
export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  const id = +context.params.id;
  const book = await request.json();

  // 查找要更新的书籍索引
  const index = books.findIndex((b) => b.id === id);
  books[index] = book;

  // 返回更新后的书籍列表
  return Response.json(books);
}
export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  const id = +context.params.id;
  const index = books.findIndex((b) => b.id === id);
  books.splice(index, 1);
  return Response.json(books);
}
