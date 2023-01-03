import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native-web';
// import NavFavorites from './NavFavorites';
//import { Icon } from "react-native-elements";



const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    
    return (
        <SafeAreaView style={tw`bg-black flex-1`}>
            <Text style={tw`text-white text-center py-5 text-xl`}>Good Afternoon, Cuyler</Text>
            <View style={tw`border-t border-black flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete 
                        placeholder='Where to?'
                        styles={toInputBoxStyles}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        minLength={2}
                        onPress={(data, details = null) => {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    desription: data.description,
                                })
                            
                            );
                            
                            navigation.navigate('RideOptionsCard');
                            
                        }}
                        enablePoweredByContainer={false}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: "en",
                        }}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={400}
                    />
                </View>

                 {/* <NavFavorites /> */}

            </View>
            <View>
                {/* <TouchableOpacity>
                    <Icon name="car" type="font-awesome" color="white" size={16} />
                        <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity> */}
            </View>
        </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "white",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});