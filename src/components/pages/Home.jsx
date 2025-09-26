import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Products from "./Products";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex flex-col items-center min-h-screen p-4 md:p-8 bg-blue-700">
        <div className="text-center mb-8">
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            Responsif dengan Tailwind
          </h1>
          <p className="mt-2 text-white md:ml-4 md:mt-0">
            Ini adalah tampilan mobile, yang akan berubah di layar yang lebih
            besar.
          </p>
          {/* Ini adalah pages/Products.jsx */}
          <div className="relative bg-white rounded-4xl">
            <Products />
          </div>
          {/* ini adalah batas page/Products.jsx */}
        </div>
        {/* <div> */}
        <Footer />
        {/* </div> */}
      </div>
    </>
  );
}

export default Home;
