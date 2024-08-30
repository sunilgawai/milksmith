import { DeckType } from "@/types/anki";
import { ThemedView } from "../ThemedView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LayoutAnimation, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAppDispatch } from "@/store/hooks";
import { toggleDeckExpand } from "@/store/deckSlice";
import { router } from "expo-router";

const DeckView = ({
  id,
  title,
  sets,
  isExpanded,
  childrens,
}: DeckType) => {
  // console.log("deck", {
  //   id,
  //   title,
  //   sets,
  //   isExpanded,
  //   childrens,
  // });
  const dispatch = useAppDispatch();
  const hasChildren = childrens && childrens.length > 0;

  const handlePress = (id?: number) => {
    console.log("handlePress", id);
    if (sets.length > 0) {
      // navigation.navigate("StudyScreen", { deckId: id });
      router.navigate({
        pathname: "/(decks)/[deckId]",
        params: {
          id: id,
        },
      });
    } else {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      dispatch(toggleDeckExpand(id));
    }
  };

  const handleChevronPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    dispatch(toggleDeckExpand(id));
  };

  return (
    <ThemedView>
      <TouchableOpacity style={[styles.item, { height: 60 }]}>
        {hasChildren ? (
          <TouchableOpacity
            style={{
              paddingHorizontal: 10,
            }}
            onPress={handleChevronPress}
          >
            {isExpanded ? (
              <Ionicons name="chevron-down-outline" size={20} color={"black"} />
            ) : (
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={"black"}
              />
            )}
          </TouchableOpacity>
        ) : (
          <Ionicons name="add-outline" size={20} color={"black"} />
        )}
        <Pressable
          style={{
            paddingVertical: 20,
          }}
          onPress={() => handlePress(id)}
        >
          <Text style={styles.itemText}>{title}</Text>
        </Pressable>
      </TouchableOpacity>

      <View style={styles.deckSeparator} />

      {isExpanded && hasChildren && (
        <View style={{ paddingLeft: 15 }}>
          {childrens.map((child: any, idx: any) => (
            <DeckView {...child} key={idx} />
          ))}
        </View>
      )}
    </ThemedView>
  );
};

export default DeckView;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "500",
    color:"black"
  },
  deckSeparator: {
    height: 0.5,
    backgroundColor: "#c8c8c8",
  },
  content: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginVertical: 5,
  },
  text: {
    fontSize: 14,
  },
  separator: {
    height: 0.5,
    backgroundColor: "#c8c8c8",
    marginVertical: 10,
  },
});
