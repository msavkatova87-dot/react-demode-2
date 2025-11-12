import { Typography, Input, Button } from "@material-tailwind/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function FooterWithSitemap() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const SITEMAP = [
    {
      title: t("Company"),
      links: [t("About Us"), t("Careers"), t("Our Team"), t("Projects")],
    },
    {
      title: t("Help Center"),
      links: [t("Discord"), t("Twitter"), t("GitHub"), t("Contact Us")],
    },
    {
      title: t("Resources"),
      links: [t("Blog"), t("Newsletter"), t("Free Products"), t("Affiliate Program")],
    },
    {
      title: t("Products"),
      links: [t("Templates"), t("UI Kits"), t("Icons"), t("Mockups")],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-gray-800 bg-black dark:bg-blue-gray-900 text-white dark:text-white">
      {/* 🔳 Top Section */}
      <div className="mx-auto w-full max-w-7xl px-8 py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          {/* 🧭 Sitemap */}
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key}>
              <Typography
                variant="small"
                className="mb-4 text-gray-400 font-semibold uppercase tracking-wider"
              >
                {title}
              </Typography>
              <ul className="space-y-2">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 💌 Newsletter */}
          <div className="flex flex-col justify-between">
            <div>
              <Typography
                variant="small"
                className="mb-4 text-gray-400 font-semibold uppercase tracking-wider"
              >
                {t("Newsletter")}
              </Typography>
              <Typography className="text-gray-400 text-sm mb-4">
                {t("Subscribe to get the latest updates, offers, and design resources.")}
              </Typography>
              <div className="flex items-center gap-2">
                <Input
                  type="email"
                  label={t("Your email")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="!text-white"
                  containerProps={{
                    className: "min-w-[180px] flex-1",
                  }}
                  color="white"
                />
                <Button
                  size="sm"
                  className="bg-white text-black font-semibold hover:bg-gray-200 transition-all"
                >
                  {t("Subscribe")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Divider Line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

      {/* 🔻 Bottom Section */}
      <div className="mx-auto w-full max-w-7xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <Typography variant="small" className="text-gray-400 text-sm text-center">
          &copy; {currentYear}{" "}
          <span className="text-white font-medium">{t("YourBrand")}</span>.{" "}
          {t("All Rights Reserved.")} 
        </Typography>

        {/* 🌐 Social Icons */}
        <div className="flex gap-5">
          {["facebook", "instagram", "twitter", "github"].map((icon, i) => (
            <a
              key={i}
              href="#"
              className="text-gray-400 hover:text-white transition-all hover:scale-110"
            >
              <i className={`fab fa-${icon} text-lg`}></i>
            </a>
          ))}
        </div>

        {/* ⬆️ Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-gray-400 hover:text-white transition-all text-sm flex items-center gap-1 group"
        >
          <span className="group-hover:-translate-y-1 transition-transform">↑</span>{" "}
          {t("Back to Top")}
        </button>
      </div>
    </footer>
  );
}
