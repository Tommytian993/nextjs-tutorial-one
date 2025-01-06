"use client";

// Appeared both in the server and the browser
// Prerendered in the server, creating a static shell
// Hydrated in the browser, meaning the JS is executed in the browser
// Only the interactive parts are hydrated, meaning the non-interactive parts are still static on the server
export default function Hello() {
  console.log("Is this in the browser or server?");
  return <h1>Hello</h1>;
}
