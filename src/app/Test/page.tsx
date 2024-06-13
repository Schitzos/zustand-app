import CounterValue from "@/components/CounterValue";
import CurrentName from "@/components/CurrentName";
import Link from "next/link";

export default function Test() {
  console.log('render page Test')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <CounterValue/>
        <CurrentName/>
       </div>
       <Link href={"/"}>Href to main page</Link>
    </main>
  );
}
