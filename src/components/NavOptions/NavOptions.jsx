import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "react-native-elements";

const NavOptions = ({ navigation }) => {
  const data = [
    {
      id: 123,
      title: "Get a Ride",
      image: "https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png",
      screen: "MapScreen",
    },
    {
      id: 456,
      title: "Order Food",
      image: "https://links.papareact.com/28w",
      screen: "EatsScreen",
    },
  ];
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          onPress={() => navigation.navigate("MapScreen")}
        >
          <View>
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
