import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@config/motion";
import EarthCanvas from "components/canvas/Earth";

const Right = () => {
  return (
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="xl:flex-1 h-[600px] "
    >
      <EarthCanvas />
    </motion.div>
  );
};

export default Right;
