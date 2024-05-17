import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import UserContext from '../../context/UserContext';
import Api, { endpoints } from '../../configs/Api';

export default function AppointmentScreen() {
    const [user, dispatch] = useContext(UserContext);
    const [newExam, setNewExam] = useState({
        "date_examination": '',
        "examination_schedule_patient": ''
    });

    const navigation = useNavigation();

    const change = (obj) => {
        setNewExam({
            ...newExam,
            ...obj
        });
    };

    const exam = async (event) => {
        event.preventDefault();

        let data = new FormData();
        data.append('date_examination', newExam.date_examination);
        data.append('examination_schedule_patient', newExam.examination_schedule_patient);

        try {
            const res = await Api.post(endpoints['examination-schedule'], data, {
                headers: {
                    "Content-Type": 'multipart/form-data'
                }
            });
            if (res.status === 201)
                alert("Đăng ký lịch khám thành công");
        } catch (error) {
            console.error(error);
        }
    };

    let examination = (
        <>
            <TextInput
                style={styles.input}
                placeholder="Tên của bạn"
                value={newExam.name}
                onChangeText={(value) => change({ 'name': value })}
            />
            <TextInput
                style={styles.input}
                placeholder="Số điện thoại"
                value={newExam.phone}
                onChangeText={(value) => change({ 'phone': value })}
            />
        </>
    );

    if (user != null) {
        examination = (
            <Text style={styles.welcomeText}>Xin chào, <Text style={styles.username}>{user.username}</Text> hãy đặt lịch khám ngay!</Text>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>ĐẶT LỊCH KHÁM NGAY</Text>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://res.cloudinary.com/duxlhasjq/image/upload/v1651900869/publicdomainq-doc2_ilwygi.svg' }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.subHeading}>Hẹn lịch khám</Text>
                    {examination}
                    <TextInput
                        style={styles.input}
                        placeholder="Ngày khám bệnh"
                        value={newExam.date_examination}
                        onChangeText={(value) => change({ 'date_examination': value })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập mã bệnh nhân vào đây"
                        value={newExam.examination_schedule_patient}
                        onChangeText={(value) => change({ 'examination_schedule_patient': value })}
                    />
                    <TouchableOpacity style={styles.button} onPress={exam}>
                        <Text style={styles.buttonText}>Đặt lịch ngay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center',
        marginVertical: 16,
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    formContainer: {
        flex: 2,
        padding: 16,
    },
    subHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#17a2b8',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    welcomeText: {
        fontSize: 18,
        marginBottom: 16,
    },
    username: {
        color: 'red',
    },
});
