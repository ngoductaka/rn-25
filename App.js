import React, { useState, useEffect, createContext, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { View, Text, Button } from 'react-native';

import Login from './src/screen/login'
// import Home from './src/screen/home'

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Detail = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Detail screen</Text>
  </View>
)

const HomeStack = () => (
  <Stack.Navigator >
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
  </Stack.Navigator>
)
const InAppRouter = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }
        else if (route.name === 'Order') {
          return focused ? <FontAwesome size={size} color={color} name="shopping-cart" /> : <Feather name="shopping-cart" size={size} color={color} />;
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={HomeStack}
      options={{ headerShown: false }}
    />
    <Tab.Screen name="Settings" component={Settings} />
    <Tab.Screen name="Order" component={Order} options={{ tabBarBadge: 3 }} />
  </Tab.Navigator>
)

const AuthRouter = () => (
  <Stack.Navigator >
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    {/* <Stack.Screen name="Login" component={Login} /> */}
  </Stack.Navigator>
)

const reducer = (state, action) => {
  switch (action.type) {
    case 'check_login': // action 
      return {
        ...state,
        isSignIn: action.isSignIn,
        loading: action.loading,
      }
    case 'login_success': // action 
      return {
        ...state,
        isSignIn: true,
        user: action.user
      }
    case 'logout_user': // action 
      return {
        ...state,
        isSignIn: false,
        user: {}
      }
    default:
      return state;
  }
}
export const AppState = createContext();
export default function App() {
  // state for sign in
  const [state, dispatch] = React.useReducer(reducer, {
    isSignIn: false,
    loading: false,
  });
  const { isSignIn, loading } = state

  useEffect(() => {
    setTimeout(() => {
      // action 
      // if (1) { // check user login 
      //   // case user not logged in
      //   dispatch({
      //     type: 'check_login',
      //     isSignIn: false,
      //     loading: false,
      //   });
      // }
    }, 1000 * 2);
  }, []);

  if (loading) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Loading...</Text>
    </View>
  }
  return (
    <AppState.Provider value={{ state, dispatch }}>
      <NavigationContainer>
        {
          isSignIn ?
            <InAppRouter /> :
            <AuthRouter />
        }
      </NavigationContainer>
    </AppState.Provider>
  );
}


const Home = ({ navigation }) => {
  const { dispatch, state } = useContext(AppState);
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Welcome back ({state?.user?.name})</Text>
    <Button
      title="Logout"
      onPress={() => {
        dispatch({
          type: 'logout_user',
          isSignIn: false,
        })
      }}
    />

  </View>
}
const Settings = ({ navigation }) => {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Detail</Text>
    <Button
      title="Go to Order"
      onPress={() => navigation.navigate('Order')}
    />
  </View>
}
const Order = ({ navigation }) => {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Order</Text>
    <Button
      title="Go back home"
      onPress={() => navigation.popToTop()}
    />
  </View>
}
//

// const authRouter

// 1 router 

// - setup , kiến trúc 1 flow về authen 
// kiến trúc router trong app thông thường

// 2 useReducer context react 
// useReducer cách react quản lý state phức tạp
// context react truyền dữ liệu xuống các component con cháu 
