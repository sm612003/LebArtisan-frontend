import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from '../assets/unsplash_L5NhPcGhsSM.png'
import star from '../assets/Star.svg';
import shield from '../assets/Shield.svg';
import send from '../assets/Send.svg'
import imaage1 from '../assets/images/services_img_1.svg'
import imaage2 from '../assets/images/services_img_2.svg'
import imaage3 from '../assets/images/services_img_3.svg'
import imaage4 from '../assets/images/services_img_4.svg'



export const nav = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/features",
    text: "Features",
  },
  {
    path: "/shop",
    text: "Shop",
  },
  {
    path: "/page",
    text: "Pages",
  },
  {
    path: "/blog",
    text: "Blog",
  },
  {
    path: "/contact",
    text: "Contact",
  },
];

export const aweicon = [
  {
    icon: <FontAwesomeIcon className="mr-4" icon="heart" />,
  },
  {
    icon: <FontAwesomeIcon className="mr-4" icon="shopping-cart" />,
  },
  {
    icon: <FontAwesomeIcon className="mr-4" icon={["fab", "facebook"]} />,
  },
  {
    icon: <FontAwesomeIcon className="mr-4" icon={["fab", "instagram"]} />,
  },
  {
    icon: <FontAwesomeIcon className="mr-4" icon={["fab", "youtube"]} />,
  },
  {
    icon: <FontAwesomeIcon className="mr-4" icon={["fab", "twitter"]} />,
  },
];
export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];
export const sliderdata = [
  {
    img: "../img/slideshow/unsplash_L5NhPcGhsSM.png",
  },
  {
    img: "../img/slideshow/slide2.jpg",
  },
  {
    img: "../img/slideshow/slide3.jpg",
  },
];
 export const testimonials = [
  {
    name: "Welcome to LebArtisan",
    paragraph: " your gateway to discovering and supporting the rich tapestry of Lebanese craftsmanship. At LebArtisan Connect, we are passionate about celebrating the creativity, skill, and cultural heritage of local artisans across Lebanon."
},
  {
      name: "Our Mission",
      paragraph: "provide a vibrant marketplace that connects discerning buyers with talented artisans, fostering a community of appreciation and support for authentic handmade goods."
  },
  {
      name: "Our Values",
      paragraph: "We empower artisans by providing them with a platform to showcase their work, connect with buyers, and grow their businesses."
    },
 
]
 export const works = [
  {
      image: `${img}`
  },
  {
      image: `${img}`
  },
  {
      image: `${img}`
  },
  {
      image: `${img}`
  },
  {
      image: `${img}`
  },
  {
      image: `${img}`
  },
];

 export const services = [
    {
        image: `${imaage1}`,
        title: "cost",
        paragraph: "$50 per participant"
    },
    {
        image: `${imaage2}`,
        title: "Date",
        paragraph: "Saturday, March 15 2024 "
    },
    {
        image: `${imaage1}`,
        title: "Capacity",
        paragraph: " Limited to 20 participants"
    },
  
];
 export const work_process = [
  {
      title: " A bare lampshade",
      paragraph: "Nunc sodales lacus nec felis suscipit dictum"
  },
  {
      title: " A yarn needle, ",
      paragraph: "Nunc sodales lacus nec felis suscipit dictum"
  },
  {
      title: " A colored electrical cable,",
      paragraph: "Nunc sodales lacus nec felis suscipit dictum"
  },
  {
      title: " A lamp socket,",
      paragraph: "Nunc sodales lacus nec felis suscipit dictum"
  },

];
export const category = [
  {
    img: "../img/category/category1.png",
    category: "Bedroom",
  },
  {
    img: "../img/category/category7.png",
    category: "OFfice",
  },
  {
    img: "../img/category/category6.png",
    category: "Lighting",
  },
  {
    img: "../img/category/category5.png",
    category: "bathroom",
  },
  {
    img: "../img/category/category4.png",
    category: "kitchen",
  },
  {
    img: "../img/category/category3.png",
    category: "Interior",
  },
  {
    img: "../img/category/category2.png",
    category: "Livingroom",
  },
];

export const products = [
  {
    id: 1,
    img: "../img/product/product1.jpg",
    name: "BEDROOM",
    price: "55.00",
  },
  {
    id: 2,
    img: "../img/product/product2.jpg",
    name: "OFFICE",
    price: "55.00",
  },
  {
    id: 3,
    img: "../img/product/product6.jpg",
    name: "LIGHTING",
    price: "55.00",
  },
  {
    id: 4,
    img: "../img/product/product5.jpg",
    name: "BATHROOM",
    price: "55.00",
  },
  {
    id: 5,
    img: "../img/product/product4.jpg",
    name: "KITCHEN",
    price: "55.00",
  },
  {
    id: 6,
    img: "../img/product/product3.jpg",
    name: "INTERIOR",
    price: "55.00",
  },
  {
    id: 7,
    img: "../img/product/product7.jpg",
    name: "LIVING ROOM",
    price: "55.00",
  },
  {
    id: 8,
    img: "../img/product/product8.jpg",
    name: "DECOR",
    price: "55.00",
  },
  {
    id: 9,
    img: "../img/product/product9.jpg",
    name: "LIVING ROOM",
    price: "55.00",
  },
  {
    id: 10,
    img: "../img/product/product10.jpg",
    name: "SOFA",
    price: "55.00",
  },
  {
    id: 11,
    img: "../img/product/product11.jpg",
    name: "LIVING ROOM",
    price: "55.00",
  },
  {
    id: 13,
    img: "../img/product/product12.jpg",
    name: "SOFA",
    price: "55.00",
  },
];

export const brand = [
  {
    brand: "../img/brand/br1.png",
  },
  {
    brand: "../img/brand/br2.png",
  },
  {
    brand: "../img/brand/br3.png",
  },
  {
    brand: "../img/brand/br4.png",
  },
  {
    brand: "../img/brand/br5.png",
  },
  {
    brand: "../img/brand/br6.png",
  },
];

export const footer = [
  {
    id: 1,
    header: "Shop",
    title: [
      {
        subtitle: "new arrivals",
      },
      {
        subtitle: "sales & special offers",
      },
      {
        subtitle: "living room",
      },
      {
        subtitle: "furniture decor",
      },
      {
        subtitle: "lamp & lighting",
      },
      {
        subtitle: "sofa & chair",
      },
      {
        subtitle: "home & kitchen",
      },
    ],
  },
  {
    id: 2,
    header: "Information",
    title: [
      {
        subtitle: "ABOUT US",
      },
      {
        subtitle: "CUSTOMER SERVICES",
      },
      {
        subtitle: "BLOG",
      },
      {
        subtitle: "PAGE 404",
      },
      {
        subtitle: "SIZING GUIDE",
      },
      {
        subtitle: "FAQS",
      },
      {
        subtitle: "CONTACT US",
      },
    ],
  },
  {
    id: 1,
    header: "ORder",
    title: [
      {
        subtitle: "MY ACCOUNT",
      },
      {
        subtitle: "VIEW BAG",
      },
      {
        subtitle: "PRIVACY POLICY",
      },
      {
        subtitle: "COOKIE POLICY",
      },
    ],
  },
];
