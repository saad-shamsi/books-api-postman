import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-sky-300 h-screen text-center pt-7 ">
      <h1 className="text-3xl font-bold underline">Test Apis with:</h1>
      <ul className="">
        <Link href="/server">
          {" "}
          <li className="font-semibold text-2xl duration-300  p-10">Server</li>
        </Link>
        <Link href="/client">
          {" "}
          <li className="font-semibold text-2xl duration-300 p-10">Client</li>
        </Link>
        <Link href="/static">
          <li className="font-semibold text-2xl duration-300  p-10">Static</li>
        </Link>
      </ul>
    </div>
  );
}
