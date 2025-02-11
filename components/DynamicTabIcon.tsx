import { useIconStore } from "@/store/store";
import { isValidMaterialIcon } from "@/utils/validateIcon";
import { MaterialIcons } from "@expo/vector-icons";

export const DynamicTabIcon = ({ color }: { color: string }) => {
  const { iconName, iconColor } = useIconStore();

  const validIcon = isValidMaterialIcon(iconName) ? iconName : "star";
  const displayColor = iconColor || color;

  return <MaterialIcons name={validIcon} size={28} color={displayColor} />;
};
