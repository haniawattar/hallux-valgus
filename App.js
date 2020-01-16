import React, { useState } from 'react';
import { 
   StyleSheet,
   Text,
   View,
   TextInput,
   Button,
   FlatList
  } from 'react-native';

export default function App() {
// first
  const [textInput, setTextInput] = useState('');
  const [todos, setTodos] = useState([]);
//second
  const [textInput1, setTextInput1] = useState('');
  const [todos1, setTodos1] = useState([]);
//third
  const [textInput2, setTextInput2] = useState('');
  const [todos2, setTodos2] = useState([]);

  //first
  const pressHandler = () => {
    setTodos([textInput, ...todos]);
  };

  const typingHandler = (value) => {
    setTextInput(value);
  }
//2nd
  const pressHandler1 = () => {
    setTodos1([textInput1, ...todos1]);
  };

  const typingHandler1 = (value) => {
    setTextInput1(value);
  }
//third

  const pressHandler2 = () => {
    setTodos2([textInput2, ...todos2]);
  };

  const typingHandler2 = (value) => {
    setTextInput2(value);
  }


  return (
    <View style={styles.container}>

     
      <Text>First question:</Text>
      <TextInput
        onChangeText={typingHandler}
        value={textInput}
        style={{ borderWidth: 1, width: 300 }}
      />
      <Button
        onPress={pressHandler}
        title="Save your first answer"
      />
      <FlatList
        data={todos}
        renderItem={todo => <Todo text={todo.item}/>}
      />

      
      <Text>second question : </Text>
      <TextInput
        onChangeText={typingHandler1}
        value={textInput1}
        style={{ borderWidth: 1, width: 300 }}
      />
      <Button
        onPress={pressHandler1}
        title="save your second answer"
      />
       <FlatList
        data={todos1}
        renderItem={todo => <Todo text={todo.item}/>}
      />


      <Text>third question : </Text>
      <TextInput
        onChangeText={typingHandler2}
        value={textInput2}
        style={{ borderWidth: 1, width: 300 }}
      />
      <Button
        onPress={pressHandler2}
        title="save your third answer"
      />

      <FlatList
        data={todos2}
        renderItem={todo => <Todo text={todo.item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Todo = props => (
  <View 
    style={{ backgroundColor: "#eaeaea", width: 300, margin: 5 }}>
    <Text>{props.text}</Text>
  </View>


);