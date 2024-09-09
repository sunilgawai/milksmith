import { View } from "react-native";
import { Text } from "react-native-paper";
import {
  SafeAreaView,
} from "react-native-safe-area-context";

export default () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Upcoming Schedules</Text>
      </View>
    </SafeAreaView>
  );
};
