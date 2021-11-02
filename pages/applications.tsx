import React from "react";
import { Page, Box } from "../components/comps";

export interface ApplicationsPageProps {}

const ApplicationsPage: React.FC<ApplicationsPageProps> = () => {
  return (
    <Page title="Open Applications">
      <div className="grid gap-8 grid-cols-2 mx-auto">
        <Box
          title="Scholarship"
          body="Scholarship Application"
          className="bg-red-600"
        />
        <Box
          title="Academic Funding"
          body="Academic Support Fund Application"
          className="bg-yellow-500"
        />
      </div>
    </Page>
  );
};

export default ApplicationsPage;
