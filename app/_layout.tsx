import DateHeader from "@/components/DateHeader";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView>
      <DateHeader />
      <Stack />
    </SafeAreaView>
  );
}
