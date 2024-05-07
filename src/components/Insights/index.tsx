"use client";

import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { Typingtext } from "../UiMotion/Text";
import { insights } from "@/constants";
import InsightCard from "./components/InsightCard";

export default function Insights() {
  return (
    <section className={`${styles.paddings}  relative z-10`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col `}
      >
        <Typingtext title="| Insight" textStyles="text-center" />
        <Typingtext title="Insight about metaverse" textStyles="text-center" />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, index) => (
            <InsightCard key={`insights-${index}`} {...insight} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
