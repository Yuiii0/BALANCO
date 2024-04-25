import CSChat from "@/components/CSChat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <CSChat />
      <Footer />
    </div>
  );
}

export default RootLayout;
