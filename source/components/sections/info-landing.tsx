'use client';
import Image from "next/image";
import { InfoLdg } from "@/types";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import Link from "next/link";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface InfoLandingProps {
  data: {
    title: string;
    description: string;
    code?: string;
    list?: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  reverse?: boolean;
}

export default function InfoLanding({ data, reverse = false }: InfoLandingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [reverse ? "75%" : "-75%", "0%", "0%", reverse ? "-75%" : "75%"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  const contentX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [reverse ? "-75%" : "75%", "0%", "0%", reverse ? "75%" : "-75%"]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.95, 1, 1, 0.95]
  );

  return (
    <section ref={ref} className="relative py-40">
      <div className="container px-4 mx-auto">
        <motion.div 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}
          style={{ opacity, scale }}
        >
          {/* Content Column */}
          <motion.div 
            className="space-y-10"
            style={{ x: contentX }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {data.title}
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              {data.description}
            </motion.p>
            
            {data.list && (
              <motion.div className="space-y-8">
                {data.list.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: "easeOut" }}
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                      <span className="text-purple-600 dark:text-purple-400 text-xl">
                        {/* Icon component here */}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Code/Demo Column */}
          <motion.div 
            className="relative"
            style={{ x }}
          >
            {data.code ? (
              <motion.div 
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <pre className="p-8 rounded-2xl bg-gray-900/95 text-gray-100 overflow-x-auto relative font-mono text-[15px] leading-relaxed">
                  <motion.div 
                    className="absolute -inset-[1px] bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 rounded-2xl opacity-0"
                    whileHover={{ opacity: 0.15 }}
                    transition={{ duration: 0.3 }}
                  />
                  <code>{data.code}</code>
                </pre>
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 opacity-10 blur-3xl rounded-2xl"
                  style={{ 
                    scale: useTransform(scrollYProgress, [0, 0.5, 1], [1.3, 1, 1.3]) 
                  }}
                />
              </motion.div>
            ) : (
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20">
                {/* Demo content */}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
