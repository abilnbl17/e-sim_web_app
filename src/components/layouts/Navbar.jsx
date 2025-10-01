import React, { useState } from "react";

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  // 1. Fungsi Toggle: Buka/Tutup dengan klik (untuk Mobile & Desktop)
  const toggleDropdown = () => setIsOpen(!isOpen);

  // 2. State untuk Mouse Enter/Leave (Hanya untuk Desktop UX)
  // Kita tetap pertahankan UX hover di desktop.
  const handleMouseEnter = () => window.innerWidth >= 768 && setIsOpen(true); // >= md breakpoint
  const handleMouseLeave = () => window.innerWidth >= 768 && setIsOpen(false); // >= md breakpoint

  return (
    // 3. Tambahkan `onBlur` pada parent untuk menutup dropdown saat kehilangan fokus
    // Gunakan `div` yang bisa mendapat fokus (`tabIndex="-1"`) agar bisa ditutup oleh keyboard
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // Tambahkan tabIndex agar div bisa mendapat fokus untuk menutup dropdown
      tabIndex="-1"
      onBlur={() => setTimeout(() => setIsOpen(false), 100)} // Delay kecil untuk handle klik item
    >
      <div>
        <button
          type="button"
          // 4. Hubungkan ke fungsi toggle untuk klik
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
          // 5. Accessibility: Tambahkan atribut ARIA
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {title}
        </button>
      </div>
      {isOpen && (
        // 6. Gunakan posisi absolut secara default. Tambahkan z-10 di sini.
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            {items.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
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

const Navbar = () => {
  // State untuk mengontrol Hamburger Menu (Mobile Only)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const regions = ["Asia", "Eropa", "Amerika"];
  const types = ["Harian", "Mingguan", "Bulanan"];

  // --- Sub-komponen (Best Practice: Pisahkan jika logika kompleks, atau biarkan inline jika sederhana) ---

  // 1. Menu Navigasi Desktop
  const DesktopMenu = () => (
    // Menggunakan `md:flex` untuk menerapkan Mobile-First (hidden by default)
    <div className="hidden md:flex space-x-6 items-center h-full">
      {/* Link Statis */}
      <a
        href="#"
        className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition"
      >
        Beranda
      </a>

      {/* Dropdowns */}
      <Dropdown title="Semua Region" items={regions} />
      <Dropdown title="Semua Jenis" items={types} />

      {/* Link Statis */}
      <a
        href="#"
        className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition"
      >
        Kontak
      </a>
    </div>
  );

  // 2. Menu Navigasi Mobile (Expanded)
  const MobileMenu = () => (
    <div
      // Menggunakan Conditional Class
      className={`${
        isMenuOpen ? "block" : "hidden"
      } md:hidden bg-gray-50 border-t`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {/* Link Beranda */}
        <a
          href="#"
          className="block text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md font-medium"
          onClick={() => setIsMenuOpen(false)} // UX: Tutup menu setelah klik
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
            onClick={() => setIsMenuOpen(false)} // UX: Tutup menu setelah klik
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
            onClick={() => setIsMenuOpen(false)} // UX: Tutup menu setelah klik
          >
            {item}
          </a>
        ))}

        {/* Link Kontak */}
        <a
          href="#"
          className="block text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md font-medium mt-2"
          onClick={() => setIsMenuOpen(false)} // UX: Tutup menu setelah klik
        >
          Kontak
        </a>
      </div>
    </div>
  );

  // --- Render Utama ---

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition"
            >
              E-SIM Univers
            </a>
          </div>

          {/* Render Menu Desktop */}
          <DesktopMenu />

          {/* Tombol Hamburger (Hanya Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              // A11Y: Tambahkan ARIA attributes
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation"
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

      {/* Render Menu Mobile (Expanded) */}
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
