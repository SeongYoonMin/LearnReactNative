import AddTodo from "@/components/AddTodo";
import Empty from "@/components/Empty";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <Empty />
      <AddTodo />
    </View>
  );
}
