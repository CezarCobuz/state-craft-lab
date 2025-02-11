import { View, Text, StyleSheet } from "react-native";

export default function OTPScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>OTP Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
});
