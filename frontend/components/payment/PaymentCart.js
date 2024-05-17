import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import Moment from "react-moment";
import { useNavigation } from '@react-navigation/native';
import Api, { endpoints } from "../layouts/configs/Api";

export default function PaymentCard(props) {
    const navigation = useNavigation();
    const [examination, setExamination] = useState([]);
    const [bill, setBill] = useState([]);

    useEffect(() => {
        const loadExamination = async () => {
            try {
                const res = await Api.get(endpoints["examination-schedule"]);
                setExamination(res.data.results);
            } catch (error) {
                console.error(error);
            }
        };

        const loadBill = async () => {
            try {
                const res = await Api.get(endpoints["bill"]);
                setBill(res.data.results);
            } catch (error) {
                console.error(error);
            }
        };

        loadBill();
        loadExamination();
    }, []);

    const handleClick = () => {
        navigation.navigate("PaymentDetail");
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Mã hóa đơn: {props.obj.id}</Text>
                <View style={styles.payment}>
                    <Text>Tên bệnh nhân: {props.obj.name}</Text>
                    <Text>Giới tính: {props.obj.gender}</Text>
                    <Text>Số điện thoại: {props.obj.phone}</Text>
                    <Text>Ngày khám bệnh:</Text>
                    <FlatList
                        data={examination}
                        renderItem={({ item }) => (
                            <Moment format="YYYY/MM/DD">{item.date_examination}</Moment>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                    />
                    <Text>Tổng tiền:</Text>
                    <FlatList
                        data={bill}
                        renderItem={({ item }) => (
                            <Text>{item.amount_of_money} VNĐ</Text>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleClick}>
                    <Text style={styles.buttonText}>Thanh toán</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        width: '100%',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        padding: 16,
        marginBottom: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    payment: {
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#17a2b8',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
