/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { MotiView } from "moti";
import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Easing } from "react-native-reanimated";

const SIZE = 100;
const MAIN_COLOR = "#6e01ef";

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {[...Array(5).keys()].map((item) => (
          <MotiView
            key={item}
            from={{ opacity: 0.7, scale: 1 }}
            animate={{ opacity: 0, scale: 4 }}
            transition={{
              type: "timing",
              duration: 2000,
              easing: Easing.out(Easing.ease),
              delay: 200 * item,
              repeatReverse: false,
              loop: true,
            }}
            style={[
              StyleSheet.absoluteFillObject,
              { backgroundColor: MAIN_COLOR, borderRadius: SIZE / 2 },
            ]}
          />
        ))}
        <Image
          source={require("./assets/images/phone-call.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: MAIN_COLOR,
  },
  image: {
    width: SIZE / 2,
    height: SIZE / 2,
  },
});

export default App;
