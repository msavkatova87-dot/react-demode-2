import { Carousel } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

const CarouselCustomNavigation = () => {


  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const currentLang = i18n.language;

  return (
    <div className="flex justify-center w-full mt-10 py-10 bg-black dark:bg-blue-gray-900 text-white dark:text-white">
      <Carousel
        autoplay
        loop
        autoplayDelay={3000}
        transition={{ duration: 1 }}
        className="rounded-xl w-3/5 overflow-hidden shadow-2xl border border-gray-800 relative group"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 gap-3">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-[6px] cursor-pointer rounded-full transition-all ${
                  activeIndex === i
                    ? "w-8 bg-white"
                    : "w-4 bg-gray-500 hover:bg-gray-300"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {/* --- SLIDE 1 --- */}
        <div className="relative group overflow-hidden">
          <img
            src="https://www.timeinternational.co.id/wp-content/uploads/cover-sneakers-zegna.jpg"
            alt="image 1"
            className="h-full w-full object-cover brightness-75 grayscale group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-100 group-hover:scale-105"
          />
          {/* Overlay gradient & text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-all duration-700 group-hover:from-black/40 group-hover:via-black/10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700">
            <h2 className="text-white text-3xl font-semibold bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm group-hover:bg-white/20 group-hover:text-white tracking-wide transition-all duration-500">
              {t("classic elegance")}
            </h2>
          </div>

          {/* 🔥 Hover Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-tr from-yellow-500/10 via-pink-500/10 to-transparent blur-2xl" />
        </div>

        {/* --- SLIDE 2 --- */}
        <div className="relative group overflow-hidden">
          <img
            src="https://theimpression.com/wp-content/uploads/2024/02/zegna-the-legend-of-zegna-secondskin-2024-ad-campaign-the-impression-header.jpg"
            alt="image 2"
            className="h-full w-full object-cover brightness-75 grayscale group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-all duration-700 group-hover:from-black/40 group-hover:via-black/10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700">
            <h2 className="text-white text-3xl font-semibold bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm group-hover:bg-white/20 group-hover:text-white tracking-wide transition-all duration-500">
              {t("monochrome beauty")}
            </h2>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-tr from-indigo-500/10 via-blue-500/10 to-transparent blur-2xl" />
        </div>

        {/* --- SLIDE 3 --- */}
        <div className="relative group overflow-hidden">
          <img
            src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F08%2Fzegna-triple-stitch-sneaker-fall-winter-2022-release-information-alessandro-sartori-tw.jpg?w=1080&cbr=1&q=90&fit=max"
            alt="image 3"
            className="h-full w-full object-cover brightness-75 grayscale group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-all duration-700 group-hover:from-black/40 group-hover:via-black/10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700">
            <h2 className="text-white text-3xl font-semibold bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm group-hover:bg-white/20 group-hover:text-white tracking-wide transition-all duration-500">
              {t("timeless style")}
            </h2>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-tr from-purple-500/10 via-pink-400/10 to-transparent blur-2xl" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselCustomNavigation;                      
