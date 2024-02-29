// import facebook from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import link from '../assets/linkedin.png'
// import twitter from '../assets/twitter.png'
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={link} />
      </a>
   
   
      <a
className="hover:opacity-50 transition duration-500 text-red-500"
href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={insta} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
