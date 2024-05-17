import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Api, { endpoints } from "../layouts/configs/Api";
import { useNavigation } from '@react-navigation/native';

export default function PaymentDetail(props) {
    const navigation = useNavigation();
    const [bill, setBill] = useState([]);

    useEffect(() => {
        const loadBill = async () => {
            try {
                const res = await Api.get(endpoints["bill"]);
                setBill(res.data.results);
            } catch (error) {
                console.error(error);
            }
        };
        loadBill();
    }, []);
    
    const handlePayment = (method) => {
        // handle payment logic here, based on the method
        console.log(`Selected payment method: ${method}`);
        // You can navigate to another screen or show a message based on the method
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CHỌN PHƯƠNG THỨC THANH TOÁN</Text>
            <View style={styles.paymentButtons}>
                <TouchableOpacity 
                    style={styles.paymentButton} 
                    onPress={() => handlePayment('direct')}>
                    <Text style={styles.paymentButtonText}>Thanh toán trực tiếp</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.paymentButton} 
                    onPress={() => handlePayment('momo')}>
                    <Text style={styles.paymentButtonText}>Thanh toán qua momo</Text>
                </TouchableOpacity>
            </View>
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
        textAlign: 'center',
        marginBottom: 24,
    },
    paymentButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    paymentButton: {
        backgroundColor: '#17a2b8',
        padding: 16,
        borderRadius: 8,
        width: '40%',
        alignItems: 'center',
    },
    paymentButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});
