import React, { createContext } from "react";


export type apiData = {

  id: number;
  title: string;
  description: string
  price: number
  discountPercentage: number;
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}
export type apiContextType = {
  detail: apiData |null ;
  setDetail: (todo: apiData|null) => void;
};

export const Context= createContext<apiContextType |null>(null)
