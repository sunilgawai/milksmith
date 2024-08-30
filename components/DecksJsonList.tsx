import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { DeckType } from "@/types/anki";
const rawDecksData = {
  decks:
    '{"1717998004473":{"id":1717998004473,"mod":1718611521,"name":"Computer Science::1.1 Processors, I/O and storage","usn":-1,"lrnToday":[7,0],"revToday":[7,0],"newToday":[7,13],"timeToday":[7,48922],"collapsed":false,"browserCollapsed":false,"desc":"","dyn":0,"conf":1,"extendNew":0,"extendRev":0,"reviewLimit":null,"newLimit":null,"reviewLimitToday":null,"newLimitToday":null},"1717998004477":{"id":1717998004477,"mod":1717998004,"name":"Computer Science::2.1 Computational thinking","usn":-1,"lrnToday":[0,0],"revToday":[0,0],"newToday":[0,0],"timeToday":[0,0],"collapsed":false,"browserCollapsed":false,"desc":"","dyn":0,"conf":1,"extendNew":0,"extendRev":0,"reviewLimit":null,"newLimit":null,"reviewLimitToday":null,"newLimitToday":null},"1720547314001":{"id":1720547314001,"mod":1720547314,"name":"Computer Science::JavaScript - Ian","usn":-1,"lrnToday":[570,27],"revToday":[570,12],"newToday":[570,20],"timeToday":[570,599935],"collapsed":false,"browserCollapsed":true,"desc":"Please see the <a href=\'https://ankiweb.net/shared/info/216021904\'>shared deck page</a> for more info.","dyn":0,"conf":1,"extendNew":7,"extendRev":50,"reviewLimit":null,"newLimit":null,"reviewLimitToday":null,"newLimitToday":null},"1720356299865":{"id":1720356299865,"mod":1720356299,"name":"Anatom├¡a::Cabeza","usn":-1,"lrnToday":[30,0],"revToday":[30,0],"newToday":[30,0],"timeToday":[30,0],"collapsed":false,"browserCollapsed":false,"desc":"","dyn":0,"conf":1,"extendNew":10,"extendRev":50,"reviewLimit":null,"newLimit":null,"reviewLimitToday":null,"newLimitToday":null},"1717998004475":{"id":1717998004475,"mod":1717998004,"name":"Computer Science::1.3 Exchanging data","usn":-1,"lrnToday":[0,0],"revToday":[0,0],"newToday":[0,0],"timeToday":[0,0],"collapsed":false,"browserCollapsed":false,"desc":"","dyn":0,"conf":1,"extendNew":0,"extendRev":0,"reviewLimit":null,"newLimit":null,"reviewLimitToday":null,"newLimitToday":null},"1720356299863":{"id":1720356299863,"mod":1720356299,"name":"Anatom├¡a::Pelvis","usn":-1,"lrnToday":[30,0],"revToday":[30,0],"newToday":[30,0],"timeToday":[30,0],"collapsed":false,"browserCollapsed":false,"desc":"","dyn":0,"conf":1,"extendNew":10,"extendRev":50,"reviewLimit":null,"newLimit":null,"reviewLimitToday":null,"newLimitToday":null},"1720356299858":{"id":1720356299858,"mod":1720356299,"name":"Anatom├¡a::T├│rax","usn":-1,"lrnToday":[30,0],"revToday":[30,0],"newToday":[30,0],"timeToday":[30,0],"collapsed":false,"browserCollapsed":false,"desc":"","dyn":0,"mid":"1560118570057","inactiveTags":[],"activeTags":[],"conf":1,"extendNew":10,"extendRev":50,"reviewLimit":null,"newLimit":null,"reviewLimitToday":null,"newLimitToday":null},"1720356299864":{"id":1720356299864,"mod":1720356299,"name":"Anatom├¡a::Dorso","usn":-1,"lrnToday":[30,0],"revToday":[30,0],"newToday":[30,0],"timeToday":[30,0],"collapsed":false,"browserCollapsed":false,"desc":"","dyn":0,"conf":1,"extendNew":10,"extendRev":50,"reviewLimit":null,"newLimit":null,"reviewLimitToday":null,"newLimitToday":null},"1720356299861":{"id":1720356299861,"mod":1720356299,"name":"Anatom├¡a::Cuello","usn":-1,"lrnToday":[30,0],"revToday":[30,0],"newToday":[30,0],"timeToday":[30,0],"collapsed":false,"browserCollapsed":false,"desc":"","dyn":0,"conf":1,"extendNew":10,"extendRev":50,"reviewLimit":null,"newLimit":null,"reviewLimitToday":null,"newLimitToday":null},"1720357469633":{"id":1720357469633,"mod":1720357469,"name":"Botony::7.Ecosystem","usn":-1,"lrnToday":[0,0],"revToday":[0,0],"newToday":[0,0],"timeToday":[0,0],"collapsed":false,"browserCollapsed":false,"desc":"","dyn":0,"conf":1,"extendNew":10,"extendRev":50,"reviewLimit":null,"newLimit":null,"reviewLimitToday":null,"newLimitToday":null},"1720357469636":{"id":1720357469636,"mod":1720357469,"name":"Botony::2.Reproduction in flowering plant","usn":-1,"lrnToday":[0,0],"revToday":[0,0],"newToday":[0,0],"timeToday":[0,0],"collapsed":false,"browserCollapsed":false,"desc":"","dyn":0,"conf":1,"extendNew":10,"extendRev":50,"reviewLimit":null,"newLimit":null,"reviewLimitToday":null,"newLimitToday":null},"1720356299860":{"id":1720356299860,"mod":1720356299,"name":"Anatom├¡a::Miembros superiores","usn":-1,"lrnToday":[30,0],"revToday":[30,0],"newToday":[30,0],"timeToday":[30,0],"collapsed":false,"browserCollapsed":false,"desc":"","dyn":0,"conf":1,"extendNew":10,"extendRev":50,"reviewLimit":null,"newLimit":null,"reviewLimitToday":null,"newLimitToday":null},"1":{"id":1,"mod":0,"name":"Default","usn":0,"lrnToday":[0,0],"revToday":[0,0],"newToday":[0,0],"timeToday":[0,0],"collapsed":true,"browserCollapsed":true,"desc":"","dyn":0,"conf":1,"extendNew":0,"extendRev":0,"reviewLimit":null,"newLimit":null,"reviewLimitToday":null,"newLimitToday":null},"1717998004474":{"id":1717998004474,"mod":1717998004,"name":"Computer Science::1.2 Software & development","usn":-1,"lrnToday":[0,0],"revToday":[0,0],"newToday":[0,0],"timeToday":[0,0],"collapsed":false,"browserCollapsed":false,"desc":"","dyn":0,"conf":1,"extendNew":0,"extendRev":0,"reviewLimit":null,"newLimit":null,"reviewLimitToday":null,"newLimitToday":null},"1720356299857":{"id":1720356299857,"mod":1720548145,"name":"Anatom├¡a","usn":-1,"lrnToday":[27,0],"revToday":[27,0],"newToday":[27,6],"timeToday":[27,41379],"collapsed":true,"browserCollapsed":true,"desc":"","dyn":0,"conf":1,"extendNew":0,"extendRev":0,"reviewLimit":null,"newLimit":null,"reviewLimitToday":null,"newLimitToday":null},"1717998004476":{"id":1717998004476,"mod":1717998004,"name":"Computer Science::1.5 Legal, moral, ethical & cultural issues","usn":-1,"lrnToday":[0,0],"revToday":[0,0],"newToday":[0,0],"timeToday":[0,0],"collapsed":false,"browserCollapsed":false,"desc":"","dyn":0,"conf":1,"extendNew":0,"extendRev":0,"reviewLimit":null,"newLimit":null,"reviewLimitToday":null,"newLimitToday":null}}',
};

// Parsing the JSON string
const parsedDecks = JSON.parse(rawDecksData.decks);

// Transforming the data
const decksArray = Object.keys(parsedDecks).map((key) => ({
  id: parsedDecks[key].id,
  name: parsedDecks[key].name,
  desc: parsedDecks[key].desc,
}));
interface DecksListProps {
  decks?: DeckType[];
}

const DecksJsonList: React.FC<DecksListProps> = ({ decks }) => {
  return (
    <FlatList
      data={decksArray}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.deckItem}>
          <Text style={styles.deckTitle}>{item.name}</Text>
          <Text style={styles.deckDescription}>{item.desc}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  deckItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  deckTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  deckDescription: {
    fontSize: 14,
    color: "#666",
  },
});

export default DecksJsonList;
