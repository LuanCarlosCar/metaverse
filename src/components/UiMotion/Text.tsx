import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../../utils/motion";
import { ReactElement } from "react";

interface PropsTypingtext {
  title: string;
  textStyles?: string;
}

interface PropsTitleText {
  title: ReactElement;
  textStyles?: string;
}

export function Typingtext({ title, textStyles }: PropsTypingtext) {
  return (
    <motion.p
      variants={textContainer}
      className={` font-normal text-[14px] text-secondary-white ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00a0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
}

export function TitleText({ title, textStyles }: PropsTitleText) {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
    >
      {title}
    </motion.h2>
  );
}
