import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "#6c47ff" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitleStyle: { fontSize: 24, fontWeight: "400" },
        headerShadowVisible: false,
        // headerBackVisible: false,
        // headerBackTitleVisible: false,
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="new-password"
        options={{
          title: "Milk Smith",
          headerBackTitle: "Back",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 24, fontWeight: "400" },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="forgot-password"
        options={{
          title: "Milk Smith",
          headerBackTitle: "Back",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 24, fontWeight: "400" },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="confirm-email"
        options={{
          title: "Milk Smith",
          headerBackTitle: "Back",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 24, fontWeight: "400" },
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
