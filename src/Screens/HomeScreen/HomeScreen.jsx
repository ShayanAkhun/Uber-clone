import { Image, SafeAreaView, View } from "react-native";
import React from "react";
import tw from "twrnc";
import logo from "../../assets/Uber_logo_2018.svg.png";
import NavOptions from "../../components/NavOptions/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setOrigin, setDestination } from "../../Redux/Slice/Slice";
import Favourites from "../../components/Favourites/Favourites";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={logo}
          style={{ height: 100, width: 100, resizeMode: "contain" }}
        />
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            fontSize: 18,
          }}
          placeholder="Where From"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          query={{ key: GOOGLE_API_KEY, language: "en" }}
          minLength={2}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"Search"}
        />
        <NavOptions />
        <Favourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
