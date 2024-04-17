import { ReactQueryProvider } from "@/hooks/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      {children}
      <ReactQueryDevtools />
    </ReactQueryProvider>
  );
}

export default ProvidersLayout;
