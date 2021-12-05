import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";
import { Todo } from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  //state and functions that enables to change this state

  // Function to add TODO into array
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(), // id is better to make as a string
      title: title, //title comes from form in addTodo component
    };

    setTodos((prev) => [
      // working with previous incase react did't have time to add
      ...prev,
      {
        id: Date.now().toString(), // and adds object
        title,
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  };

  return (
    <View>
      <Navbar title="Todo App by Julia Taro" />
      <View style={styles.container}>
        {/* onSubmit is a key that is used as a props in AddTodo component */}
        <AddTodo onSubmit={addTodo} />

        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
