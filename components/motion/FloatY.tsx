"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FloatY({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return (
    <motion.div
      animate={{ y: [-4, 4, -4] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      style={style}
    >
      {children}
    </motion.div>
  );
}
