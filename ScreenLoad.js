import React, { Component } from "react";
import { View, StyleSheet, Animated } from "react-native";

class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  };

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                }),
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}

const ScreenLoad = () => (
  <View style={styles.container}>
    <ImageLoader
      style={styles.image}
      source={{
        uri: "https://i.postimg.cc/XXSfnK4K/Screen-Shot-2022-11-29-at-8-11-24-AM.png",
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
  },
  image: {
    width: 375,
    height: 200,
    //borderRadius: 10,
    flex: 1,
  },
});

export default ScreenLoad;
