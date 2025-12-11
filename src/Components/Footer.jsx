import { Facebook, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer>
    <div className=" bg-black">
      <div className="max-w-11/12 mx-auto p-4 flex gap-8 justify-between grid grid-cols-2 md:grid-cols-5 py-12 border-b-1 text-white mt-8">
        <div className="space-y-5 col-span-2 md:col-span-1">
          <h2 className="text-xl font-semibold">CS — Ticket System </h2>
          <p className="text-sm align-baseline">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            dolore dicta omnis, saepe porro nemo illo quasi vitae, reprehenderit
            quisquam quos voluptate adipisci eveniet autem voluptatibus dolorum
            laboriosam iste rem?
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-xl font-semibold">Company </h2>
          <p>About Us</p>
          <p>Our Mission</p>
          <p>Contact Saled</p>
        </div>

        <div className="space-y-5">
          <h2 className="text-xl font-semibold">Services</h2>
          <p>Products & Services</p>
          <p>Customer Stories</p>
          <p>Download Apps</p>
        </div>

        <div className="space-y-5">
          <h2 className="text-xl font-semibold">Information</h2>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Join Us</p>
        </div>

        <div className="space-y-5">
          <h2 className="text-xl font-semibold">Social Links</h2>
          <section className="text-sm justify-between">
            <p>
              <Facebook
                className="bg-white rounded-full"
                strokeWidth={0.75}
              />
              Facebook.com
            </p>
            <p>
              ✉️ support@cst.com
            </p>
            <p>
              @CS — Ticket System
            </p>
            <p>
              @CS — Ticket System
            </p>
            <p>
              @CS — Ticket System

            </p>
          </section>
        </div>

      </div>
        <div className="py-6 pb-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
    </div>

    </footer>

    // <footer className="bg-black text-white">
    //   <div className="container mx-auto px-4 py-12 md:py-16">
    //     {/* Grid for the main content sections */}
    //     <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-800 pb-12">
    //       {/* 1. Brand/Description Column (Takes up more space on mobile and md) */}
    //       <div className="col-span-2 md:col-span-1">
    //         <h3 className="text-2xl font-bold mb-4">CS — Ticket System</h3>
    //         <p className="text-gray-400 text-sm leading-relaxed">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           ever since the 1500s, when an unknown printer took a galley of
    //           type and scrambled it to make a type specimen book.
    //         </p>
    //       </div>

    //       {/* 2. Company Links Column */}
    //       <div>
    //         <h4 className="text-lg font-semibold mb-4">Company</h4>
    //         <ul className="space-y-3">
    //           <li>
    //             <a
    //               href="#"
    //               className="text-gray-400 hover:text-white transition duration-300 text-sm"
    //             >
    //               About Us
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="text-gray-400 hover:text-white transition duration-300 text-sm"
    //             >
    //               Our Mission
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="text-gray-400 hover:text-white transition duration-300 text-sm"
    //             >
    //               Contact Sales
    //             </a>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* 3. Services Links Column */}
    //       <div>
    //         <h4 className="text-lg font-semibold mb-4">Services</h4>
    //         <ul className="space-y-3">
    //           <li>
    //             <a
    //               href="#"
    //               className="text-gray-400 hover:text-white transition duration-300 text-sm"
    //             >
    //               Products & Services
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="text-gray-400 hover:text-white transition duration-300 text-sm"
    //             >
    //               Customer Stories
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="text-gray-400 hover:text-white transition duration-300 text-sm"
    //             >
    //               Download Apps
    //             </a>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* 4. Information Links Column */}
    //       <div>
    //         <h4 className="text-lg font-semibold mb-4">Information</h4>
    //         <ul className="space-y-3">
    //           <li>
    //             <a
    //               href="#"
    //               className="text-gray-400 hover:text-white transition duration-300 text-sm"
    //             >
    //               Privacy Policy
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="text-gray-400 hover:text-white transition duration-300 text-sm"
    //             >
    //               Terms & Conditions
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="text-gray-400 hover:text-white transition duration-300 text-sm"
    //             >
    //               Join Us
    //             </a>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* 5. Social Links/Contact Column */}
    //       <div>
    //         <h4 className="text-lg font-semibold mb-4">Social Links</h4>
    //         <ul className="space-y-3">
    //           {/* Note: Assuming a simple icon (e.g., FaTwitter from react-icons) for the social links for this example */}
    //           <li className="flex items-center space-x-2">
    //             <span className="text-gray-400 text-sm">
    //               🐦 @CS — Ticket System
    //             </span>
    //           </li>
    //           <li className="flex items-center space-x-2">
    //             <span className="text-gray-400 text-sm">
    //               🔗 @CS — Ticket System
    //             </span>
    //           </li>
    //           <li className="flex items-center space-x-2">
    //             <span className="text-gray-400 text-sm">
    //               🇫 @CS — Ticket System
    //             </span>
    //           </li>
    //           <li className="flex items-center space-x-2">
    //             <span className="text-gray-400 text-sm">
    //               ✉️ support@cst.com
    //             </span>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>

    //     {/* Copyright Section */}
    //     <div className="pt-6 text-center">
    //       <p className="text-gray-400 text-sm">
    //         © 2025 CS — Ticket System. All rights reserved.
    //       </p>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
