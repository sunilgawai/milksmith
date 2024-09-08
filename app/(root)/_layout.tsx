import CustomDrawerContent from "@/components/custom-drawer-content";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import React from "react";
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
          name="index"
          options={{
            headerShown: true,
            headerTitle: "Anki Decks React",
            drawerLabel: "Home",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="list-sharp" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="decks"
          options={{
            headerShown: true,
            headerTitle: "Anki Decks React",
            drawerLabel: "Decks",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="list-sharp" size={size} color={color} />
            ),
          }}
        />
        {/* <Drawer.Screen
          name="../(auth)/login.tsx"
          options={{
            headerShown: false,
            drawerIcon: ({ size, color }) => (
              <Ionicons name="log-in-outline" size={size} color={color} />
            ),
          }}
        /> */}
        {/* <Drawer.Screen
          name="statistics/index"
          options={{
            drawerLabel: "Statistics",
            title: "Statistics",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="bar-chart" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="settings/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        /> */}
        <Drawer.Screen
          name="modal"
          options={{
            drawerItemStyle: { display: "flex" },
            drawerLabel: "Deck Card",
            title: "Create Deck",
          }}
        />
        <Drawer.Screen
          name="explore"
          options={{
            title: "Explore",
            // tabBarIcon: ({ color, focused }) => (
            //   <TabBarIcon
            //     name={focused ? "code-slash" : "code-slash-outline"}
            //     color={color}
            //   />
            // ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
