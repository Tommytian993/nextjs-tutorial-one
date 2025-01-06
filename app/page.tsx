import Image from "next/image";

export default function Home() {
  // Appeared in the server, meaning could access server-side resources directly
  console.log("Is this in the browser or server?");
  return (
    <div>
      <h1>Test Next.js</h1>
    </div>
  );
}
