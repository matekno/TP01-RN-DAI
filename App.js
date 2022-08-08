import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {
  const [text, onChangeText] = useState('')
  return (
    <View style={styles.main}>
      <View style={[styles.container, { flexDirection: "column" }]}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder={"Ingrese su texto"}
        />
        <Button
          style={styles.button}
          title='Polshu, tocame!'
          color="#f185dd"
          onPress={() => Alert.alert("ola polshu esta es mi primera pagina web")}>
        </Button>
        <View style={styles.lineStyle} />
      
        <View style={styles.respuesta}>
          <Text>{text}</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: "70%",
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0f',
  },
  head1: {
    backgroundColor: '#f000ff'
  },
  input: {
    width: "100%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  button: {
    flex: 2,
    width: "100%"
  },
  lineStyle: {
    borderWidth: 0.6,
    width: "100%",
    borderColor: 'black',
    marginTop: 10,
  },
  respuesta: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
