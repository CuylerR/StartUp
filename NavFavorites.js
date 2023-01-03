import React from "react";
// import Icon from "react-native-vector-icons";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "900 West Monte Vista Avenue, Turlock, CA",
  },
  {
    id: "456",
    icon: "Briefcase",
    location: "Work",
    destination: "One University Circle, Turlock, CA",
  },
];

const NavFavorites = () => {
  return(
    <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
            <View style={[tw`bg-gray-200`, {height: 0.5 }]} />
        )}
        renderItem={({ item: { location, destination, icon } }) => (
        
            <TouchableOpacity style={tw`flex-row items-center p-5`}>
                {/* <Icon
                    style={tw`mr-4 rounded-full bg-white p-3`}
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18}
                /> */}
             <View>
                    <Text style={tw`text-white text-lg font-semibold`}>{location}</Text>
                    <Text style={tw`text-white`}>{destination}</Text>
             </View>
            </TouchableOpacity>
        )}
    />
  );
    
};

export default NavFavorites;

const styles = StyleSheet.create({});
