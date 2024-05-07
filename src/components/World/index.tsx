"use client";

import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { TitleText, Typingtext } from "../UiMotion/Text";
import { ReactElement } from "react";

interface props {
  children: ReactElement;
}

function UpScaleMotion({ children }: props) {
  return (
    <motion.div
      whileHover={{ scale: [null, 1.1, 1.2] }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export default function World() {
  return (
    <section className={`${styles.paddings} flex justify-center relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <Typingtext title="| People on the world" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <Image
            src="/map.png"
            alt="map"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
          <UpScaleMotion>
            <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
              <Image
                src="/people-01.png"
                alt="people"
                width={1000}
                height={1000}
                className="w-full h-full"
              />
            </div>
          </UpScaleMotion>

          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <Image
              src="/people-02.png"
              alt="people"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>

          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <Image
              src="/people-03.png"
              alt="people"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
