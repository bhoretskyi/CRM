import { headers } from "next/headers";
// import StatusLabel, { Status } from "./components/active-label";
import AddCompanyButton from "./components/add-company-button";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl">homepage{new Date().toTimeString()}</h1>
      <AddCompanyButton />
    </main>
  );
}
