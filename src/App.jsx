import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Products from "./pages/Products";
import Products2 from "./pages/Products2";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  // 🎬 Splash (loading) effect holati
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b to-black via-gray-900 from-blue-gray-900 dark:to-blue-gray-900 dark:from-black text-white min-h-screen transition-colors duration-500">
      {/* 🌟 Splash Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-[9999]"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
                Welcome ✨
              </div>
              <p className="text-gray-400 text-lg animate-pulse">
                Loading your experience...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🧭 Asosiy kontent */}
      {!isLoading && (
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products2" element={<Products2 />} />
              <Route path="/contacts" element={<Contacts />} />
            </Route>
          </Routes>

          {/* 🌈 Sayt foni uchun dekorativ blur elementlar */}
          <div className="fixed top-0 left-0 w-72 h-72 bg-blue-500/20 blur-[100px] rounded-full -z-10"></div>
          <div className="fixed bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-[100px] rounded-full -z-10"></div>

          {/* 🦶 Footer */}
          <footer className="mt-16 border-t border-white/10 py-8 text-center text-gray-400">
            <div className="text-sm">
              © {new Date().getFullYear()} <span className="text-white">YourCompany</span>. All rights reserved.
            </div>
            <div className="mt-2 flex justify-center gap-4 text-white/70">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
              <a
                href="mailto:contact@yourcompany.com"
                className="hover:text-white transition"
              >
                Email
              </a>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
