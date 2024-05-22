import { APP_ROUTER } from "./constant";
import { images } from "../assets";
export const NavbarItem = [
    {
        name: "Home",
        path: APP_ROUTER.INDEX,
        _id: "1",
    },
    {
        name: "Category",
        path: "/",
        _id: "2",
    },
    {
        name: "About Us",
        path: APP_ROUTER.ABOUT_US,
        _id: "3",
    },
    {
        name: "Contact",
        path: APP_ROUTER.CONTACT,
        _id: "4",
    },
];

export const ListImageBrand = [
    {
        path: images.image4,
    },
    {
        path: images.image5,
    },
    {
        path: images.image6,
    },
    {
        path: images.image7,
    },
    {
        path: images.image8,
    },
    {
        path: images.image9,
    },
    {
        path: images.image10,
    },
];

export const DataBlogs = [
    {
        name: "What is a Pomeranian? How to Identify Pomeranian Dogs",
        description:
            "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
        img: images.blogImg1,
        _id: 1,
    },
    {
        name: "Dog Diet You Need To Know",
        description:
            "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
        img: images.blogImg2,
        _id: 2,
    },
    {
        name: "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
        description:
            "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
        img: images.blogImg3,
        _id: 3,
    },
];
