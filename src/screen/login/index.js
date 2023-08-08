import React, { useState, useRef, useContext } from 'react';
import {
  View, // div
  Text, // span
  StyleSheet, // chứa css styles
  TextInput, // input
  Image,
  //  click event <=> press event
  Touchable,
  TouchableOpacity,
  Button,
  Pressable,
  // scroll or render list
  ScrollView,
  FlatList,
  //
  SafeAreaView,
  StatusBar,
  //
  Platform,
  //
  Dimensions,
  Alert,
  //
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';


import InputScrollView from 'react-native-input-scroll-view';

import axios from 'axios';

const { height, width } = Dimensions.get('window');

import LinearGradient from 'react-native-linear-gradient';
import { AppState } from '../../../App';

function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);


  const { dispatch, state } = useContext(AppState);
  console.log('state_login_page', state);

  const _handleLogin = async () => {
    console.log('dddd');
    try {
      // http code dau 2xx
      // const payload = {
      //   // name: username,
      //   // password: password,
      //   password: "Admin@123",
      //   username: "admin",
      // };
      // console.log('payload', payload);

      // const { data } = await axios.post('https://india.rosoee.com:3201/v1/user/login', payload);
      // console.log('data', data);


      const payload = {
        name: username,
        password: password,
      };
      console.log('payload', payload);

      const { data } = await axios.post('http://localhost:3000/login', payload);
      console.log('data', data);

      // Alert.alert(data.message);
      AsyncStorage.setItem('token', data.token);
      AsyncStorage.setItem('user', JSON.stringify(data.user));
      // navigate.navigate('Home');

      dispatch({
        type: 'login_success',
        user: data.user,
        // user: payload,
      })
    } catch (err) {
      // rest
      Alert.alert("login error");
      console.log('asdfasdf', err);
    }
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={['#642B73', '#3b5998', '#C6426E']}
      style={styles.linearGradient}>
      <InputScrollView>
        <View style={styles.wrap}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.headerText}>Welcome back</Text>
            <Text style={styles.subHeader}>Login to continue</Text>
          </View>
          <View style={styles.wrapInput}>
            <Icon name="user" size={20} />
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={e => {
                console.log(e);
                setUsername(e);
              }}
            />
          </View>

          <View style={styles.wrapInput}>
            <MaterialIcons name="password" size={20} />
            <TextInput
              style={styles.input}
              secureTextEntry={secureTextEntry}
              placeholder="Password"
              value={password}
              onChangeText={e => setPassword(e)}
            />

            <TouchableOpacity onPress={() => setSecureTextEntry(state => !state)}>{
              !secureTextEntry ?
                <Entypo name="eye" size={20} /> :
                <Entypo name="eye-with-line" size={20} />
            }
            </TouchableOpacity>
          </View>
          <BtnLiner text="Login" onPress={() => _handleLogin()} />
          <TouchableOpacity
            onPress={() => {
              // navigate.navigate('Register');
            }}
            style={styles.register}>
            <Text style={styles.registerText}>Create account</Text>
          </TouchableOpacity>
        </View>
      </InputScrollView>
    </LinearGradient>
  );
}

const BtnLiner = ({ text = '', onPress }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={['#f12711', '#f5af19']}
      style={stylesBtn.btn}>
      <TouchableOpacity onPress={onPress} style={stylesBtn.loginBtn}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const shawDowStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,

  elevation: 6,
};

const stylesBtn = StyleSheet.create({
  btn: {
    marginTop: 30,
    borderRadius: 10,
    ...shawDowStyle,
  },
  loginBtn: {
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
});

// Later on in your styles..
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  scrollView: {
    flex: 1,
    // alignItems: 'center', justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  wrap: {
    // width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    // marginTop: 400,
  },
  input: {
    // width: '100%',
    flex: 1,
    padding: 10,
    marginTop: 8,
  },
  wrapInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fefefe',
    paddingHorizontal: 10,
    alignItems: 'center', flexDirection: 'row',
    ...shawDowStyle,
  },
  register: {
    marginTop: 20,
  },
  registerText: {
    color: '#fff',
  },
  headerText: {
    fontSize: 25,
    marginBottom: 15,
    color: '#fff',
  },
  subHeader: {
    fontSize: 14,
    marginBottom: 15,
    color: '#fff',
  },
});

export default App;

// state
// props

const Count = () => {
  const [
    count, // state value
    setCount, // setter function
  ] = useState(0); // default value = 0

  return (
    <View style={countStyles.container}>
      <View style={{ flex: 1, backgroundColor: 'red', flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'pink' }}>
        </View><View style={{ flex: 1, backgroundColor: '#0947' }}>
        </View><View style={{ flex: 1, backgroundColor: '#958' }}>
        </View>
      </View>
      <View style={{
        flex: 2,
        backgroundColor: 'blue',
        justifyContent: 'center', // truc chinh (chieu doc)
        // flex-start (default) flex-end center space-between space-around space-evenly
        alignItems: 'center', // truc chinh (chieu doc)
        // flex-start flex-end center baseline stretch (default)
      }}>
        <Text style={countStyles.textStyle}>Count: {count}</Text>
        <Text style={countStyles.textStyle}>Count: {count}</Text>
        <Text style={countStyles.textStyle}>Count: {count}</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: 'green' }}></View>

    </View>
  );
};

const RenderText = ({ initCount, children }) => {
  const [
    count, // state value
    setCount, // setter function
  ] = useState(initCount); // default value = 0
  // let data = 23;

  React.useEffect( // effect (props and state)
    () => {
      // logic
      console.log('useEffect');
      // setCount(initCount);
    },
    // 
    [] // react lifecycle 
  );
  // btvn 
  // React.useMemo() 
  // React.useCallback() 
  // React.memo() 


  return (
    <>
      <Text style={countStyles.textStyle}>Count: {count}</Text>
      {children}
      <Button title="Increment inner RenderText" onPress={() => setCount(state => state + 1)} />
    </>
  )
};

const countStyles = StyleSheet.create({
  container: { flex: 1 },
  textStyle: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
});

// export default React.memo(Count);


// state props 
// useEffect
// btvn 

  // React.useMemo()
  // React.useCallback()
  // React.memo()

  // styles flex
  // css