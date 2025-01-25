"use client";
import { motion } from "framer-motion";

export const FloatingCode = () => {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1 }}
    >
      <pre className="text-xs text-gray-500 overflow-hidden">
        {Array(20)
          .fill(
            `const api = new APIHub();
api.connect();
api.fetch('/endpoint')
  .then(data => {
    console.log(data);
  });`
          )
          .join("\n")}
      </pre>
    </motion.div>
  );
};
