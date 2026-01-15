import Image from "next/image";

export default function Home() {
  return ( //the content of the page, must be incased in one element (like <main>)
    //not html, its jsx (js). can't use class, must use className
    <main>
      <h1 className="text-2xl font-bold">Hello World</h1>
      <p>Welcome to my Next.js app!</p>
    </main>
  );
}
