import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import CategoryItem from './CategoryItem'

const Category = () => {
    const categoryData = [{
        logo: 'calendar-number-outline',
        title: 'Lịch hẹn',
    }, {
        logo: 'call-outline',
        title: 'Liên hệ',
    },
    {
        logo: 'pencil-outline',
        title: 'Khai báo trước khi khám',
    },
    {
        logo: 'people-outline',
        title: 'Cộng đồng hỏi đáp bác sĩ',
    },
    {
        logo: 'receipt-outline',
        title: 'Số khám bệnh',
    }, {
        logo: 'videocam-outline',
        title: 'Tư vấn từ xa',
    }, {
        logo: 'fitness-outline',
        title: 'Đơn thuốc',
    },
    {
        logo: 'book-outline',
        title: 'Cẩm nang y khoa',
    },]
    return (
        <View style={{ paddingHorizontal: 10 }}>
            <Card style={{ backgroundColor: '#fff', padding: 12 }}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 22 }}>
                    {categoryData.map((item, index) => (
                        <View key={index} style={{ width: '20%' }}>
                            <CategoryItem CategoryItemData={item}  />
                        </View>
                    ))}
                </View>
            </Card>
        </View>
    )
}

export default Category

const styles = StyleSheet.create({})