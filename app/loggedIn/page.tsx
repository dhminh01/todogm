import MobileNav from "@/components/nav/mobile-nav";
import Sidebar from "@/components/nav/side-bar";


export default function Home() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <MobileNav />
        <main className="flex flex-col flex-1 gap-4 p-4 lg:px-8">
          <h1>Todogm</h1>
        </main>
      </div>
    </div>
  );
}
