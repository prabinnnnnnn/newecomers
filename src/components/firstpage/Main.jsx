import Footer from "./footer";
import NavBar from "../NavBar";
import Category from "./category";
import SpecialOffer from "./specialoffer";
import Poster from "./poster";

export default function Main() {
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
