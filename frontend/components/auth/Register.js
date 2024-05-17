import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, HelperText, TextInput } from 'react-native-paper'
import globalStyles from '../../assets/styles/GlobalStyles'
import { TouchableOpacity } from 'react-native'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { message } from '../../constants/messages'
import * as ImagePicker from 'expo-image-picker';
import Api, { endpoints } from '../../configs/Api'
// import { red200 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'

const Register = ({ navigation }) => {
  const [registerInfoState, setRegisterInfoState] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
    passwordConfirm: "",
    avatar: "",
  })
  const [errorValidation, setErrorValidation] = useState({});
  const onChangeInput = (field, value) => {
    setRegisterInfo(prevState => ({
      ...prevState,
      [field]: value
    })

    )
  }

  const pickImage = async () => {
    let { status } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert("Permissions denied!");
    } else {
      const result =
        await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled)
        setRegisterInfoState(prev => ({ ...prev, avatar: result.assets[0] }))
    }
  }

  const registerSchema = Yup.object().shape({
    first_name: Yup.string().required(message.required('Tên')),
    last_name: Yup.string().required(message.required('Họ và Tên đệm')),
    username: Yup.string().required(message.required('Tên đăng nhập')),
    password: Yup.string().required(message.required('Mật khẩu')).min(8, message.min(8, 'Mật khẩu')),
    email: Yup.string().email(message.invalid('Email')).required(message.required('Email')),
    phone: Yup.string().required(message.required('Số điện thoại'))
      .matches(/^[0-9]+$/, 'Số điện thoại phải là số').min(10, message.min(10, 'Số điện thoại')).max(10, message.max(10, "Số điện thoại")),
    passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], message.wrong("Mật khẩu xác nhận"))
  });

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      username: '',
      password: '',
      email: '',
      phone: '',
      passwordConfirm: '',
    },
    validationSchema: registerSchema,
    onSubmit: values => handleRegister(values)
  });

  const handleRegister = async (registerInfo) => {
    let data = new FormData()
    data.append('first_name', registerInfo.first_name)
    data.append('last_name', registerInfo.last_name)
    // data.append('email', registerInfo.email)
    data.append('username', registerInfo.username)
    data.append('password', registerInfo.password)
    // data.append('confirmPassword', registerInfo.passwordConfirm)
    data.append('avatar', registerInfoState.avatar)

    try {
      const res = await Api.post(endpoints['users'], data, {
        headers: {
          "Content-Type": 'multipart/form-data'
        }
      })
      if (res.status === 201)
        nav("/login")
    } catch (error) {
      console.error(error)
    }
  }
  const register = async (event) => {
    event.preventDefault()

    

   

  }



  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>

        <Text style={globalStyles.heading}>Đăng ký</Text>
      </View>
      <View style={{ flex: 5 }}>

        <View style={{ marginBottom: 10 }}>
          <TextInput activeOutlineColor="#1e90ff"
            value={values.first_name}
            onChangeText={handleChange('first_name')}
            style={styles.input}
            placeholder='Nhập tên...'
            mode='outlined'
            label={'First Name'}
            error={errors.first_name ? true : false}
          ></TextInput>
          {errors.first_name && <HelperText type="error" visible={errors.first_name ? true : false}>
            {errors.first_name}
          </HelperText>
          }
        </View>

        <View style={{ marginBottom: 10 }}>
          <TextInput activeOutlineColor="#1e90ff"
            value={values.last_name}
            onChangeText={handleChange('last_name')}
            style={styles.input}
            placeholder='Nhập họ và tên đệm...'
            mode='outlined'
            label={'Last Name'}
            error={errors.last_name ? true : false}
          ></TextInput>
          {errors.last_name && <HelperText type="error" visible={errors.last_name ? true : false}>
            {errors.last_name}
          </HelperText>
          }
        </View>
        <View style={{ marginBottom: 10 }}>
          <TextInput activeOutlineColor="#1e90ff"
            value={values.username}
            onChangeText={handleChange('username')}
            style={styles.input}
            placeholder='Nhập tên đăng nhập...'
            mode='outlined'
            label={'Username'}
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
            label={'Password'}
            error={errors.password ? true : false}
            secureTextEntry>
          </TextInput>
          {errors.password && <HelperText type="error" visible={errors.password ? true : false}>
            {errors.password}
          </HelperText>}
        </View>

        <View style={{ marginBottom: 10 }}>

          <TextInput activeOutlineColor="#1e90ff"
            value={values.passwordConfirm}
            onChangeText={handleChange('passwordConfirm')}
            style={styles.input}
            placeholder='Nhập lại mật khẩu...'
            mode='outlined'
            label={'Mật khẩu xác nhận'}
            error={errors.passwordConfirm ? true : false}
            secureTextEntry>
          </TextInput>
          {errors.passwordConfirm && <HelperText type="error" visible={errors.passwordConfirm ? true : false}>
            {errors.passwordConfirm}
          </HelperText>}
        </View>

        <View style={{ marginBottom: 10 }}>

          <TextInput activeOutlineColor="#1e90ff"
            value={values.email}
            onChangeText={handleChange('email')}
            style={styles.input}
            placeholder='Nhập email...'
            mode='outlined'
            label={'Email'}
            error={errors.email ? true : false}
          >
          </TextInput>
          {errors.email && <HelperText type="error" visible={errors.email ? true : false}>
            {errors.email}
          </HelperText>}
        </View>

        <View style={{ marginBottom: 10 }}>

          <TextInput activeOutlineColor="#1e90ff"
            value={values.phone}
            onChangeText={handleChange('phone')}
            style={styles.input}
            placeholder='Nhập số điện thoại...'
            mode='outlined'
            label={'Số điện thoại'}
            error={errors.phone ? true : false}
          >
          </TextInput>
          {errors.phone && <HelperText type="error" visible={errors.phone ? true : false}>
            {errors.phone}
          </HelperText>}
        </View>


        {registerInfoState?.avatar ? <View style={{ alignItems: 'center' }}><Image source={{ uri: registerInfoState?.avatar.uri }}
          style={{ width: 100, height: 100, marginVertical: 20, alignItems: 'center' }} /></View> : ""}
        <View style={{ marginBottom: 10 }}>
          <TouchableOpacity onPress={pickImage} style={{ ...styles.button, backgroundColor: '#800080' }}>
            {registerInfoState?.avatar && <Text style={{ color: "#fff" }}> Chọn ảnh khác </Text>}
            {!registerInfoState?.avatar && <Text style={{ color: "#fff" }}> Chọn ảnh... </Text>}
          </TouchableOpacity>
        </View>


        <TouchableOpacity onPress={handleSubmit} style={styles.button} mode='contained'>
          <Text style={{ color: '#fff', fontSize: 16 }}>Đăng ký</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 10, alignItems: 'flex-end' }}>
          <Text>Bạn đã có tài khoản?  <Text style={{ color: 'red', textDecorationLine: 'underline' }} onPress={() => navigation.navigate('Login')}>Đăng nhập</Text></Text>
        </View>
      </View>

    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  input: {

  },
  button: {
    fontSize: 28,
    width: '100%',
    textAlign: 'center',
    backgroundColor: "#87cefa",
    color: 'white',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 24
  }

})