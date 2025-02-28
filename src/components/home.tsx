import React, { useState } from "react";
import TextInput from "./FontConverter/TextInput";
import FontGrid from "./FontConverter/FontGrid";
import BackgroundEffect from "./FontConverter/BackgroundEffect";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { ThemeToggle } from "./ThemeToggle";

const Home = () => {
  const [text, setText] = useState("Type something fancy...");

  return (
    <BackgroundEffect>
      {/* Main content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Text to Fancy Font Converter
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transform your plain text into beautiful, stylized fonts. Perfect
            for social media, design projects, or just for fun!
          </p>
        </motion.div>

        <div className="space-y-4">
          <TextInput
            onTextChange={setText}
            placeholder="Type something fancy..."
            initialText={text}
          />
          <FontGrid text={text} />
        </div>
      </div>
      <Toaster />
    </BackgroundEffect>
  );
};

export default Home;
