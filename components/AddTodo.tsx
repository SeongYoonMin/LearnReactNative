import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import React, { useState } from "react";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할일을 입력해주세요"
        onChangeText={setInputValue}
        style={styles.input}
      />
      {/* Android 전용 컴포넌트로써 터치했을 때 피드백을 물결 효과로 보여준다. */}
      {Platform.OS === "android" ? (
        <View style={{ borderRadius: 20, overflow: "hidden" }}>
          <TouchableNativeFeedback>
            <View style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      ) : (
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: "#ddd",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: "center",
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF8412",
    overflow: "hidden",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});
