import React, { FC } from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import { AnimatedTitleData, TitleProps } from "../../../assets/types";

const { width, height } = Dimensions.get("screen");

interface StyleProps {
  translateY: any;
}

const Title: FC<TitleProps> = ({ data, scrollX }) => {
  const translateY = scrollX.interpolate({
    inputRange: [0, width],
    outputRange: [0, -76],
  });

  const s = styles({ translateY });

  return (
    <View style={s.container}>
      {data.map(({ title }: AnimatedTitleData) => (
        <Animated.Text style={s.text} key={title}>
          {title}
        </Animated.Text>
      ))}
    </View>
  );
};

const styles = ({ translateY }: StyleProps) =>
  StyleSheet.create({
    text: {
      fontSize: 32,
      paddingVertical: 16,
      paddingRight: 24,
      paddingLeft: 8,
      color: "#FFF",
      transform: [{ translateY }],
    },
    container: {
      backgroundColor: "red",
      height: 76,
      position: "absolute",
      bottom: 64,
      overflow: "hidden",
    },
  });

export default Title;
