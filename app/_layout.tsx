import DateHeader from "@/components/DateHeader";
import { Slot } from "expo-router";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.select({ ios: "padding"})}
      >
        <DateHeader />
        <Slot />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
