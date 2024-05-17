import { View, Text, StyleSheet, Keyboard } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Button, HelperText, Icon, MD3Colors, Modal, Portal, Snackbar, TextInput } from 'react-native-paper'
import globalStyles from '../../assets/styles/GlobalStyles'
import { TouchableOpacity } from 'react-native'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import Loading from '../common/Loading'
import Api, { authAxios, endpoints } from '../../configs/Api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import UserContext from '../../context/UserContext'
// import { red200 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'

const Login = ({ navigation }) => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  })
  const [visible, setVisible] = useState({
    modal: false,
    snackBar: false,
  });

  const [contentSnackBar, setContentSnackBar] = useState("");
  const [errorValidation, setErrorValidation] = useState({});
  const [loading, setLoading] = useState(false);
  const [user, dispatch] = useContext(UserContext);
  const onDismissSnackBar = () => setVisible({ snackBar: false });
  const onChangeInput = (field, value) => {
    setLoginInfo(prevState => ({
      ...prevState,
      [field]: value
    })

    )
  }

  const loginSchema = Yup.object().shape({
    username: Yup.string().required('Tên đăng nhập không được bỏ trống'),
    password: Yup.string().required('Mật khẩu không được bỏ trống').min(8, 'Mật khẩu ít nhất 8 ký tự'),
  });

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: values => handleLogin(values)
  });

  const handleLogin = async (loginInfo) => {
    Keyboard.dismiss()
    setLoading(true);
    showModal();

    const formData = new FormData();

    formData.append('client_id', 'Fib0GXPlOPs6sg9A79sHLEWhqop7hzszTeB3shGl')
    formData.append('client_secret', 'ejpYatBpgz9TLMd1gbyocFFrxHejrlYPeZia7WsojtdC053ciWwD7tKNw2hijwVMvoDqNZHyxkdugnptKyiADYS2ESo4BpxjguMtHbUQGIqZYDQByhruGH0L8MpXK9Qr')
    formData.append('username', loginInfo.username)
    formData.append('password', loginInfo.password)
    formData.append('grant_type', 'password')
    const loginData = {
      client_id: 'Fib0GXPlOPs6sg9A79sHLEWhqop7hzszTeB3shGl',
      client_secret: 'ejpYatBpgz9TLMd1gbyocFFrxHejrlYPeZia7WsojtdC053ciWwD7tKNw2hijwVMvoDqNZHyxkdugnptKyiADYS2ESo4BpxjguMtHbUQGIqZYDQByhruGH0L8MpXK9Qr',
      username: 'dung0212',
      password: 'Dung0212',
      grant_type: 'password',
    }



    try {
      const res = await Api.post(endpoints['login'], formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })

      if (res.status === 200) {
        console.info(res.data)
        await AsyncStorage.setItem("access-token", res.data.access_token)



        const user = await authAxios(res.data.access_token).get(endpoints['current_user'])
     
        dispatch({
          "type": "login",
          "payload": user.data
        })
        navigation.navigate("Home");
      }
    } catch (error) {
      console.info(error);
      setLoading(false);
      hideModal();
    }
    setLoading(false);
    hideModal();
  }

  const showModal = () => setVisible({ modal: true });
  const hideModal = () => setVisible({ modal: false });

  return (
    <Portal.Host>
      <View style={globalStyles.container}>

        <View style={{ flex: 1, justifyContent: 'center' }}>

          <Text style={globalStyles.heading}>Đăng nhập</Text>
        </View>
        <View style={{ flex: 5 }}>
          <View style={{ marginBottom: 10 }}>
            <TextInput activeOutlineColor="#1e90ff"
              value={values.username}
              onChangeText={handleChange('username')}
              style={styles.input}
              placeholder='Nhập tên đăng nhập...'
              mode='outlined'
              label={'Tên đăng nhập'}
              error={errors.username ? true : false}
            >
            </TextInput>
            {errors.username && <HelperText type="error" visible={errors.username ? true : false}>
              {errors.username}
            </HelperText>

            }
          </View>
          <View style={{ marginBottom: 10 }}>

            <TextInput activeOutlineColor="#1e90ff"
              value={values.password}
              onChangeText={handleChange('password')}
              style={styles.input}
              placeholder='Nhập mật khẩu...'
              mode='outlined'
              label={'Mật khẩu'}
              error={errors.password ? true : false}
              secureTextEntry>
            </TextInput>
            {errors.password && <HelperText type="error" visible={errors.password ? true : false}>
              {errors.password}
            </HelperText>}
          </View>

          <TouchableOpacity onPress={handleSubmit} style={styles.button} mode='contained'>
            <Text style={{ color: '#fff', fontSize: 16, textTransform: 'uppercase', fontWeight: 600 }}>Đăng nhập</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 10, alignItems: 'flex-end' }}>
            <Text>Bạn chưa có tài khoản?  <Text style={{ color: '#20b2aa', textDecorationLine: 'underline', fontWeight: 600 }} onPress={() => navigation.navigate('Register')}>Đăng kí ngay</Text></Text>
          </View>
        </View>
        <View>
          <Snackbar
            visible={visible.snackBar}
            onDismiss={onDismissSnackBar}
            duration={2000}
            elevation={5}
            style={{ backgroundColor: 'white' }}
          >
            <View style={{ flexDirection: 'row', alignItems: "center", gap: 12 }}>
              <View >
                <Icon color={MD3Colors.error50} source="alert" size={40}></Icon>
              </View>
              <View style={{ gap: 2 }}>
                <Text style={{ fontSize: 18, fontWeight: 600 }}>{"Cảnh báo!"}</Text>
                <Text style={{ color: '#a9a9a9', fontSize: 16, fontWeight: 600 }}>{contentSnackBar}</Text>
              </View>

            </View>
          </Snackbar>
        </View>



        <Modal visible={visible.modal} style={{ backgroundColor: "none", alignItems: 'center' }} dismissable={false}  >

          <Loading></Loading>

        </Modal>


      </View>
    </Portal.Host>
  )
}

export default Login

const styles = StyleSheet.create({
  input: {

  },
  button: {
    fontSize: 28,
    width: '100%',
    textAlign: 'center',
    backgroundColor: "#20b2aa",
    color: 'white',
    textTransform: 'uppercase',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 8,
  }

})