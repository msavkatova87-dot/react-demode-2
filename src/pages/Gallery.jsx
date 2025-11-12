import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import { FooterWithSitemap } from "./Footer";
import { useTranslation } from "react-i18next";

export function GalleryWithTab() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const currentLang = i18n.language;

  const data = [
    {
      label: t("new"),
      value: "new",
      images: [
        { imageLink: "https://me.zegna.com/media/catalog/product/3/3/33523700-3.jpg" },
        { imageLink: "https://www.timeinternational.co.id/wp-content/uploads/ZEGNASECONDSKIN.jpg" },
        { imageLink: "https://me.zegna.com/media/catalog/product/cache/09dc901e642163d56cd42c28beed3b9e/2/3/23082135-2.jpg" },
        { imageLink: "https://me.zegna.com/media/catalog/product/cache/95037a0263a056a1afad256002945305/2/3/23082135-5.jpg" },
        { imageLink: "https://me.zegna.com/media/catalog/product/2/2/22365157-2.jpg" },
        { imageLink: "https://www.zegna.com/content/dam/zegna-commerce/technical-features/secondskin/25624592/principale-desk.webp" },
      ],
    },
    {
      label: t("trend"), 
      value: "trend",
      images: [
        { imageLink: "https://productimage.zegna.com/is/image/zegna/LHSOY-S4667Z-GME-F?wid=2250&hei=3000" },
        { imageLink: "https://assets.levelshoes.com/cdn-cgi/image/width=720,height=1008,quality=85,format=webp/media/catalog/product/l/h/lhaln-s5594z-oys_7.jpg?ts=20241224041526" },
        { imageLink: "https://productimage.zegna.com/is/image/zegna/LHCVO-S4667Z-SPA-F?wid=2250&hei=3000" },
        { imageLink: "https://me.zegna.com/media/catalog/product/cache/95037a0263a056a1afad256002945305/3/3/33523701-1.jpg" },
        { imageLink: "https://productimage.zegna.com/is/image/zegna/LHUTE-S5005Z-SGC-F?wid=2250&hei=3000" },
        { imageLink: "https://me.zegna.com/media/catalog/product/cache/95037a0263a056a1afad256002945305/2/2/22361659-1.jpg" },
      ],
    },
  ];

  return (
    <div className="py-16 bg-black dark:bg-blue-gray-900 text-white dark:text-white">
      {/* Title Section */}
      <div className="text-center mb-10">
        <Typography variant="h3" className="font-bold tracking-wide">
          <span className="text-white">{t("our")} </span>
          <span className="text-gray-400">{t("gallery")}</span>
        </Typography>
        <Typography className="text-gray-400 mt-2">
          {t("explore our monochrome-styled creative collections")}
        </Typography>
        <div className="mx-auto mt-4 h-[2px] w-24 bg-gradient-to-r from-gray-600 via-white to-gray-600 rounded-full"></div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto px-6">
        <Tabs value="new">
          <TabsHeader
            className="bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-xl shadow-lg mb-8"
            indicatorProps={{
              className: "bg-white/20 shadow-md rounded-lg",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                className="text-gray-300 font-semibold hover:text-white transition-all"
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>

          <TabsBody>
            {data.map(({ value, images }) => (
              <TabPanel key={value} value={value}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map(({ imageLink }, i) => (
                    <div
                      key={i}
                      className="relative group overflow-hidden rounded-lg shadow-lg border border-gray-800 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:border-white/40"
                    >
                      {/* ✨ Background gradient glow */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>

                      <img
                        src={imageLink}
                        alt="gallery"
                        className="w-full h-64 object-cover grayscale group-hover:grayscale-0 brightness-90 group-hover:brightness-110 transition-all duration-700 scale-100 group-hover:scale-110"
                      />

                      {/* Overlay text */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <Typography className="text-white text-sm uppercase tracking-wide bg-black/60 px-3 py-1 rounded-md">
                          {t("view image")}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>

      {/* Extra Section: Quote or CTA */}
      <div className="text-center mt-20 mb-10">
        <Typography variant="h5" className="text-gray-300 italic">
          {t("Design is intelligence made visible.")}
        </Typography>
        <Typography className="text-gray-500 mt-2">— Alina Wheeler</Typography>
      </div>

      {/* Footer */}
      <FooterWithSitemap />
    </div>
  );
}
