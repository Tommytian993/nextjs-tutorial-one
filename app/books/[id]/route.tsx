import books from "../../api/db";

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

// DELETE 端点：根据 id 删除指定书籍
// 接收请求参数中的 id，查找并删除对应的书籍对象
// 返回删除后的书籍列表，便于前端同步数据
export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  // 从路由参数中获取要删除的书籍 id，并转为数字类型
  const id = +context.params.id;

  // 查找要删除的书籍在数组中的索引
  const index = books.findIndex((b) => b.id === id);

  // 如果找到对应索引，则从数组中删除该书籍
  books.splice(index, 1);

  // 返回删除后的书籍数组，便于前端刷新数据
  return Response.json(books);
}
