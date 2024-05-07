"use client";

import styles from "@/styles";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { TitleText, Typingtext } from "../UiMotion/Text";
import { startingFeatures } from "@/constants";
import StartSteps from "./components/StartSteps";

export default function GetStarted() {
  return (
    <section className={`${styles.paddings} flex justify-center relative z-10`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <Image
            src="/get-started.png"
            alt="get-started"
            width={1000}
            height={1000}
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className=" flex-[0.75] flex justify-center flex-col"
        >
          <Typingtext title="| How Metaversus works" />
          <TitleText title={<>Get started with just a few clicks</>} />

          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
