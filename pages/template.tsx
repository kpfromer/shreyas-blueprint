import React from "react";
import { Box, Page } from "../components/comps";

export interface TemplatePageProps {}

const TemplatePage: React.FC<TemplatePageProps> = () => {
  return (
    <Page title="Select Application Template">
      <div className="grid gap-8 grid-cols-2 mx-auto">
        <Box title="Scholarship" body="Preview" className="bg-red-600" />
        <Box
          title="Academic Funding"
          body="Preview"
          className="bg-yellow-500"
        />
      </div>
    </Page>
  );
};

export default TemplatePage;
