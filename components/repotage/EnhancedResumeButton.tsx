import React from "react";
import { Button } from "@/components/UI";
import { FaCheck, FaPaperPlane } from "react-icons/fa";

interface EnhancedResumeButtonProps {
  onClick: () => void;
  hasApplied: boolean;
}

const EnhancedResumeButton: React.FC<EnhancedResumeButtonProps> = ({
  onClick,
  hasApplied,
}) => {
  return hasApplied ? (
    <div
      className="flex items-center justify-center
        px-6 py-3 rounded-full
        text-lg font-semibold
        transition-all duration-300 ease-in-out
        bg-green-500 text-white hover:bg-green-600"
    >
      <FaCheck className="mr-2" />
      <span>رزومه ارسال شد</span>
    </div>
  ) : (
    <Button
      onClick={onClick}
      className="
        flex items-center justify-center
        px-6 py-3 rounded-full
        text-lg font-semibold
        transition-all duration-300 ease-in-out
        bg-white text-blue-600 hover:bg-blue-50 hover:shadow-lg"
    >
      <FaPaperPlane className="mr-2" />
      <span>ارسال رزومه</span>
    </Button>
  );
};

export default EnhancedResumeButton;
