"use client";

import styles from "@/styles";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { TitleText, Typingtext } from "../UiMotion/Text";
import { newFeatures } from "@/constants";
import NewFeatures from "./components/NewFeatures";

export default function WhatsNew() {
  return (
    <section className={`${styles.paddings} flex justify-center relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className=" flex-[0.75] flex justify-center flex-col"
        >
          <Typingtext title="| What's New?" />
          <TitleText title={<>{"What's"} new about Metaversus</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
          ;
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <Image
            src="/whats-new.png"
            alt="whats-new"
            width={1000}
            height={1000}
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
