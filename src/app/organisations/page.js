import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Organisations from "@/sections/Organisations";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <NavBar />
      <Organisations />
      <Footer />
    </main>
  );
}
