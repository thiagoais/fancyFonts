import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { transformText } from "@/lib/fontTransformer";

interface FontCardProps {
  text: string;
  fontStyle: string;
  fontName: string;
}

const FontCard = ({
  text = "Sample Text",
  fontStyle = "font-serif",
  fontName = "Serif",
}: FontCardProps) => {
  const { toast } = useToast();

  // Transform the text based on the font style
  const transformedText = transformText(text, fontStyle);

  const handleCopy = async () => {
    try {
      // Copy the transformed text instead of the original
      await navigator.clipboard.writeText(transformedText);
      toast({
        title: "Copied!",
        description: "Fancy text copied to clipboard",
        duration: 2000,
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy text",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="bg-white dark:bg-gray-700 p-4 h-[200px] w-full flex flex-col">
        <div className="flex-grow space-y-2 mb-4">
          <p className="text-sm text-gray-500 dark:text-gray-300">{fontName}</p>
          <p className="text-xl break-words dark:text-white">
            {transformedText}
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="w-full gap-2 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
          onClick={handleCopy}
        >
          <Copy className="h-4 w-4" />
          Copy
        </Button>
      </Card>
    </motion.div>
  );
};

export default FontCard;
