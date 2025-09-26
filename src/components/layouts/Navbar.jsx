// src/components/Navbar.jsx

import React, { useState } from "react";

// =================================================================
// 1. Komponen Dropdown (Hanya digunakan di dalam Navbar)
// =================================================================
const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)} // Buka saat mouse masuk
      onMouseLeave={() => setIsOpen(false)}
    >
      {" "}
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
        >
          {title}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* Dropdown panel hanya muncul jika isOpen true */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            {items.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`} // Contoh link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// =================================================================
// 2. Komponen Navbar Utama (Main Component)
// =================================================================
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const regions = ["Asia Tenggara", "Eropa Barat", "Amerika Utara"];
  const types = ["Makanan Olahan", "Peralatan Dapur", "Kecantikan"];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Nama Aplikasi */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition"
            >
              E-SIM Univers
            </a>
          </div>

          {/* Menu Desktop & Dropdown (Hanya tampil di md ke atas) */}
          <div className="hidden md:flex space-x-6 items-center h-full">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition"
            >
              Beranda
            </a>

            {/* Kategori: SEMUA REGION */}
            <Dropdown title="Semua Region" items={regions} />

            {/* Kategori: SEMUA JENIS */}
            <Dropdown title="Semua Jenis" items={types} />

            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition"
            >
              Kontak
            </a>
          </div>

          {/* Tombol Hamburger (Hanya Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile yang muncul/hilang */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-gray-50 border-t`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="block text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md font-medium"
          >
            Beranda
          </a>

          {/* Kategori Mobile: Semua Region */}
          <p className="text-sm font-semibold text-gray-500 px-3 pt-2">
            Semua Region:
          </p>
          {regions.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="block text-gray-600 hover:bg-gray-100 px-4 py-1 rounded-md text-sm"
            >
              {item}
            </a>
          ))}

          {/* Kategori Mobile: Semua Jenis */}
          <p className="text-sm font-semibold text-gray-500 px-3 pt-2">
            Semua Jenis:
          </p>
          {types.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="block text-gray-600 hover:bg-gray-100 px-4 py-1 rounded-md text-sm"
            >
              {item}
            </a>
          ))}

          <a
            href="#"
            className="block text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md font-medium mt-2"
          >
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
