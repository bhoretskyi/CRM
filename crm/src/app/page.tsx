import StatusLabel, { Status } from "./components/active-label";

export default function Home() {
  return (
    <main>
      <h1 className="text-9xl">homepage</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>NotActive</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspend}>Suspend</StatusLabel>
    </main>
  );
}
