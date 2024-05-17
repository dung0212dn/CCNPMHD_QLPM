import React, { memo } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const MedicineCard = (props) => {
    const navigation = useNavigation();
    const url = `/medicine/${props.obj.id}`;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={{ uri: props.obj.image }} style={styles.image} />
                <Text style={styles.label}>{props.obj.name}</Text>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate('MedicineDetail', { id: props.obj.id })}
                >
                    <Text style={styles.buttonText}>Chi tiết</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        maxWidth: '33.33%', // For a 3-column layout
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        padding: 16,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginBottom: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    button: {
        backgroundColor: '#17a2b8',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
    },
});

export default memo(MedicineCard);
