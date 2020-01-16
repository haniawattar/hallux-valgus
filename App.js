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

    const [textInput, setTextInput] = useState('');
    const [textInput1,setTextInput1] = useState('');
    const [todos, setTodos] = useState([]);
    const [todos1, setTodos1]= useState([]);

    const pressHandler = () => {
        setTodos([textInput, ...todos]);
    };

    const pressHandler1 = () => {
        setTodos1([textInput, ...todos1]);
    };
    const typingHandler = (value) => {
        setTextInput(value);
    }
    const typingHandler1 = (value) => {
        setTextInput1(value);
    }

    return (
      <View style={styles.container}>
        <Text>Hallux Valgus Feedback</Text>
        <Text>Wie fuehlen Sie sich heute?</Text>
        
        <TextInput
    onChangeText={typingHandler}
    value={textInput}
    style={{ borderWidth: 1, width: 300 }}
      />
    <Button
    onPress={pressHandler}
    title="Eingeben"
    />

    <FlatList
    data={todos}
    renderItem={todo => <Todo text={todo.item}/>}
    />

<Text>Wie weit sind Sie gelaufen?</Text>
        
        <TextInput
    onChangeText={typingHandler1}
    value={textInput1}
    style={{ borderWidth: 1, width: 300 }}
      />
    <Button
    onPress={pressHandler1}
    title="Eingeben"
/>


<FlatList
data1={todos1}
renderItem1={todo1 => <Todo1 text={todo1.item}/>}
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

const Todo1 = props => (
  <View 
    style={{ backgroundColor: "#eaeaea", width: 300, margin: 5 }}>
    <Text>{props.text}</Text>
  </View>
);