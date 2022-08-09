import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import TP01 from './components/TP01';
import LearningAxios from './components/LearningAxios';

export default function App() {
  return (
    // <TP01 />
    <LearningAxios />
  )
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
