import React from "react";
import { Page, Box } from "../components/comps";

export interface CreateNewApplicationPageProps {}

const CreateNewApplicationPage: React.FC<CreateNewApplicationPageProps> =
  () => {
    return (
      <Page title="Create New Application">
        <form className="flex flex-col space-y-5 w-72 mx-auto">
          <input className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />

          <label className="block text-left">
            {/* <span className="text-gray-700">Select</span> */}
            <select className="form-select block w-full mt-1 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </label>

          <input
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Q1 Prompt"
          />
        </form>

        {/* <div className="grid gap-8 grid-cols-2 mx-auto">
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
        </div> */}
      </Page>
    );
  };

export default CreateNewApplicationPage;
