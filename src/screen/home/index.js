import React, { useRef } from 'react';
import {
    Animated,
    Text,
    View,
    StyleSheet,
    Image,
    Button,
    Easing,
    SafeAreaView,
    FlatList,
    Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/user.slice';


const { width, height } = Dimensions.get('window');

const App = () => {
    const dispatch = useDispatch();
    const { loading, dataUser } = useSelector((state) => state.user);


    React.useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {loading ? <Text>Loading...</Text> :
                <FlatList
                    data={dataUser}
                    loading
                    // ListEmptyComponent={() => <Text>Have no item</Text>}
                    renderItem={({ item, index }) => {
                        return (
                            <Animatable.View
                                animation="fadeInRight"
                                easing="ease-in-back"
                                delay={500 * index} style={stylesItem.card}>
                                <Animatable.Image delay={800 * (index + 1)} animation="flipInY" src={item.avatar} style={stylesItem.avatar} />
                                <Animatable.View delay={800 * (index)} animation="zoomIn" style={{ flex: 1, marginLeft: 20 }}>
                                    <Text style={stylesItem.text}>{item.email}</Text>
                                    <Text style={stylesItem.text}>{item.first_name} {item.last_name}</Text>
                                </Animatable.View>

                            </Animatable.View>
                        )
                    }}
                />}
        </SafeAreaView>
    );
};

const stylesItem = StyleSheet.create({
    card: {
        // width: '100',
        height: 100,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 15,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20,

        backgroundColor: 'powderblue',
        // justifyContent: 'center',
    },
    text: {},
    avatar: {
        height: 70,
        width: 70,
        borderRadius: 70,
    }
})

const types = [


    { title: 'Bounce', easing: Easing.bounce },
    { title: 'Ease', easing: Easing.ease },
    { title: 'Elastic', easing: Easing.elastic(4) },

    { title: 'Linear', easing: Easing.linear },
    { title: 'Quad', easing: Easing.quad },
    { title: 'Cubic', easing: Easing.cubic },

    {
        title: 'Bezier',
        easing: Easing.bezier(0, 2, 1, -1),
    },
    { title: 'Circle', easing: Easing.circle },
    { title: 'Sin', easing: Easing.sin },
    { title: 'Exp', easing: Easing.exp },

    {
        title: 'In + Bounce',
        easing: Easing.in(Easing.bounce),
    },
    {
        title: 'Out + Exp',
        easing: Easing.out(Easing.exp),
    },
    {
        title: 'InOut + Elastic',
        easing: Easing.inOut(Easing.elastic(1)),
    },
]




















const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: 'powderblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fadingText: {
        fontSize: 28,
    },
    buttonRow: {
        flexBasis: 100,
        justifyContent: 'space-evenly',
        marginVertical: 16,
    },
});

export default App;