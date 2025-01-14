import Counter from "@/components/Counter";
import CounterValue from "@/components/CounterValue";
import CurrentName from "@/components/CurrentName";
import UserForm from "@/components/Form/UserForm";
import Link from "next/link";

export default function Home() {
  console.log('render page')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <CounterValue/>
        <Counter/>
        <UserForm/>
        <CurrentName/>
       </div>
       <Link href={"/Test"}>Href to test page</Link>
    </main>
  );
}
