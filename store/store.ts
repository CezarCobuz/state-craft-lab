import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

type State = {
  iconName: string;
  iconColor: string;
  numberOfIcons: string;
  setIconName: (name: string) => void;
  setIconColor: (color: string) => void;
  setNumberOfIcons: (count: string) => void;
  loadFromStorage: () => void;
};

export const useIconStore = create<State>((set) => ({
  iconName: "",
  iconColor: "",
  numberOfIcons: "1",

  setIconName: (name) => {
    const lowercasedName = name.toLowerCase();

    set({ iconName: lowercasedName });
    AsyncStorage.setItem("iconName", name);
  },

  setIconColor: (color) => {
    const lowercasedColor = color.toLowerCase();
    set({ iconColor: lowercasedColor });
    AsyncStorage.setItem("iconColor", lowercasedColor);
  },

  setNumberOfIcons: (count) => {
    set({ numberOfIcons: count });
    AsyncStorage.setItem("numberOfIcons", count);
  },

  loadFromStorage: async () => {
    const [iconName, iconColor, numberOfIcons] = await Promise.all([
      AsyncStorage.getItem("iconName"),
      AsyncStorage.getItem("iconColor"),
      AsyncStorage.getItem("numberOfIcons"),
    ]);

    set({
      iconName: iconName || "",
      iconColor: iconColor || "",
      numberOfIcons: numberOfIcons || "1",
    });
  },
}));
