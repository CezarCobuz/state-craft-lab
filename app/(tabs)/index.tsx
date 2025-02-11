import { useIconStore } from "@/store/store";
import { isValidMaterialIcon } from "@/utils/validateIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

export default function HomeScreen() {
  const {
    iconName,
    iconColor,
    numberOfIcons,
    setIconName,
    setIconColor,
    setNumberOfIcons,
  } = useIconStore();

  // Debugging
  // useEffect(() => {
  //   AsyncStorage.clear();
  // }, []);

  const [iconError, setIconError] = useState<string | null>(null);

  const validateIconName = () => {
    if (iconName.trim() !== "" && !isValidMaterialIcon(iconName.trim())) {
      setIconError("Invalid icon name. Please enter a valid Material Icon name.");
    } else {
      setIconError(null);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Icon Configuration</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Icon Name:</Text>
          <TextInput
            style={styles.input}
            value={iconName}
            placeholder="Enter Icon Name (e.g., star, home)"
            onChangeText={(text) => {
              setIconName(text);
              setIconError(null);
            }}
            onBlur={validateIconName}
          />
          {iconError && <Text style={styles.errorText}>{iconError}</Text>}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Icon Color:</Text>
          <TextInput
            style={styles.input}
            value={iconColor}
            placeholder="Enter Icon Color (e.g., red, blue, #00ff00)"
            onChangeText={setIconColor}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Number of Icons:</Text>
          <TextInput
            style={styles.input}
            value={numberOfIcons}
            keyboardType="numeric"
            placeholder="Enter number of icons"
            onChangeText={setNumberOfIcons}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 4,
  },
});
