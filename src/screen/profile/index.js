import React, { useState, useRef, useContext, useEffect } from 'react';
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
  Switch,
  //
  Animated,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

import DatePicker from 'react-native-date-picker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputScrollView from 'react-native-input-scroll-view';

import axios from 'axios';

const { height, width } = Dimensions.get('window');

import LinearGradient from 'react-native-linear-gradient';
import { AppState } from '../../../App';
const imgSize = width / 3
function App() {
  const [username, setUsername] = React.useState(''); // input 
  const [date, setDate] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)

  const [sex, setSex] = React.useState(''); // input select
  const [active, setActive] = React.useState(true); // input switch
  const [age, setAge] = React.useState(true); // input number

  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000 * 5,
    }).start();

  }, [])



  const { dispatch, state } = useContext(AppState);

  const _handleLogin = async () => {
    console.log('dddd', {
      username,
      date,
      sex,
      active,
      age,
    });
    try {
      // http code dau 2xx
      // const payload = {
      //   // name: username,
      //   // password: password,
      //   password: "Admin@123",
      //   username: "admin",
      // };
      // console.log('payload', payload);

      const payload = {
        name: username,
      };
      const token = await AsyncStorage.getItem('token');
      console.log('token', token, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGM5MDRlMjZlYjNhMGY0ODQ5MjE0NGQiLCJuYW1lIjoiZG5kIiwiaWF0IjoxNjkxNTAzNDc2LCJleHAiOjE2OTE1MDcwNzZ9.fz8fstULpc7orxW5X_jHNDgZD1kM3ODHOZ2SY9XkGqo");
      const { data } = await axios.patch('http://localhost:3000/user', payload, {
        headers: {
          "Authorization": "Bearer " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGM5MDRlMjZlYjNhMGY0ODQ5MjE0NGQiLCJuYW1lIjoiZG5kIiwiaWF0IjoxNjkxNTAzNDc2LCJleHAiOjE2OTE1MDcwNzZ9.fz8fstULpc7orxW5X_jHNDgZD1kM3ODHOZ2SY9XkGqo',
        },
      });
      console.log('data', data);


      console.log('payload', payload);

      // const { data } = await axios.post('http://192.168.0.107:3000/login', payload);
      // console.log('data', data);

      // Alert.alert(data.message);
      // AsyncStorage.setItem('token', data.token);
      // AsyncStorage.setItem('user', JSON.stringify(data.user));
      // navigate.navigate('Home');
      dispatch({
        type: 'login_success',
        // user: data.user,
        user: payload,
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

          <Animated.View style={{
            position: 'absolute',
            top: width,
            right: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-width, -width / 2],
            }),
            top: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-width, -width / 2.5],
            }),

            height: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, width],
            }),

            width: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, width],
            }),

            borderRadius: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, width],
            }),
            backgroundColor: 'red'
          }} />


          <Animated.View style={{
            position: 'absolute',

            // top: -width / 2,
            // right: -width / 3,
            // height: width, width, borderRadius: width,



            right: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-width, -width / 3],
            }),
            top: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-width, -width / 2],
            }),

            height: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, width],
            }),

            width: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, width],
            }),

            borderRadius: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, width],
            }),


            backgroundColor: 'green'
          }} />

          <Animated.View style={{
            position: 'absolute',
            // top: -width / 1.5,
            // left: 0,
            // height: width, width, borderRadius: width,



            left: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-width, 0],
            }),
            top: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-width, -width / 1.5],
            }),

            height: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, width],
            }),

            width: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, width],
            }),

            borderRadius: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, width],
            }),
            
            backgroundColor: '#fff'
          }} />

          <View style={{
            flex: 1,
            marginTop: width / 1.7,
            marginHorizontal: 20,
            marginBottom: 50,
            backgroundColor: 'white',
            borderRadius: 10,
            position: 'relative',
            ...shawDowStyle

          }}>
            <View style={{
              position: 'absolute',
              top: -imgSize / 2,
              left: 0,

              width: imgSize, height: imgSize, borderRadius: imgSize, backgroundColor: 'pink',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',

            }}>
              <View style={{
                width: imgSize - 10, height: imgSize - 10, borderRadius: imgSize - 10, backgroundColor: '#fff',
                ...shawDowStyle
              }}>
                <Image
                  resizeMode='cover'
                  style={{
                    height: undefined,
                    width: undefined,
                    flex: 1,
                    borderRadius: imgSize - 10,
                  }}
                  source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80' }} />
              </View>
            </View>


            <View style={{ alignItems: 'center', marginTop: width / 4 + 10, paddingHorizontal: 20 }}>
              <View style={styles.wrapInput}>
                <Icon name="user" size={20} />
                <TextInput
                  // numberOfLines={2}
                  // multiline = {true}
                  style={{ ...styles.input }}
                  placeholder="Username"
                  value={username}
                  onChangeText={e => {
                    setUsername(e);
                  }}
                />
              </View>

              {/* <Button title="Open" onPress={() => setOpen(true)} /> */}
              <TouchableOpacity style={{ ...styles.wrapInput, width: '100%', paddingVertical: 10, marginTop: 10 }} onPress={() => setOpen(true)}>
                <AntDesign name="calendar" size={20} style={{ marginRight: 10 }} />
                <Text style={styles.loginText}>{moment(date).format("DD/MM/YYYY")}</Text>
              </TouchableOpacity>
              <View style={{ ...styles.wrapInput, width: '100%', marginTop: 10 }} ˇ>
                <FontAwesome name="transgender" size={20} style={{ marginRight: 10 }} />
                <SelectDropdown
                  buttonStyle={{ backgroundColor: '#fff' }}
                  dropdownIconPosition="right"
                  defaultButtonText="Select gender"
                  data={["Male", "Female", "Other"]}
                  onSelect={(selectedItem, index) => {
                    setSex(selectedItem)
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                  }}
                />
              </View>
              <View style={{ ...styles.wrapInput, marginTop: 10 }}>
                <FontAwesome5 name="user-clock" size={20} />
                <TextInput
                  style={styles.input}
                  keyboardType='number-pad'
                  placeholder="Age"
                  value={age}
                  onChangeText={e => {
                    console.log(e);
                    setAge(e);
                  }}
                />
              </View>
              <View style={{ width: '100%', marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ ...styles.loginText, marginRight: 10 }}>Is Active:</Text>
                <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={active ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={setActive}
                  value={active}
                />
              </View>
            </View>
            <BtnLiner text="Submit" onPress={() => _handleLogin()} />
          </View>
        </View>
      </InputScrollView>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </LinearGradient>
  );
}

const BtnLiner = ({ text = '', onPress }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={['#f12711', '#f5af19']}
      style={{ ...stylesBtn.btn, position: 'absolute', bottom: -20, left: '30%' }}>
      <TouchableOpacity onPress={onPress} style={stylesBtn.loginBtn}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const shawDowStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,

  elevation: 24,

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
    // paddingLeft: 15,
    // paddingRight: 15,
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
    // alignItems: 'center',
    // justifyContent: 'center',
    height: height,
    position: 'relative',
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
  },
  shawDowStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
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
    color: '#000',
  },
  subHeader: {
    fontSize: 14,
    marginBottom: 15,
    color: '#000',
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