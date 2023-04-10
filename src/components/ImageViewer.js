import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ imageSource, chosenImage }) {
  const showImage =
    chosenImage !== null ? { uri: chosenImage } : { imageSource };
  return <Image source={showImage} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
