import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  // on submit key

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      //error
      Alert.alert("The task can not be empty");
    }
  };

  //  view of
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Insert the task here"
        autoCorrect={true}
        autoCapitalize="none"
        keyboardType="numbers-and-punctuation"
        clearButtonMode="while-editing"
      />

      {/* onPress event calls function pressHandler */}
      <Button title="Add" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "80%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
});
