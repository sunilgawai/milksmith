import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
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
          title: "Anki Master",
          headerBackTitle: "Back",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 24, fontWeight: "400" },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="forgot-password"
        options={{
          title: "Anki Master",
          headerBackTitle: "Back",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 24, fontWeight: "400" },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="confirm-email"
        options={{
          title: "Anki Master",
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
