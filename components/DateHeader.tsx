import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DateHeader = () => {
  const date = new Date();
  const nowDate =
    date.getFullYear() +
    "년 " +
    (date.getMonth() + 1) +
    "월 " +
    date.getDate() +
    "일";
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.dateHeader]}>
      <Text style={[styles.dateText]}>{nowDate}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  dateHeader: {
    backgroundColor: "#616161",
    padding: 12,
  },
  dateText: {
    fontSize: 24,
    color: "#fff",
  },
});

export default DateHeader;
