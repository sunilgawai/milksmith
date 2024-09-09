import CustomDrawerContent from "@/components/custom-drawer-content";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerHideStatusBarOnOpen: false,
          drawerLabelStyle: {
            // marginLeft: -20
          },
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            headerShown: true,
            headerTitle: "Hi, Sunil",
            headerTitleStyle: {
              fontFamily: "monospace",
              fontSize: 18,
              fontWeight: "semibold",
            },
            drawerLabel: "Home",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="list-sharp" size={size} color={color} />
            ),
            headerRight({ pressColor, pressOpacity, tintColor }) {
              return (
                <View
                  style={{
                    marginHorizontal: 20,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 20,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      borderColor: "orange",
                      borderStyle: "solid",
                      borderWidth: 1,
                      paddingVertical: 2,
                      paddingHorizontal: 10,
                      borderRadius: 5,
                    }}
                  >
                    <Ionicons
                      name="wallet-outline"
                      size={23}
                      color={"orange"}
                    />
                    <Text style={{ color: "orange" }}> ₹ {10}</Text>
                  </View>
                  <Ionicons name="cart-outline" size={25} color={tintColor} />
                  <Ionicons name="notifications-outline" size={25} color={tintColor} />
                </View>
              );
            },
            // Hide Home lable from drawer but keep in use.
            drawerItemStyle: { height: 0 },
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            headerShown: true,
            headerTitle: "Profile",
            drawerLabel: "Profile",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="list-sharp" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="subscription"
          options={{
            headerShown: true,
            headerTitle: "Your Subscription",
            drawerLabel: "Subscription",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="list-sharp" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="history"
          options={{
            headerShown: true,
            headerTitle: "Order History",
            drawerLabel: "Order History",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="list-sharp" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="tip"
          options={{
            headerShown: true,
            headerTitle: "Tip Delivery Boy",
            drawerLabel: "Tip Delivery Boy",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="list-sharp" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="address"
          options={{
            headerShown: true,
            headerTitle: "Manage Address",
            drawerLabel: "Manage Address",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="list-sharp" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="instructions"
          options={{
            headerShown: true,
            headerTitle: "Delivery Instruction",
            drawerLabel: "Delivery Instruction",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="list-sharp" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="wallet"
          options={{
            headerShown: true,
            headerTitle: "Wallet Balance",
            drawerLabel: "Wallet",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="list-sharp" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="queries"
          options={{
            headerShown: true,
            headerTitle: "My Queries",
            drawerLabel: "My Queries",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="list-sharp" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="faq"
          options={{
            headerShown: true,
            headerTitle: "My Queries",
            drawerLabel: "FAQs",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="list-sharp" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="notifications"
          options={{
            headerShown: true,
            headerTitle: "Notification Setting",
            drawerLabel: "Notification Setting",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="list-sharp" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
