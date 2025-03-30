import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import ProductsDesc from "@/components/sections/ProductsDesc";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <ProductsDesc />
      <Footer />
    </>
  );
}
