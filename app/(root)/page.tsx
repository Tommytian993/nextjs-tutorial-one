import Image from "next/image";
import Hello from "../components/hello";

export default function Home() {
  // Appeared in the server, meaning could access server-side resources directly(e.g. database or file system
  // Thus reducing the amount of JS sent to the client
  console.log("Is this in the browser or server?");
  return (
    <div>
      <h1>Test Next.js</h1>
      <Hello />
    </div>
  );
}
