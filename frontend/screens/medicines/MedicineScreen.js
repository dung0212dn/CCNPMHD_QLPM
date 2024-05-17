import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import Api, { endpoints } from "../layouts/configs/Api";
import MedicinCard from "../../components/medicines/MedicinCard";


export default function MedicineScreen() {
    const [medicine, setMedicine] = useState([]);

    useEffect(() => {
        let loadMedicine = async () => {
            try {
                let res = await Api.get(endpoints['medicine']);
                setMedicine(res.data.results);
            } catch (err) {
                console.error(err);
            }
        };
        loadMedicine();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Medicine</Text>
            {medicine.length === 0 && <ActivityIndicator size="large" color="#0000ff" />}
            <FlatList
                data={medicine}
                renderItem={({ item }) => <MedicinCard obj={item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2} // Assuming you want a grid-like display
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});
