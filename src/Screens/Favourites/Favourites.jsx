import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Data from "./data.js";

const data = [
  {
    id: "123",
    icon: "home",
    location: "home",
    destination: "Islamabad G9  Pakistan",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "work",
    destination: "Islamabad Pakistan",
  },
];

const Favourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={(item) => (
        <TouchableOpacity>
          <Text>Yo</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Favourites;

const styles = StyleSheet.create({});
