import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator, Modal, Portal } from 'react-native-paper'

const Loading = () => {
    return (
       
                
                <View style={{ gap: 8, backgroundColor: "white", width: '50%', padding: 30 }}>
                    <ActivityIndicator animating={true} size="large" color="#0000ff" />
                    <Text>Vui lòng chờ...</Text>
                </View>

        


    )
}

export default Loading

const styles = StyleSheet.create({})