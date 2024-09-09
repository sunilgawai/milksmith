import { Ionicons } from "@expo/vector-icons";
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              // alignSelf: "center",
              // paddingLeft: 25,
              // paddingTop: 20,
              // backgroundColor: "white",
            }}
          >
            {/* <Image
              source={require("@/assets/images/partial-react-logo.png")}
              style={{
                height: 60,
                width: 60,
                alignSelf: "center",
                
              }}
            /> */}
            <Ionicons name="person-circle-sharp" size={60} color={"black"} />
            <View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "semibold",
                  marginVertical: 2,
                  color: "black",
                }}
              >
                Sunil G. Gawai
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "semibold",
                  marginVertical: 2,
                }}
              >
                7397973154
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "semibold",
                  marginVertical: 2,
                }}
              >
                sunilgawai7397@gmail.com
              </Text>
            </View>
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
        <DrawerItem
          labelStyle={{ fontSize: 15, color: "gray", fontWeight: "medium" }}
          label="ABOUT US"
          onPress={() => router.push("/")}
        />
        <DrawerItem
          labelStyle={{ fontSize: 15, color: "gray", fontWeight: "medium" }}
          label="CONTACT US"
          onPress={() => router.push("/")}
        />
        <DrawerItem
          labelStyle={{ fontSize: 15, color: "gray", fontWeight: "medium" }}
          label="TERMS & PRIVACY POLICY"
          onPress={() => router.push("/")}
        />
        <DrawerItem
          label="Log Out"
          pressColor="white"
          icon={({ color, size }) => (
            <Ionicons name="log-out-outline" color="white" size={size} />
          )}
          style={{ backgroundColor: "red" }}
          onPress={() => router.push("/")}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawerContent;
