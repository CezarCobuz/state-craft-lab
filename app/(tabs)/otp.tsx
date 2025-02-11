import { OtpInput } from "@/components/OtpInput/OtpInput";
import { OTP_LENGTH } from "@/constants/otp";
import { useState } from "react";
import { StyleSheet, Alert, Button, SafeAreaView } from "react-native";

export default function OtpScreen() {
  const [otp, setOtp] = useState<string[]>(new Array(OTP_LENGTH).fill(""));

  const handleSubmit = () => {
    Alert.alert("Submitted OTP", otp.join(""));
  };

  return (
    <SafeAreaView style={styles.container}>
      <OtpInput otp={otp} setOtp={setOtp} />
      <Button
        title="Submit"
        onPress={handleSubmit}
        disabled={otp.join("").length < OTP_LENGTH}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
