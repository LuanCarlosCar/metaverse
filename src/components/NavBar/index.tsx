"use client";
import { motion } from "framer-motion";
import styles from "../../styles";
import { navVariants } from "../../utils/motion";
import Image from "next/image";

export default function NavBar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className=" absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <Image
          src="/search.svg"
          alt="search"
          width={24}
          height={24}
          className={styles.syzeIcon}
        />
        <h2 className=" font-extrabold text-[1.5rem]  leading-[1.875rem] text-white">
          METAVERSUS
        </h2>

        <Image
          src="/menu.svg"
          alt="menu"
          width={24}
          height={24}
          className={styles.syzeIcon}
        />
      </div>
    </motion.nav>
  );
}
