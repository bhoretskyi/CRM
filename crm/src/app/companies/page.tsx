import React from "react";
import Header from "../components/header";
import Toolbar from "../components/footbar";
import SearchInput from "../components/search-input";
import AddCompanyButton from "../components/add-company-button";
import CompanyTable from "../components/company-table";
import CompanyRow from "../components/company-row";
import { Status } from "@/app/components/status-label";
export interface PageProps {}
export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <main>
        <Toolbar action={<AddCompanyButton />}>
          <SearchInput />
        </Toolbar>
        <CompanyTable>
          <CompanyRow
            id={1}
            company="Apple"
            category="Products"
            status={Status.Pending}
            promotion={true}
            country="USA"
            joinedDate={"02.12.1991"}
          />
        </CompanyTable>
      </main>
    </>
  );
}
