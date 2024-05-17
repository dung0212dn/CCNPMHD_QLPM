import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Api, { endpoints } from "../layouts/configs/Api";
import PaymentCard from "../layouts/PaymentCard";

export default function Payment() { 
    const [patient, setPatient] = useState([]);

    useEffect(() => {
        const loadPatient = async () => {
            try {
                const res = await Api.get(endpoints["patient"]);
                setPatient(res.data.results);
            } catch (error) {
                console.error(error);
            }
        };
        loadPatient();
    }, []);   

    return (
        <View style={styles.container}>
            <Text style={styles.title}>THANH TOÁN HÓA ĐƠN</Text>
            <FlatList
                data={patient}
                renderItem={({ item }) => <PaymentCard obj={item} />}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
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
        color: 'red',
        textAlign: 'center',
        marginVertical: 16,
    },
    list: {
        flexGrow: 1,
    },
});
