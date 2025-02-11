import { MaterialIcons } from "@expo/vector-icons";

export const isValidMaterialIcon = (
  iconName: string
): iconName is keyof typeof MaterialIcons.glyphMap => {
  return iconName in MaterialIcons.glyphMap;
};
