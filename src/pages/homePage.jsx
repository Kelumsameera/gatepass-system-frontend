import { Route, Routes } from "react-router-dom";
import Header from "../components/Heder";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full h-screen bg-[--color-primary] text-[--color-secondary]">
      {/* Header (fixed top) */}
      <header className="sticky top-0 z-20 shadow-md">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-6 py-8">
        <Routes>
          <Route
            path="/"
            element={
              <section className="text-center space-y-6">
                <h1 className="text-4xl font-bold text-[--color-accent]">
                  🏠 Home Page
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                  Welcome to the{" "}
                  <span className="text-[--color-gold] font-semibold">
                    Gate Pass Management System
                  </span>
                  . This system helps automate and manage gate entries for
                  employees, visitors, and vehicles.
                </p>
                <button className="bg-[--color-accent] text-white px-6 py-3 rounded-xl hover:bg-[--color-gold] hover:text-[--color-secondary] transition-all">
                  Get Started
                </button>
              </section>
            }
          />
          <Route
            path="/products"
            element={
              <section className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-[--color-accent]">
                  🛍️ Products
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Here you can view and manage your listed products.
                </p>
              </section>
            }
          />
          <Route
            path="/about"
            element={
              <section className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-[--color-accent]">
                  ℹ️ About Us
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Our system ensures secure and efficient access management
                  using QR or RFID technology.
                </p>
              </section>
            }
          />
          <Route
            path="/contact"
            element={
              <section className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-[--color-accent]">
                  📞 Contact
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Get in touch with us for support or system integration.
                </p>
                <a
                  href="mailto:support@gatepass.com"
                  className="text-[--color-gold] font-medium hover:underline"
                >
                  support@gatepass.com
                </a>
              </section>
            }
          />
          <Route
            path="/*"
            element={
              <section className="text-center mt-20">
                <h1 className="text-5xl font-bold text-red-500">404</h1>
                <p className="text-lg text-gray-500 mt-2">Page not found</p>
              </section>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
