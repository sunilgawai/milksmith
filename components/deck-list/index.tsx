import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import ExpandableDeckView from "@/components/deck-list/deck-view";
import { DeckType } from "@/types/anki";
import { DECKS_DATA } from "@/utils/_data";

const DecksList = () => {
  const [decks, setDecks] = useState<DeckType[]>(DECKS_DATA);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // console.log("fetchedDecks", decks);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {DECKS_DATA.map((item, idx) => (
          <ExpandableDeckView {...item} key={idx} />
        ))}
        {/* {decks.map((item, idx) => (
          <Text key={idx}>{JSON.stringify(item)}</Text>
        ))} */}

      </ScrollView>
    </SafeAreaView>
  );
};

export default DecksList;
