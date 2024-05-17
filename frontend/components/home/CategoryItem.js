import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import globalStyles from '../../assets/styles/GlobalStyles';

const CategoryItem = ({CategoryItemData}) => {
    return (
        <View style={{ gap: 10 }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={{ ...styles.iconCategoryStyle }}>
                    <Ionicons name={CategoryItemData.logo} color={globalStyles.iconColor} size={24}></Ionicons>
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 11, maxWidth: 80, textAlign: 'center', lineHeight: 14 }}>{CategoryItemData.title}</Text>
            </View>
        </View>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    iconCategoryStyle: {
        padding: 10,
        backgroundColor: '#d7f5f5',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }

})