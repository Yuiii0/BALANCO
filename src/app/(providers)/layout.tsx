import { ModalProvider } from "@/contexts/modal.context";
import { ReactQueryProvider } from "@/hooks/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <ModalProvider>{children}</ModalProvider>
      <ReactQueryDevtools />
    </ReactQueryProvider>
  );
}

export default ProvidersLayout;
