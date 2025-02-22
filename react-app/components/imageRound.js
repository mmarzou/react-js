import React from "react";
import { Image, StyleSheet } from "react-native";

export default function ImageRound() {
  return (
    <Image
      source={{
        uri: "https://reactnative.dev/img/tiny_logo.png",
      }}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50 / 2,
    marginbottom: 10,
  },
});
