import React, { useRef } from 'react';
import {
    Animated,
    Text,
    View,
    StyleSheet,
    Button,
    Easing,
    SafeAreaView,
    FlatList,
    Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const App = () => {
    // 1. value : giá trị lưu trữ animation 0 -> 1 -> 0
    // 2. type: loại animation Animated.timing 
    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const pan = useRef(new Animated.ValueXY({ x: 100, y: 0 })).current;

    const opacity = useRef(new Animated.Value(0)).current;
    const animate = easing => {
        opacity.setValue(0);
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1200,
            easing,
            //   useNativeDriver: true,
        }).start();
    };
    // const [fadeAnim, setAni] = React.useState(new Animated.Value(0));
    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        console.log('dnd:');
        Animated.loop(
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 100,
                // useNativeDriver: true,
            })).start();
    };

    const fadeOut = () => {
        console.log('Animation start!', fadeAnim);
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(
            fadeAnim, // value animation
            { // options animation
                toValue: 0,
                duration: 3000,
                // useNativeDriver: true,
            }
        )
            .start(() => {
                console.log('Animation finished!', fadeAnim);
            });
        Animated.timing(
            pan, // Auto-multiplexed
            {
                toValue: { x: 200, y: 0 },
                duration: 3000,
                // useNativeDriver: true 
            }, // Back to zero
        ).start();
    };
    console.log('fadeAnim:', fadeAnim, pan.getLayout());
    return (
        <SafeAreaView style={styles.container}>
            <Animated.View // Text, Image,
                style={[
                    styles.fadingContainer, // style normal
                    {
                        // Bind opacity to animated value
                        // opacity: fadeAnim,
                        // translateY: fadeAnim.interpolate({
                        //     inputRange: [0, 1],
                        //     outputRange: [0, 200],
                        //   })
                        width: 200,
                        height: 200,
                        borderRadius: 200,
                        // borderRadius: fadeAnim.interpolate({
                        //     inputRange: [0, 1],
                        //     outputRange: [0, 200]  // 0 : 150, 0.5 : 75, 1 : 0
                        // }),
                        // backgroundColor: fadeAnim.interpolate({
                        //     inputRange: [0, 1],
                        //     outputRange: ['#0f0', '#f00']  
                        // }),
                        // width: fadeAnim.interpolate({
                        //     inputRange: [0, 1],
                        //     outputRange: [100, 300]  // 0 : 150, 0.5 : 75, 1 : 0
                        // }),
                        // height: fadeAnim.interpolate({
                        //     inputRange: [0, 1],
                        //     outputRange: [100, 300]  // 0 : 150, 0.5 : 75, 1 : 0
                        // }),
                        // borderRadius: fadeAnim.interpolate({
                        //     inputRange: [0, 1],
                        //     outputRange: [100, 300]  // 0 : 150, 0.5 : 75, 1 : 0
                        // }),
                        // transform: [{
                        //     translateX: fadeAnim.interpolate({
                        //         inputRange: [0, 1],
                        //         outputRange: [250, 0]  // 0 : 150, 0.5 : 75, 1 : 0
                        //     }),
                        // }],

                        transform: [
                            // { rotateY: '45deg' },
                            // {
                            //     rotateX: fadeAnim.interpolate({
                            //         inputRange: [0, 1],
                            //         outputRange: ['0deg', '180deg']  // 0 : 150, 0.5 : 75, 1 : 0
                            //     }),
                            // },
                            // {
                            //     rotateY: fadeAnim.interpolate({
                            //         inputRange: [0, 1],
                            //         outputRange: ['0deg', '180deg']  // 0 : 150, 0.5 : 75, 1 : 0
                            //     }),
                            // },
                            // {
                            //     rotateZ: fadeAnim.interpolate({
                            //         inputRange: [0, 1],
                            //         outputRange: ['0deg', '180deg']  // 0 : 150, 0.5 : 75, 1 : 0
                            //     }),
                            // },
                            // {
                            //     translateX: fadeAnim.interpolate({
                            //         inputRange: [0, 1],
                            //         outputRange: [width, 0]  // 0 : 150, 0.5 : 75, 1 : 0
                            //     }),
                            // },
                            // {
                            //     translateX: fadeAnim.interpolate({
                            //         inputRange: [0, 1],
                            //         outputRange: [width, 0]  // 0 : 150, 0.5 : 75, 1 : 0
                            //     }),
                            // },
                            {
                                rotateZ: fadeAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '360deg']  // 0 : 150, 0.5 : 75, 1 : 0
                                }),
                            },
                            // {
                            //     scaleY: 2, 
                            // }
                            // scaleY,
                            // {
                            //     translateY: 100,
                            // }
                            //  translateY
                        ]

                    },
                ]}>
                <Text style={styles.fadingText}>Fading View!</Text>
            </Animated.View>
            {/* <View style={{ flex: 1 }}>
                <Animated.View
                    style={{
                        height: opacity.interpolate(
                            {
                                inputRange: [0, 1],
                                outputRange: [0, 100],
                            },
                        ),
                        width: opacity.interpolate(
                            {
                                inputRange: [0, 1],
                                outputRange: [0, 100],
                            },
                        ),
                        opacity: opacity,
                        // borderRadius: opacity.interpolate(
                        //     {
                        //         inputRange: [0, 1],
                        //         outputRange: [0, 100],
                        //     },
                        // ),
                        backgroundColor: 'powderblue',
                    }}
                />
            </View>
            <View style={{ flex: 3 }}>
                <FlatList

                    data={types}
                    renderItem={({ item }) => (
                        <Button
                            title={item.title}
                            onPress={() => {
                                animate(item.easing)
                            }}
                        />
                    )}
                />

            </View> */}
            <View style={styles.buttonRow}>
                <Button title="fadeIn" onPress={() => {
                    fadeIn()
                }} />
                <Button title="fadeOut" onPress={() => {
                    fadeOut()
                }} />
                <Button title="stop" onPress={() => {
                    fadeAnim.stopAnimation()
                }} />
            </View>
        </SafeAreaView>
    );
};

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
        alignItems: 'center',
        justifyContent: 'center',
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