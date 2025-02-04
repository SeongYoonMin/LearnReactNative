import Greeting from "@/components/Greeting";
import { useState } from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [visible, setVisible] = useState(true);
  const onPress = () => setVisible(!visible);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button title={visible ? "숨기기" : "보이기"} onPress={onPress} />
      {visible ? <Greeting name="React Native" size="large" /> : null}
    </SafeAreaView>
  );
}
