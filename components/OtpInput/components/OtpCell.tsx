import { OTP_LENGTH } from "@/constants/otp";
import React, { memo, RefObject } from "react";
import { StyleSheet, TextInput } from "react-native";

interface Props {
  pos: number;
  value: string;
  onChange: (char: string) => void;
  inputsRef: RefObject<TextInput[]>;
}

export const OtpCell = memo(({ pos, value, onChange, inputsRef }: Props) => {
  const handleChange = (text: string) => {
    onChange(text);
    if (text && inputsRef.current && pos + 1 < OTP_LENGTH) {
      inputsRef.current[pos + 1]?.focus();
    }
  };

  const handleKeyPress = ({
    nativeEvent,
  }: {
    nativeEvent: { key: string };
  }) => {
    if (nativeEvent.key === "Backspace" && pos > 0 && !value) {
      inputsRef.current?.[pos - 1]?.focus();
    }
  };

  return (
    <TextInput
      ref={(ref) => {
        if (inputsRef.current) inputsRef.current[pos] = ref!;
      }}
      style={styles.cell}
      maxLength={1}
      value={value}
      onChangeText={handleChange}
      onKeyPress={handleKeyPress}
      keyboardType="number-pad"
      textAlign="center"
    />
  );
});

const styles = StyleSheet.create({
  cell: {
    margin: 5,
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    textAlign: "center",
    fontSize: 18,
    borderRadius: 5,
  },
});
