import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface TextInputProps {
  onTextChange?: (text: string) => void;
  placeholder?: string;
  initialText?: string;
}

const TextInput = ({
  onTextChange = () => {},
  placeholder = "Type something fancy...",
  initialText = "",
}: TextInputProps) => {
  const [text, setText] = useState(initialText);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      // Reset height to auto to properly calculate new height
      textAreaRef.current.style.height = "auto";
      // Set new height based on scrollHeight
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [text]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    onTextChange(newText);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[800px] mx-auto"
    >
      <Card className="bg-white dark:bg-gray-800 p-4 shadow-lg">
        <div className="space-y-4">
          <Label
            htmlFor="text-input"
            className="text-lg font-semibold dark:text-gray-100"
          >
            Enter Your Text
          </Label>
          <textarea
            ref={textAreaRef}
            id="text-input"
            value={text}
            onChange={handleTextChange}
            placeholder={placeholder}
            className="w-full min-h-[60px] p-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 resize-none transition-all duration-200"
            style={{
              overflow: "hidden",
            }}
          />
        </div>
      </Card>
    </motion.div>
  );
};

export default TextInput;
