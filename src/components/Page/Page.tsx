import { PropsWithChildren } from "react";

interface PageProps {
  fullWidth?: boolean;
}

function Page({ children, fullWidth }: PropsWithChildren<PageProps>) {
  return (
    <main
      className="px-6 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-xl data-[full-width=true]:max-w-none flex flex-col grow w-full items-stretch"
      data-full-width={fullWidth}
    >
      {children}
    </main>
  );
}

export default Page;
