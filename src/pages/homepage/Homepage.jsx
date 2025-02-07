import NavBar from "@/components/layouts/NavBar";
import Poster from "./Poster";
import Category from "./Category";
import SpecialOffer from "./SpecialOffer";
import Footer from "@/components/layouts/Footer";

export default function HomePage() {
  return (
    <main className="h-screen">
      <NavBar />
      <Poster />
      <Category />
      <SpecialOffer />
      <Footer />
    </main>
  );
}
