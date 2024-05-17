import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../../assets/styles/GlobalStyles'
import { Avatar, TouchableRipple } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { EvilIcons, AntDesign, Ionicons, FontAwesome5 } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 4, backgroundColor: "#fff", marginBottom: 10 }}>
        <View style={{ flex: 1 }}>
          <ImageBackground source={require('../../assets/images/background-base-3.jpg')} resizeMode='cover' style={{ height: '100%', overflow: 'hidden' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 70, paddingBottom: 40, gap: 20, flex: 1 }}>
              <Avatar.Image size={94} source={require('../../assets/images/avatar-image.png')} />
              <Text style={{ color: "#fff", fontWeight: 600, fontSize: 18 }}>Đinh Văn Tấn Dũng</Text>
            </View>
          </ImageBackground>
        </View>
        <View>
          <Text style={styles.titleSection} >Cài đặt</Text>
          <TouchableRipple
            style={{ paddingVertical: 12, paddingHorizontal: 10 }}
            onPress={() => ('')}
            rippleColor="rgba(0, 0, 0, .3)"
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <View style={{ width: 32, height: 32, padding: 2, backgroundColor: '#aeeae8', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesome5 name="user-cog" size={18} color="#258d8b" />
                </View>
                <Text style={styles.textTab}>Thay đổi thông tin tài khoản</Text>
              </View>
              <EvilIcons name="chevron-right" size={32} color="black" />
            </View>
          </TouchableRipple>
          <TouchableRipple
            style={{ paddingVertical: 12, paddingHorizontal: 10 }}
            onPress={() => ('')}
            rippleColor="rgba(0, 0, 0, .3)"
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <View style={{ width: 32, height: 32, padding: 2, backgroundColor: '#aeeae8', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
                  <EvilIcons name="lock" size={28} color="#258d8b" />
                </View>
                <Text style={styles.textTab}>Đổi mật khẩu</Text>
              </View>
              <EvilIcons name="chevron-right" size={32} color="black" />
            </View>
          </TouchableRipple>
          <TouchableRipple
            style={{ paddingVertical: 12, paddingHorizontal: 10 }}
            onPress={() => ('')}
            rippleColor="rgba(0, 0, 0, .3)"
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <View style={{ width: 32, height: 32, padding: 2, backgroundColor: '#aeeae8', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
                  <AntDesign name="earth" size={18} color="#258d8b" />
                </View>
                <Text style={styles.textTab}>Ngôn ngữ</Text>
              </View>
              <EvilIcons name="chevron-right" size={32} color="black" />
            </View>
          </TouchableRipple>

        </View>
      </View>
      <View style={{...globalStyles.bgWhite, marginBottom: 10 }}>
        <Text style={styles.titleSection} >Điều khoản & quy định</Text>
        <TouchableRipple
          style={{ paddingVertical: 12, paddingHorizontal: 10 }}
          onPress={() => ('')}
          rippleColor="rgba(0, 0, 0, .3)"
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
              <View style={{ width: 32, height: 32, padding: 2, backgroundColor: '#aeeae8', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
              <AntDesign name="book" size={24} color="#258d8b" />
              </View>
              <Text style={styles.textTab}>Quy định sử dụng</Text>
            </View>
            <EvilIcons name="chevron-right" size={32} color="black" />
          </View>
        </TouchableRipple>
        <TouchableRipple
          style={{ paddingVertical: 12, paddingHorizontal: 10 }}
          onPress={() => ('')}
          rippleColor="rgba(0, 0, 0, .3)"
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
              <View style={{ width: 32, height: 32, padding: 2, backgroundColor: '#aeeae8', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
              <Ionicons name="warning" size={24}  color="#258d8b" />
              </View>
              <Text style={styles.textTab}>Chính sách giải quyết khiếu nại, tranh chấp</Text>
            </View>
            <EvilIcons name="chevron-right" size={32} color="black" />
          </View>
        </TouchableRipple>
        <TouchableRipple
        style={{ paddingVertical: 12, paddingHorizontal: 10 }}
        onPress={() => ('')}
        rippleColor="rgba(0, 0, 0, .3)"
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <View style={{ width: 32, height: 32, padding: 2, backgroundColor: '#aeeae8', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
            <AntDesign name="Safety" size={24}  color="#258d8b" />
            </View>
            <Text style={styles.textTab}>Chính sách quyền riêng tư</Text>
          </View>
          <EvilIcons name="chevron-right" size={32} color="black" />
        </View>
      </TouchableRipple>
      </View>
      <View style={{...globalStyles.bgWhite, marginBottom: 10 }}>
     
      <TouchableRipple
        style={{ paddingVertical: 12, paddingHorizontal: 10 }}
        onPress={() => ('')}
        rippleColor="rgba(0, 0, 0, .3)"
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <View style={{ width: 32, height: 32, padding: 2, backgroundColor: '#eaaeb0', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Ionicons name="log-out-outline" size={24} color="#cf494e" />
            </View>
            <Text style={styles.textTab}>Đăng xuất</Text>
          </View>
        </View>
      </TouchableRipple>
      
     
    </View>
     
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({

  titleSection: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  textTab: {
    fontSize: 14,

  }
})