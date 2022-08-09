import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import axios from 'axios';
const baseUrl = 'https://dog-api.kinduff.com/api';


export default function LearningAxios() {
    const [fact, setFact] = useState("");
    const getFacts = async () => {
        try {
            const res = await axios.get(`${baseUrl}/facts`);
            setFact(res.data.facts[0]);
            console.log(fact);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.advice}>{fact}</Text>
            <Button title="Get Advice"
                onPress={getFacts} color="green" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    advice: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 20,
    },
});