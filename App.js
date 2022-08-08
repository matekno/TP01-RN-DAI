import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';

export default function App() {
  const [text, onChangeText] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Open up App.js to start working on your app!</Text>
      {/*No entendo porque hay que poner value=text en el textinput */}
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={"Ingrese su texto"}
      />
      <Button
        title='Polshu, tocame!'
        color="#f185dd"
        onPress={() => Alert.alert("ola polshu esta es mi primera pagina web")}>
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head1: {
    backgroundColor: '#f000ff' 
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});
