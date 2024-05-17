import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Api, { endpoints } from "../../configs/Api";


export default function AppointmentBookedScreen() { 
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        const loadSchedule = async () => {
            try {
                const res = await Api.get(endpoints["examination_schedule"]);
                setSchedule(res.data.results);
            } catch (error) {
                console.error(error);
            }
        };
        loadSchedule();
    }, []);   

    return (
        <View style={styles.container}>
            <Text style={styles.title}>THÔNG TIN LỊCH KHÁM</Text>
            <FlatList
                data={schedule}
                renderItem={({ item }) => (
                    <View style={styles.card}>  
                        <Text style={styles.cardText}>Ngày khám: {item.date_examination}</Text>
                        <Text style={styles.cardText}>Bệnh nhân: {item.patient_name}</Text>
                        {/* Add more details as needed */}
                    </View>
                )}
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
    card: {
        backgroundColor: '#f8f9fa',
        padding: 16,
        borderRadius: 8,
        marginVertical: 8,
    },
    cardText: {
        fontSize: 16,
        marginBottom: 8,
    },
});
