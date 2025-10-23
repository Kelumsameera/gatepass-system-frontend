import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


function HederLayout() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <header className="w-full h-[100px] bg-accent flex ">
        <motion.img
          src="https://flexicare.com/wp-content/uploads/Flexicare-Emblem-White.svg"
          className="h-full p-2"
          alt="Flexicare"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
        <div className="w-full h-full flex text-xl text-primary justify-center items-center gap-[30px]">
          {[
            "Home",
            "Register",
            "Login",
            "Request Pass",
            "Approvals",
            "Reports",
            "Pending",
            "Profile",
            "Notifications",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.08, duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
            >
              <Link to={item.toLowerCase().replace(" ", "")}>{item}</Link>
            </motion.div>
          ))}
        </div>
      </header>
    </motion.div>
  );
}

export default HederLayout;
