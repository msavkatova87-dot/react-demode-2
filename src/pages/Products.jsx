import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import instance from "../axios";
import { GalleryWithTab } from "./Gallery";
import CarouselCustomNavigation from "./Corusel";
import { HeartIcon, EyeIcon } from "@heroicons/react/24/outline";

const Products = () => {
  async function handleGet() {
    const response = await instance.get("/product2");
    return response.data;
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["getProducts"],
    queryFn: handleGet,
  });

  if (isLoading)
    return <h1 className="text-white text-center mt-20">Loading...</h1>;
  if (error)
    return <h1 className="text-white text-center mt-20">{error.message}</h1>;

  return (
    <div className="bg-gray-950 min-h-screen py-10 bg-white dark:bg-blue-gray-900 text-white dark:text-white">
      {/* 🔳 Carousel */}
      <CarouselCustomNavigation />

      {/* 🛍️ Product Grid */}
      <div className="mx-5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 justify-items-center">
        {data.map((product) => (
          <Card
            key={product.id}
            className="group relative w-80 bg-gradient-to-b from-neutral-900 to-black text-white border border-gray-700 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:border-white/40"
          >
            {/* 🖼️ Image */}
            <CardHeader
              shadow={false}
              floated={false}
              className="h-80 relative overflow-hidden rounded-lg"
            >
              <img
                src={product.img}
                alt={product.title}
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-90 group-hover:brightness-110 scale-100 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
                <Typography className="font-semibold text-white text-lg drop-shadow-lg">
                  {product.title}
                </Typography>
                <span className="bg-yellow-600 text-black text-sm px-2 py-1 rounded-md mt-1 font-semibold">
                  ${product.price}
                </span>
              </div>

              {/* Extra icons */}
              <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <IconButton
                  size="sm"
                  color="red"
                  variant="text"
                  className="hover:bg-gray-800"
                >
                  <HeartIcon className="h-5 w-5" />
                </IconButton>
                <IconButton
                  size="sm"
                  color="blue-gray"
                  variant="text"
                  className="hover:bg-gray-800"
                >
                  <EyeIcon className="h-5 w-5" />
                </IconButton>
              </div>
            </CardHeader>

            {/* 📄 Body */}
            <CardBody className="px-5 pb-4">
              <Typography
                variant="small"
                color="gray"
                className="text-gray-400 text-sm line-clamp-3 group-hover:text-gray-200 transition-colors duration-500"
              >
                {product.desc}
              </Typography>
            </CardBody>

            {/* 🛒 Footer */}
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth
                className="bg-transparent border border-gray-600 text-gray-200 hover:bg-white hover:text-black transition-all duration-500 shadow-none uppercase tracking-wide"
              >
                Add to Cart
              </Button>
            </CardFooter>

            {/* 🌈 Hover Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 rounded-xl -z-10"></div>
          </Card>
        ))}
      </div>

      {/* 🖼️ Gallery Section */}
      <div className="mt-16">
        <GalleryWithTab />
      </div>
    </div>
  );
};

export default Products;
