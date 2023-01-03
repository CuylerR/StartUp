import React from 'react';
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';
// import { Icon } from "react-native-elements";


const data = [
    {
        id: "DG",
        title: "Ride Detail",
        image: "https://i.postimg.cc/W3ZRGwxk/TravelV2.png",
        screen: "MapScreen",
    },
    {
        id: "DG+ES",
        title: "Detail",
        image: "https://i.postimg.cc/Xv0pSSzz/Personal-V2.png",
        screen: "EscortScreen",
    },
    {
        id: "3S",
        title: "Business Detail",
        image: "https://i.postimg.cc/sgYMpk5y/Business-Red.png",
        screen: "EscortScreen",
    },
    {
        id: "4S",
        title: "Armed Detail",
        image: "https://i.postimg.cc/7PcnHt0D/armed-icon.png",
        screen: "EscortScreen",
    },
];




const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

  return (
   <FlatList
   data={data}
   horizontal
   
   keyExtractor={(item) => item.id}
   renderItem={({ item }) => (
    <TouchableOpacity
        onPress={() => navigation.navigate(item.screen)}
        style={tw`p-2 pl-6 pb-8 pt-4 bg-black m-2 w-40`}
        disabled={!origin}
    >
        
        <View style={tw`${!origin && "opacity-60"}`}>
            <Image 
                style={{ width: 80, height: 120, resizeMode: "contain" }}
                source={{ uri: item.image}}
            />
            {/* <Text style={tw`text-white mt-2 text-lg font-semibold`}>{item.title}</Text> */}
            <Text style={tw`text-white mt-2 text-lg font-bold`}>{item.title}</Text>
            {/* <Icon 

            style={tw`p-2 bg-white rounded-full w-10 mt-4`}
            name="arrowright" color="white" type="antdesign" /> */}
        </View>
    </TouchableOpacity>


   )}
   />
  );
};

export default NavOptions;
