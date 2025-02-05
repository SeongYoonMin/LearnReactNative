import { View, Text, StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  emptyView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Empty() {
  return (
    <View style={styles.emptyView}>
      <Text>할일이 없습니다.</Text>
    </View>
  );
}
