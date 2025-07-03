import { Navbar } from "@/components/general/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-8xl px-6 flex-grow pt-12">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        &copy; 2025 Chris Ray. All rights reserved.
      </footer>
    </div>
  );
}
