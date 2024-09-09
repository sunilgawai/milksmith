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
      <DrawerContentScrollView {...props} scrollEnabled>
        <View style={{ padding: 15 }}>
          <View
            style={{
              height: 120,
              width: 290,
              alignSelf: "center",
              padding: 15,
              backgroundColor:"gray"
              // zIndex: 1,
            }}
          >
            <Text>Sunil G. Gawai</Text>
            <Text>7397973154</Text>
            <Text>sunilgawai7397@gmail.com</Text>
          </View>
          {/* <Image
            source={require("@/assets/images/partial-react-logo.png")}
            style={{
              height: 120,
              width: 290,
              alignSelf: "center",
              zIndex: -1,
            }}
          /> */}
        </View>

        <DrawerItemList {...props}></DrawerItemList>
        <DrawerItem label="ABOUT US" onPress={() => router.push("/")} />
        <DrawerItem label="CONTACT US" onPress={() => router.push("/")} />
        <DrawerItem
          label="TERMS & PRIVACY POLICY"
          onPress={() => router.push("/")}
        />
        <DrawerItem label="Log Out" onPress={() => router.push("/")} />
        <View
          style={{
            borderTopColor: "#dde3fe",
            paddingBottom: 10 + bottom,
          }}
        >
          <Text>Bottom</Text>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawerContent;
