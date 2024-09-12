import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useContext } from 'react';
import { themeContext } from '../../context/ContextApi'; // Adjust the import path as needed

const Footer = () => {
    const { darkMode } = useContext(themeContext); // Assuming you have darkMode in your themeContext

    // Replace the following with your actual contact information and social media links
    const contactInfo = {
        address: "123 Artisan Street, Dhaka, Bangladesh",
        email: "support@handicraftbusiness.com",
        phone: "+880 (123) 456-7890",
    };

    // Replace these links with actual URLs
    const importantLinks = [
        { text: "Home", url: "/" },
        { text: "About Us", url: "/about" },
        { text: "Our Artisans", url: "/artisans" },
        { text: "Shop", url: "/shop" },
        { text: "Contact Us", url: "/contact" },
    ];

    // Replace these social media links with your own
    const socialMediaLinks = [
        { icon: <FaFacebook />, url: "https://www.facebook.com/yourhandicraftbusiness" },
        { icon: <FaTwitter />, url: "https://twitter.com/yourhandicraftbusiness" },
        { icon: <FaInstagram />, url: "https://www.instagram.com/yourhandicraftbusiness" },
    ];

    return (
        <footer className={`py-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-semibold">Contact Us</h3>
                    <p className="mt-2">{contactInfo.address}</p>
                    <p>{contactInfo.email}</p>
                    <p>{contactInfo.phone}</p>
                </div>
                <div className="flex flex-wrap space-x-4 mb-4 md:mb-0">
                    {importantLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            className={`hover:underline ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
                <div className="flex space-x-4">
                    {socialMediaLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-2xl ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
