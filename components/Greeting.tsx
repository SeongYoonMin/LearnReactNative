import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IGreetingProps {
  name?: string;
  size?: string;
}

const Greeting = ({ name = "나이름없음", size = "medium" }: IGreetingProps) => {
  return (
    <View style={styles.greeting}>
      <Text style={[textSize[size]]}>안녕하세요. {name}님!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greeting: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  small: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  medium: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  large: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});

const textSize: { [key: string]: any } = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

export default Greeting;
