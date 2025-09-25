import Footer from "../layouts/Footer";
import Products from "./Products";

function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen text-center p-4 md:p-8">
        <h1 className="text-white text-2xl md:text-4xl font-bold">
          Responsif dengan Tailwind
        </h1>
        <p className="mt-2 text-white md:ml-4 md:mt-0">
          Ini adalah tampilan mobile, yang akan berubah di layar yang lebih
          besar.
        </p>
      </div>
      {/* Ini adalah pages/products.jsx */}
      <div className="mt-4 md:mt-0 md:ml-4">
        <Products />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
