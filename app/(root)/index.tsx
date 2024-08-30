import { Redirect } from "expo-router";
import { SafeAreaView } from "react-native";

export default () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingVertical: 5 }}>
      <Redirect href="/(auth)/login" />
    </SafeAreaView>
  );
};
