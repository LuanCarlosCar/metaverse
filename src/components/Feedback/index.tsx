"use client";
import styles from "@/styles";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Feedback() {
  return (
    <section className={`${styles.paddings}  relative z-10`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6 `}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a]"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className=" font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
              Samantha
            </h4>

            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
              Metaverus
            </p>
          </div>
          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
            “With the development of {"today's"} technology, metaverse is very
            useful for {"today's"} work, or can be called web 3.0. by using
            metaverse you can use it as anything”
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <Image
            width={1000}
            height={1000}
            src={"/planet-09.png"}
            alt="planet-09"
            className="w-full lg:h-[610px] h-auto min-h-[210px] rounded-[40px] object-cover"
          />

          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%]"
          >
            <Image
              width={1000}
              height={1000}
              src={"/stamp.png"}
              alt="stamp"
              className="w-[155px] h-[155px] object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
