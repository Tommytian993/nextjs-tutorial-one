import books from "../db";

// GET 端点：获取所有书籍列表
// 返回完整的书籍数组，用于前端展示所有书籍
export async function GET() {
  return Response.json(books);
}

// POST 端点：添加新书籍到集合中
// 接收前端发送的书籍数据，将其添加到书籍数组中
// 返回新添加的书籍对象，确认添加成功
export async function POST(request: Request) {
  const book = await request.json();
  books.push(book);
  return Response.json(book);
}
