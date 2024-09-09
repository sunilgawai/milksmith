import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default () => {
  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem("token");
      console.log("access_token", token);
      if (!token) {
        router.replace("/(root)");
      } else {
        router.replace("/(auth)");
      }
    };
    getToken();
  }, []);

  return (
    <View>
      <Text>Root</Text>
    </View>
  );
};
