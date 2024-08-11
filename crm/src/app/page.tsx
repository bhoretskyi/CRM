import { headers } from "next/headers";
import StatusLabel, { Status } from "./components/active-label";

export default function Home() {
  console.log(headers());
  return (
    <main>
      <h1 className="text-2xl">homepage{new Date().toTimeString()}</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>NotActive</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspend}>Suspend</StatusLabel>
    </main>
  );
}
