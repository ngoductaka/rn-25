import React, { useState, useRef } from 'react';
// import { Icon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';



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
  Switch,
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

import InputScrollView from 'react-native-input-scroll-view';

import axios from 'axios';

const { height, width } = Dimensions.get('window');

import LinearGradient from 'react-native-linear-gradient';

function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const _handleLogin = async () => {
    console.log('dddd');
    try {
      // http code dau 2xx
      const payload = {
        name: username,
        password: password,
      };
      console.log('payload', payload);
      const { data } = await axios.post('http://localhost:3000/login', payload);
      Alert.alert(data.message);
      // AsyncStorage.setItem('token', data.token);
      // AsyncStorage.setItem('user', JSON.stringify(data.user));
      // navigate.navigate('Home');
    } catch (err) {
      // rest
      console.log('asdfasdf', err);
    }
  };
  const [isEnabled, toggleSwitch] = useState(true)

  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={['#642B73', '#3b5998', '#C6426E']}
      style={styles.linearGradient}
    >
      <ScrollView>
        <View style={styles.wrap}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.headerText}>Welcome back</Text>
            <Text style={styles.subHeader}>Login to continue</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={e => {
              console.log(e);
              setUsername(e);
            }}
          />

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            value={password}
            onChangeText={e => setPassword(e)}
          />
          <View style={{
            flexDirection: 'row', alignItems: 'center',
            alignSelf: 'stretch', marginTop: 10,
          }}>
            <Text style={{ color: '#fff', fontSize: 15, marginRight: 15 }}>Is Admin user</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
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
      </ScrollView>
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
    // width: height,
    // marginTop: 400,
  },
  input: {
    borderColor: 'gray',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 8,
    backgroundColor: '#fefefe',
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

// export default App;

// state
// props

const Count = () => {
  const [
    count, // state value
    setCount, // setter function
  ] = useState(0); // default value = 0

  return (
    <View style={{ flex: 1, backgroundColor: '#2B02C4' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontWeight: '600', fontSize: 28 }} >Login</Text>
      </View>
      <View style={{ flex: 5, backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={{
            width: 100, height: 60, backgroundColor: '#ddd',
            justifyContent: 'center', alignItems: 'center',
            borderRadius: 25,
            marginRight: 15,
          }} onPress={() => { }}>
            <Text style={{ color: '#111', fontWeight: '600', fontSize: 28 }} >G</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            width: 100, height: 60, backgroundColor: '#ddd',
            justifyContent: 'center', alignItems: 'center',
            borderRadius: 25,
            marginLeft: 15,
          }} onPress={() => { }}>
            <Text style={{ color: '#111', fontWeight: '600', fontSize: 28 }} >F</Text>
          </TouchableOpacity>
          {/* <Icon name="rocket" size={30} color="#4F8EF7" /> */}

        </View>
        <View style={{ flex: 3, justifyContent: 'center', paddingHorizontal: 20 }}>
          <Input label='UserName' />
          <Input label='Password' layoutStyle={{ marginTop: 20 }} secureTextEntry />
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={{
            backgroundColor: '#4F8EF7',
            justifyContent: 'center', alignItems: 'center',
            borderRadius: 25,
            paddingVertical: 15, marginHorizontal: 60,
            shadowColor: "#000",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,

            elevation: 14,


          }}>
            <Text style={{ color: '#fff', fontWeight: '600', fontSize: 20 }}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 15 }}>
          <Text style={{ color: '#000', fontWeight: '600', fontSize: 14 }}> Copyright DND@</Text>
        </View>
      </View>
    </View>
  );
};


const Input = ({ label = 'Username', placeholder = '', layoutStyle = {}, secureTextEntry = false }) => {
  return (
    <View style={{ paddingHorizontal: 10, ...layoutStyle }}>
      <Text style={{}}>{label}</Text>
      <View style={{ borderBottomColor: '#aaa', borderBottomWidth: 1 }}>
        {/* icon */}
        <TextInput secureTextEntry={secureTextEntry} style={{ paddingHorizontal: 8, paddingVertical: 5 }} placeholder={placeholder} />
      </View>
    </View>
  )
}

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

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];


const ListView = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(DATA);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {

      setRefreshing(false);
      setData([...DATA, {
        id: '58694a0f-3da1-471f-fdfd-145571e29d72',
        title: 'Fourth Item',
      }]);
    }, 3 * 1000);
  }


  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[2]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0],
  );

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#222' }}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />


<Text style={styles.textStyle}>
        StatusBar Visibility:{'\n'}
        {hidden ? 'Hidden' : 'Visible'}
      </Text>
      <Text style={styles.textStyle}>
        StatusBar Style:{'\n'}
        {statusBarStyle}
      </Text>
      {Platform.OS === 'ios' ? (
        <Text style={styles.textStyle}>
          StatusBar Transition:{'\n'}
          {statusBarTransition}
        </Text>
      ) : null}
      <View style={styles.buttonsContainer}>
        <Button title="Toggle StatusBar" onPress={changeStatusBarVisibility} />
        <Button title="Change StatusBar Style" onPress={changeStatusBarStyle} />
        {Platform.OS === 'ios' ? (
          <Button
            title="Change StatusBar Transition"
            onPress={changeStatusBarTransition}
          />
        ) : null}
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        refreshing={refreshing}
        onRefresh={onRefresh}
        // numColumns={2}
        ListEmptyComponent={() => <View><Text>No data to render</Text></View>}
        ListFooterComponent={() => <View><Text>{refreshing ? 'Loading...' : null}</Text></View>}
        ListHeaderComponent={() => <View><TextInput style={{ borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, fontSize: 20 }} /></View>}
      // extraData={}
      />
    </SafeAreaView>
  )
}

export default React.memo(ListView);