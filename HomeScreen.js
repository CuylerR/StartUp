import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavorites from '../components/NavFavorites';
import { Icon } from '../components/NavFavorites';
import ScreenLoad from '../components/ScreenLoad';

const HomeScreen = () => {

    const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-black h-full`}>
        {/* <ScreenLoad> */}
            <View style={tw`p-5`}>
                <Image 
                        style={{
                            width: 100, 
                            height: 100, 
                            resizeMode: 'contain',
                        }}
                    source={{
                        // uri: "https://i.postimg.cc/5NZZ2Pgv/detail-secure-mark-only-white.png",
                        // uri: "https://i.postimg.cc/B6F6HGJc/detail-secure-mark-only-white.png",
                        uri: "https://i.postimg.cc/L8Fsyjzr/url-thumbnailv2-transparent.png",
                    }}
                />

                <GooglePlacesAutocomplete 

                    placeholder="Where From?"
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput:{
                            fontSize: 18,
                        },
                    }}
                    onPress={(data, details = null) => {
                        dispatch(
                            setOrigin({
                                location: details.geometry.location,
                                desciption: data.description
                            })
                        );

                        dispatch(setDestination(null))

                    }}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                    minLength={2}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en'
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />



                <NavOptions />
                <NavFavorites />
            </View>
        {/* </ScreenLoad> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

    bg: {
        color: "#292929",
    },

});