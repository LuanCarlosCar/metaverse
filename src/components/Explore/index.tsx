"use client";
import { motion } from "framer-motion";
import styles from "../../styles";
import { staggerContainer } from "../../utils/motion";
import { TitleText, Typingtext } from "../UiMotion/Text";
import { exploreWorlds } from "../../constants";
import { useState } from "react";
import ExploreCard from "./components/ExploreCard";

export default function Explore() {
  const [active, setActive] = useState("world-2");
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.25,
        }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <Typingtext title="| The World " textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you wnat
              <br className="md:block hidden" />
              to explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
