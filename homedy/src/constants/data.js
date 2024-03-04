import images from "./images";
import img1 from '../assets/pexels-valeriia-miller-3547625.jpg'
import img2 from '../assets/pexels-yan-krukau-6611420.jpg'
import img3 from  '../assets/pexels-vlada-karpovich-6755753.jpg'
import img4 from  '../assets/pexels-freestocksorg-3940334.jpg'
import img5 from  '../assets/pexels-gustavo-fring-4241342.jpg'
import img6 from  '../assets/pexels-skylar-kang-6430729.jpg'




const services = [
    {
        image: `${images.services_img_1}`,
        title: "Web Design",
        paragraph: "Vivamus a accumsan mauris. Nunc sodales lacus nec felis suscipit dictum. Mauris auctor enim in justo euismod imperdiet."
    },
    {
        image: `${images.services_img_2}`,
        title: "Branding",
        paragraph: "Vivamus a accumsan mauris. Nunc sodales lacus nec felis suscipit dictum. Mauris auctor enim in justo euismod imperdiet."
    },
    {
        image: `${images.services_img_3}`,
        title: "UX Design",
        paragraph: "Vivamus a accumsan mauris. Nunc sodales lacus nec felis suscipit dictum. Mauris auctor enim in justo euismod imperdiet."
    },
    {
        image: `${images.services_img_4}`,
        title: "Logo Create",
        paragraph: "Vivamus a accumsan mauris. Nunc sodales lacus nec felis suscipit dictum. Mauris auctor enim in justo euismod imperdiet."
    },
    {
        image: `${images.services_img_5}`,
        title: "Illustration",
        paragraph: "Vivamus a accumsan mauris. Nunc sodales lacus nec felis suscipit dictum. Mauris auctor enim in justo euismod imperdiet."
    },
    {
        image: `${images.services_img_6}`,
        title: "Graphics",
        paragraph: "Vivamus a accumsan mauris. Nunc sodales lacus nec felis suscipit dictum. Mauris auctor enim in justo euismod imperdiet."
    },
];

const works = [
    {
        image: `${img1}`
    },
    {
        image: `${img2}`
    },
    {
        image: `${img3}`
    },
    {
        image: `${img4}`
    },
    {
        image: `${img5}`
    },
    {
        image: `${img6}`
    },
];

const work_process = [
    {
        title: "Sketch",
        paragraph: "Nunc sodales lacus nec felis suscipit dictum"
    },
    {
        title: "Design",
        paragraph: "Nunc sodales lacus nec felis suscipit dictum"
    },
    {
        title: "Develop",
        paragraph: "Nunc sodales lacus nec felis suscipit dictum"
    },
    {
        title: "End-Product",
        paragraph: "Nunc sodales lacus nec felis suscipit dictum"
    },
];

const about_stats = [
    {
        image: `${images.stat_img_1}`,
        value: "1575",
        title: "Clients"
    },
    {
        image: `${images.stat_img_2}`,
        value: "2416",
        title: "Projects"
    },
    {
        image: `${images.stat_img_3}`,
        value: "4287",
        title: "Working Hours"
    },
    {
        image: `${images.stat_img_4}`,
        value: "287",
        title: "Awards"
    },
];

const testimonials = [
    {
        name: "Lelia Merritt",
        post: "Graphic Designer",
        paragraph: "Aliquam et odio arcu. Vestibulum pharetra tincidunt odio, sed pulvinar magna tempus quis. Mauris risus odio, semper sit amet tortor a, tristique consectetur urna."
    },
    {
        name: "John Huston",
        post: "Web Developer",
        paragraph: "Aliquam et odio arcu. Vestibulum pharetra tincidunt odio, sed pulvinar magna tempus quis. Mauris risus odio, semper sit amet tortor a, tristique consectetur urna."
    },
    {
        name: "Jeniffer Green",
        post: "Marketing Manager",
        paragraph: "Aliquam et odio arcu. Vestibulum pharetra tincidunt odio, sed pulvinar magna tempus quis. Mauris risus odio, semper sit amet tortor a, tristique consectetur urna."
    },
]

const logos = [
    {
        image: `${images.logo_img_1}`
    },
    {
        image: `${images.logo_img_2}`
    },
    {
        image: `${images.logo_img_3}`
    },
    {
        image: `${images.logo_img_4}`
    },
    {
        image: `${images.test_img_5}`
    },
    {
        image: `${images.test_img_6}`
    },
];

export {services, works, work_process, about_stats, testimonials, logos};
