import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <motion.li 
        key={index} 
        initial={{ y: 50, opacity: 0}}
        animate={{y:0, opacity: 1}}
        >
          <NavLink href={link.path} title={link.title} />
        </motion.li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
