// app/books/page.tsx
async function Page() {
  // 向本地 API 发送请求，获取所有书籍数据
  const response = await fetch("http://localhost:3000/api/books");
  const books = await response.json();

  // 以 JSON 格式美化输出书籍数据
  return (
    <main>
      <code>{JSON.stringify(books, null, 2)}</code>
    </main>
  );
}

export default Page;
