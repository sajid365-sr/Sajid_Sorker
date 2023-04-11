import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = [ "About", "Experience", "Works", "Contact" ]

// project data
export const projects : ProjectTypes[] = [
    {
        title : "Portfolio website",
        description : "This is my personal website. Designed and developed with a conscious effort.",
        tech : [ "Next js 13", "Tailwind CSS", "Express js", "MongoDB" ],
        code : '',
        live : 'https://sajidsorker.com',
        thumbnail : "portfolio-v2.png",
        featured : true
    },

    {
        title : "Jahid Enterprise",
        description : "A business portfolio website. I use this system for front end “REACT, Tailwind CSS, Axios, react-query” and for Backend “Node js, Express js, MongoDB",
        tech : [ "React", "tailwind CSS", "MongoDB", "Node js", "Firebase" ],
        live : 'https://jahidenterprise.com/',
        thumbnail : "jahid_enterprise.png",
        featured : true
    },

    {
        title : "Atonu Enterprise",
        description : "A business portfolio website. I use this system for front end “REACT, Tailwind CSS, Axios, react-query” and for Backend “Node js, Express js, MongoDB",
        tech : [ "React", "tailwind CSS", "MongoDB", "Node js", "Firebase" ],
        live : 'https://atonuenterprise.com/',
        thumbnail: "atonu_enterprise.png",
        
    },

    {
        title : "Next Store",
        description : "I have created an e-commerce store using Next js, React, Sanity io and live payment integration with Stripe",
        tech : [ "Next js", "React", "Sanity io", "Stripe" ],
        code : '',
        live : 'https://next-store-blue.vercel.app/',
        thumbnail : "next_store.png"
    }
]