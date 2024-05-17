
import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './components/home/Home';
import LoginPage from './screens/auth/LoginPage';
import RegisterPage from './screens/auth/RegisterPage';
import { useReducer } from 'react';
import UserReducer from './reducer/UserReducer';
import UserContext from './context/UserContext';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppointmentScreen from './screens/appoinments/AppointmentScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import AppointmentBookedScreen from './screens/appoinments/AppointmentBookedScreen';
import { IconButton } from 'react-native-paper';



const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabScreen = ({navigation}) => {
  const [user, dispatch] = useReducer(UserReducer, null);
  return (
    <UserContext.Provider value={[user, dispatch]}>
      <BottomTab.Navigator screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}>
        <BottomTab.Screen name="Home" component={HomeScreen} options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size}></Ionicons>
          ),
          tabBarActiveTintColor: '#20b2aa'
        }} />
        <BottomTab.Screen name="Hồ sơ" component={HomeScreen} options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <Ionicons name="folder-open" color={color} size={size}></Ionicons>
          ),
          tabBarActiveTintColor: '#20b2aa'
        }} />
        <BottomTab.Screen name="Đặt lịch" component={AppointmentBookedScreen} options={{
          title: 'Đặt lịch hẹn',
          headerShown: true, tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size}></Ionicons>
          ),
          headerTitleAlign: 'center',
          tabBarActiveTintColor: '#20b2aa',
          headerLeft: () => (<IconButton icon={'close'} rippleColor={'rgba(0, 0, 0, .3)'} onPress={() => navigation.navigate('Home')}></IconButton>)
        }} />

        <BottomTab.Screen name="Thông báo" component={HomeScreen} options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" color={color} size={size}></Ionicons>
          ),
          tabBarActiveTintColor: '#20b2aa'
        }} />

        <BottomTab.Screen name="Tài khoản" component={ProfileScreen} options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size}></Ionicons>
          ),
          tabBarActiveTintColor: '#20b2aa'
        }} />
        {user && <>
          <BottomTab.Screen name={user.username} component={HomeScreen} />
        </>}
      </BottomTab.Navigator>
    </UserContext.Provider>
  )
};


export default function App() {
  const [user, dispatch] = useReducer(UserReducer, null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={require('./assets/images/background-base-2.jpg')} resizeMode='cover' style={{ height: '100%' }}>
        <UserContext.Provider value={[user, dispatch]}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
              <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }} />
              <Stack.Screen name="HomePage" component={BottomTabScreen} options={{ headerShown: false }} />
              <Stack.Screen name="PasswordChange" component={HomeScreen}/>
            </Stack.Navigator>
          </NavigationContainer>
        </UserContext.Provider>
      </ImageBackground>
    </SafeAreaView>
  );
}

