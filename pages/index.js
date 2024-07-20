import { Inter } from "next/font/google";

import Hello from "@/components/Hello";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hello fName="George" lName="Yo" />
    </main>
  );
}
