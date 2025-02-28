import React from "react";
import FontCard from "./FontCard";
import { motion } from "framer-motion";

interface FontGridProps {
  text: string;
  fontStyles?: Array<{
    name: string;
    style: string;
  }>;
}

const FontGrid = ({
  text = "Preview Text",
  fontStyles = [
    { name: "𝕗𝕦𝕖𝕟𝕥𝕖 𝕕𝕖 𝕔𝕠𝕟𝕥𝕠𝕣𝕟𝕠", style: "font-outline" },
    { name: "ᴠᴇʀꜱᴀʟɪᴛᴀꜱ", style: "font-small-caps" },
    { name: "🅣🅔🅧🅣🅞 ⓓⓔ 🅑🅤🅡🅑🅤🅙🅐", style: "font-bubble" },
    { name: "🆃🅴🆇🆃🅾 🄲🅄🄰🄳🅁🄰🄳🄾", style: "font-square" },
    { name: "𝙉𝙚𝙜𝙧𝙞𝙩𝙖", style: "font-bold-italic" },
    { name: "𝚏𝚞𝚎𝚗𝚝𝚎 𝚜𝚎𝚛𝚒𝚏", style: "font-monospace" },
    { name: "𝖙𝖊𝖝𝖙𝖔 𝖊𝖓 𝖎𝖓𝖌𝖑𝖊́𝖘 𝖆𝖓𝖙𝖎𝖌𝖚𝖔", style: "font-old-english" },
    { name: "𝓵𝓮𝓽𝓻𝓪𝓼 𝓬𝓾𝓻𝓼𝓲𝓿𝓪𝓼", style: "font-cursive" },
    { name: "śǝʌǝɹ ןɐ oʇxǝʇ", style: "font-upside-down" },
    { name: "ˢᵘᵖᵉʳⁱ́ⁿᵈⁱᶜᵉ", style: "font-superscript" },
    { name: "𝐓𝐞𝐱𝐭𝐨 𝐞𝐧 𝐧𝐞𝐠𝐫𝐢𝐭𝐚𝐬", style: "font-serif-bold" },
    { name: "𝘐𝘵𝘢𝘭𝘪𝘤 𝘴𝘦𝘳𝘪𝘧", style: "font-serif-italic" },
    { name: "ｖａｐｏｒｗａｖｅ", style: "font-vaporwave" },
    { name: "S̷t̷y̷l̷e̷ G̷l̷i̷t̷c̷h̷", style: "font-glitch" },
    { name: "🄼🄰🅈🅄🅂🄲🅄🄻🄰🅂", style: "font-circled" },
  ],
}: FontGridProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 min-h-[600px] w-full rounded-lg">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {fontStyles.map((font, index) => (
          <motion.div key={index} variants={item}>
            <FontCard text={text} fontStyle={font.style} fontName={font.name} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FontGrid;
