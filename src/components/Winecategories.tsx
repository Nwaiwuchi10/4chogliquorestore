import { StaticImageData } from "next/image";

import vintage from "../../public/assets/hero/c1.png";
import red from "../../public/assets/hero/c2.png";
import white from "../../public/assets/hero/c3.png";
import rose from "../../public/assets/hero/c4.png";
import nonVintage from "../../public/assets/hero/c5.png";
import sparkling from "../../public/assets/hero/c6.png";

export interface WineCategory {
    id: number;
    title: string;
    image: StaticImageData;
}

export const wineCategories: WineCategory[] = [
    { id: 1, title: "Vintage Wines", image: vintage },
    { id: 2, title: "Red Wines", image: red },
    { id: 3, title: "White Wines", image: white },
    { id: 4, title: "Rose Wines", image: rose },
    { id: 5, title: "Non-Vintage Wines", image: nonVintage },
    { id: 6, title: "Sparkling Wines", image: sparkling },

    // duplicates to allow smooth sliding (total ~10)
    { id: 7, title: "Vintage Wines", image: vintage },
    { id: 8, title: "Red Wines", image: red },
    { id: 9, title: "White Wines", image: white },
    { id: 10, title: "Rose Wines", image: rose },
];
