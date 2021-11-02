import clsx from "clsx";

export interface TemplatePageProps {}

export const Header: React.FC = ({ children }) => (
  <div className="flex py-10">
    <div className="mx-auto">
      <h1 className="font-bold font-header text-5xl">{children}</h1>
    </div>
  </div>
);

export const Center: React.FC = ({ children }) => (
  <div className="flex h-full">
    <div className="m-auto">{children}</div>
  </div>
);

export const Box: React.FC<{
  title: string;
  body: string;
  className?: string;
}> = ({ title, body, className }) => (
  <div className="flex flex-col rounded-md overflow-hidden h-60 w-60">
    <div className={clsx(className, "p-3 text-white font-bold text-center")}>
      {title}
    </div>
    <div className="p-3 bg-gray-200 flex-grow text-center">
      <Center>{body}</Center>
    </div>
  </div>
);

export const Page: React.FC<{
  title: string;
}> = ({ title, children }) => (
  <div>
    <Header>{title}</Header>

    <div className="flex pt-3">{children}</div>
  </div>
);
