import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

type State = {
  iconName: string;
  iconColor: string;
  numberOfIcons: number;
  setIconName: (name: string) => void;
  setIconColor: (color: string) => void;
  setNumberOfIcons: (count: number) => void;
  loadFromStorage: () => void;
};

export const useIconStore = create<State>((set) => ({
  iconName: "",
  iconColor: "",
  numberOfIcons: 1,

  setIconName: (name) => {
    set({ iconName: name });
    AsyncStorage.setItem("iconName", name);
  },

  setIconColor: (color) => {
    set({ iconColor: color });
    AsyncStorage.setItem("iconColor", color);
  },

  setNumberOfIcons: (count) => {
    const validCount = Math.max(1, count);
    set({ numberOfIcons: validCount });
    AsyncStorage.setItem("numberOfIcons", validCount.toString());
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
      numberOfIcons: numberOfIcons ? parseInt(numberOfIcons, 10) : 1,
    });
  },
}));
