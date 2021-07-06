import React from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome5';

const slides = [
    {
        key: 'first',
        title: 'Welcome To Cart Hazir',
        text: 'Buy our products easily and get access to app only exclusives',
        image: <Image style={{ flex: 1 }} resizeMode="contain" resizeMethod="auto" source={require("../../Assets/Images/introIcon.png")} />,
        backgroundColor: '#59b2ab',
    },
    {
        key: 'second',
        title: 'Quick Search',
        text: 'Browse your favorite items',
        image: <Icon name="search" color="black" solid size={100} />,
        backgroundColor: '#febe29',
    },
    {
        key: 'three',
        title: 'Add To Cart',
        text: 'Add Products to your cart and checkout later',
        image: <Icon name="shopping-bag" size={100} color="black" solid />,
        backgroundColor: '#22bcb5',
    },
    {
        key: 'fourth',
        title: 'Checkout',
        text: 'Checkout your billing invoice with checkout button',
        image: <Icon name="truck" color="black" solid size={100} />,
        backgroundColor: '#22bcb5',

    },
    {
        key: 'fifth',
        title: 'Shipping Address',
        text: 'Put the shipping address where you want to deliver your products',
        image: <Icon name="truck" color="black" solid size={100} />,
        backgroundColor: '#22bcb5',

    },
    {
        key: 'sixth',
        title: 'Order Tracking',
        text: 'Monitor your orders and get updates when something changes',
        image: <Icon name="truck" color="black" solid size={100} />,
        backgroundColor: '#22bcb5',

    }
];
const renderItem = ({ item }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            {item.key !== "first" ? <View style={{
                paddingHorizontal: 40,
                paddingVertical: 30,
                borderRadius: 35,
                backgroundColor: "rgba(255, 255, 255, .20)"
            }}>
                {item.image && item.image}
            </View> : <View style={{
                height: 100,
                width: 200,
                alignItems: "center",
            }}>
                {item.image && item.image}
            </View>}
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: 26,
                    paddingTop: 50,
                    paddingBottom: 20,
                    color: "white"
                }}>
                {item.title}
            </Text>
            <Text
                style={{
                    textAlign: 'center',
                    fontSize: 16,
                    marginHorizontal: 50,
                    color: "white"
                }}>
                {item.text}
            </Text>
        </View>
    );
};

const IntroSlides = (props) => {
    React.useEffect(() => {
        props.navigation.setOptions({
            headerShown: false,
        });
    }, [])
    return (<View style={{ flex: 1, backgroundColor: "#2e2c47" }}>
        <AppIntroSlider
            dotStyle={{ backgroundColor: "white", marginHorizontal: 10 }}
            activeDotStyle={{ backgroundColor: "#f2901f", marginHorizontal: 10 }}
            onSkip={() => {
                props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }]
                })
            }}
            showSkipButton={true}
            showNextButton={false}
            bottomButton={true}
            renderItem={renderItem}
            data={slides}
            doneLabel={'Continue'}
            onDone={() => {
                props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }]
                })
            }}
            renderDoneButton={() => <Text style={{ color: "white", alignSelf: "center", marginBottom: 15, fontSize: 12 }}>Skip</Text>}
            renderSkipButton={() => <Text style={{ color: "white", alignSelf: "center", marginBottom: 15, fontSize: 12 }}>Skip</Text>}
        />
    </View>)
};
export default IntroSlides;