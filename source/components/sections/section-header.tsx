'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from "next/image";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function SectionHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-indigo-500/5"
        style={{ y, opacity }}
      />
      <div className="container px-4 mx-auto relative">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600 mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Write better product descriptions
          </motion.h2>
          <motion.p 
            className="max-w-2xl text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0.5]) }}
          >
            Stop leaving money on the table with generic product descriptions. 
            Our AI understands your customers and writes descriptions that convert.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
