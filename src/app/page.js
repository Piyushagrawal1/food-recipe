import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-center items-center flex text-3xl justify-center mt-52">Welcome to Piyush Hotel</h1>
      <Link href={'/recipe-list'}
        className="font-bold text-center items-center flex text-xl mt-8 justify-center"
      >
        <Button>
          Explore Recipes
        </Button>
      </Link>
    </div>
  );
}
