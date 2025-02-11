import { OTP_LENGTH } from "@/constants/otp";
import React, { useRef, useEffect, memo, RefObject } from "react";
import { TextInput, StyleSheet, Alert } from "react-native";
import { OtpCell } from "./components/OtpCell";
import { ThemedView } from "../ThemedView";

export const OtpInput = ({
  otp,
  setOtp,
}: {
  otp: string[];
  setOtp: (otp: string[]) => void;
}) => {
  const inputsRef = useRef<TextInput[]>([]);

  const handleChange = (pos: number, char: string) => {
    const newOtp = [...otp];
    newOtp[pos] = char;
    setOtp(newOtp);
  };

  useEffect(() => {
    if (otp.join("").length === OTP_LENGTH) {
      Alert.alert("Auto-Submit", otp.join(""));
    }
  }, [otp]);

  return (
    <ThemedView style={styles.row}>
      {Array.from({ length: OTP_LENGTH }).map((_, i) => (
        <OtpCell
          key={i}
          pos={i}
          value={otp[i]}
          onChange={(char) => handleChange(i, char)}
          inputsRef={inputsRef}
        />
      ))}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
});
