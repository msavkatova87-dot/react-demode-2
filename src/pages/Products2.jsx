import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import instance from "../axios";
import { GalleryWithTab } from "./Gallery";
import CarouselCustomNavigation from "./Corusel";
import { FooterWithSocialLinks } from "./Footer2";
import { useTranslation } from "react-i18next"; 

const Products2 = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation(); 
  async function handleGet() {
    const response = await instance.get("/product");
    return response.data;
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["getProducts"],
    queryFn: handleGet,
  });

  if (isLoading)
    return <h1 className="text-center mt-20 text-white">Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="min-h-screen bg-black dark:bg-blue-gray-900 text-white dark:text-white">
      {/* Carousel Section */}
      <CarouselCustomNavigation />

      {/* Product Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16 px-6">
        {data.map((product) => (
          <Card
            key={product.id}
            className="relative w-full bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
          >
            <div className="relative overflow-hidden rounded-t-xl group">
              <img
                src={product.img}
                alt={product.title}
                className="h-80 w-full object-cover grayscale group-hover:grayscale-0 brightness-90 group-hover:brightness-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-30 transition-all duration-700"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <Typography variant="h6" className="font-semibold tracking-wide">
                  {product.title}
                </Typography>
              </div>
            </div>

            <CardBody className="p-5">
              <div className="flex items-center justify-between mb-2">
                <Typography className="text-lg font-semibold text-white">
                  {product.title}
                </Typography>
                <Typography className="text-gray-300 text-md font-medium">
                  ${product.price}
                </Typography>
              </div>
              <Typography className="text-gray-400 text-sm leading-relaxed">
                {product.desc}
              </Typography>
            </CardBody>

            <CardFooter className="p-5 pt-0 flex justify-between items-center">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-white/20"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center py-16 bg-gradient-to-t from-gray-900 via-black to-gray-900 border-t border-gray-800">
        <Typography variant="h3" className="font-bold text-white mb-4">
          {t("Elevate Your Style in Monochrome")}
        </Typography>
        <Typography className="text-gray-400 mb-8">
          {t("Discover our latest black & white collection — minimal, modern, and timeless.")}
        </Typography>
        <Button
          ripple={false}
          className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-300 transition-all duration-300"
        >
          {t("Explore More")}
        </Button>
      </div>

      {/* Footer */}
      <FooterWithSocialLinks />
    </div>
  );
};

export default Products2;
