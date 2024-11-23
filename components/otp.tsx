import React, { useRef, useState } from "react";
import { Input } from "antd";

interface OTPInputProps {
  length: number;
  onComplete: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length, onComplete }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center space-x-2">
      {otp.map((digit, index) => (
        <Input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          className="w-12 h-12 text-center text-2xl border-2 border-gray-300 rounded"
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          maxLength={1}
        />
      ))}
    </div>
  );
};

export default OTPInput;
