import { Image, SafeAreaView, View } from "react-native";
import React from "react";
import tw from "twrnc";
import logo from "../../assets/Uber_logo_2018.svg.png";
import NavOptions from "../../components/NavOptions/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={logo}
          style={{ height: 100, width: 100, resizeMode: "contain" }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
