import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomDrawerContent = (props: any) => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} scrollEnabled={false}>
        <View style={{ padding: 10 }}>
          <Image
            source={require("@/assets/images/partial-react-logo.png")}
            style={{
              height: 178,
              width: 290,
              alignSelf: "center",
            }}
          />
        </View>

        <DrawerItemList {...props}></DrawerItemList>
        <DrawerItem label="Log Out" onPress={() => router.push("/")} />
        {/* <View
          style={{
            borderTopColor: "#dde3fe",
            paddingBottom: 10 + bottom,
          }}
        >
          <Text>Bottom</Text>
        </View> */}
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawerContent;
