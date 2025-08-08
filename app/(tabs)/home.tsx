import WaterGlass from "@/assets/images/water-glass.png";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Bebeu água?</Text>
      <Image
        source={WaterGlass}
      />

    </View>
  );
}
