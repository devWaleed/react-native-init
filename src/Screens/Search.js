import React, { useRef, useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Modalize } from 'react-native-modalize';
import CheckBox from "react-native-check-box"
// import { } from ''
const Search = (props) => {

    useEffect(() => {
        props.navigation.setOptions({
            headerShown: false
        })
    }, [])

    const [selectedTab, setSelectedTab] = useState("Delivery")
    const [searchTab, setSearchTab] = useState('');
    const [headingTab, setHeadingTab] = useState("Cuisine")
    const modalizeRef = useRef(null);
    const [checked, setChecked] = useState(false);
    const [cuisinePos, setCuisinePos] = useState(0)
    const [attributesPos, setAttributePos] = useState(0)
    const contentRef = useRef(ScrollView);
    const cuisin = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const attributes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const onClose = () => {
        setHeadingTab("Cuisine")
        modalizeRef.current.close()
    }
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Modalize scrollViewProps={{
                onScroll: (event) => {
                    const { y } = event.nativeEvent.contentOffset
                    if (y > Math.round(attributesPos * (attributes.length + cuisin.length - 7))) {
                        setHeadingTab("Attributes")
                    }
                    else if (y < Math.round(attributesPos * (attributes.length + cuisin.length - 7))) {
                        setHeadingTab("Cuisine")
                    }

                }
            }} contentRef={contentRef} ref={modalizeRef} FooterComponent={() => {
                return (
                    <View style={{ marginVertical: 10, paddingHorizontal: 10 }}>
                        <TouchableOpacity style={{ paddingVertical: 15, backgroundColor: "#00d563", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white", fontWeight: "bold" }}>Apply Filters</Text>
                        </TouchableOpacity>
                    </View>
                )
            }} HeaderComponent={() => {
                return (<>
                    <View style={{ flexDirection: "row", marginVertical: 10, marginTop: 20, paddingHorizontal: 10 }}>
                        <TouchableOpacity onPress={onClose} style={{ paddingHorizontal: 5, }}>
                            <Icon name="window-close" size={20} color="#00d563" />
                        </TouchableOpacity>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Filters</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginVertical: 10 }}>
                        <TouchableOpacity onPress={() => {
                            contentRef.current.scrollTo({
                                x: 0,
                                y: Math.round(cuisinePos * cuisin.length / 2.1)
                            })
                            setHeadingTab("Cuisine")

                        }} style={{ flex: 1, alignItems: "center" }}>
                            <View stlye={{ flex: 1, marginVertical: 10, borderBottomColor: "#00d563", borderBottomWidth: 2 }}>
                                <Text style={{ color: headingTab === "Cuisine" ? '#00d563' : "black", fontWeight: "bold", borderBottomColor: "#00d563", borderBottomWidth: headingTab === "Cuisine" ? 4 : 0, paddingVertical: 10 }}>Cuisine</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setHeadingTab("Attributes")
                            contentRef.current.scrollTo({
                                x: 0,
                                y: Math.round(attributesPos * (attributes.length + cuisin.length - 7))
                            })
                        }} style={{ flex: 1, alignItems: "center" }}>
                            <View stlye={{ flex: 1, marginVertical: 10, borderBottomColor: "#00d563", borderBottomWidth: 2 }}>
                                <Text style={{ color: headingTab === "Attributes" ? '#00d563' : "black", fontWeight: "bold", borderBottomColor: "#00d563", borderBottomWidth: headingTab === "Attributes" ? 4 : 0, paddingVertical: 10 }}>Attributes</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setHeadingTab("Price")} style={{ flex: 1, alignItems: "center" }}>
                            <View stlye={{ flex: 1, marginVertical: 10, borderBottomColor: "#00d563", borderBottomWidth: 2 }}>
                                <Text style={{ color: headingTab === "Price" ? '#00d563' : "black", fontWeight: "bold", borderBottomColor: "#00d563", borderBottomWidth: headingTab === "Price" ? 4 : 0, paddingVertical: 10 }}>Price</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </>)
            }} >
                <View style={{ flex: 1, padding: 10, marginVertical: 10 }}>
                    <View >
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Offers</Text>
                        </View>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => searchTab === "Payment" ? setSearchTab("") : setSearchTab("Payment")} style={{ backgroundColor: searchTab === "Payment" ? "#00d563" : "#fff", padding: 5, borderRadius: 50, paddingHorizontal: 15, marginHorizontal: 5 }}>
                                <Text style={{ color: searchTab === "Payment" ? "#fff" : "#00d563", fontWeight: "bold" }}>Payment Availble</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => searchTab === "Voucher" ? setSearchTab("") : setSearchTab("Voucher")} style={{ backgroundColor: searchTab === "Voucher" ? "#00d563" : "#fff", padding: 5, borderRadius: 50, paddingHorizontal: 15, marginHorizontal: 5 }}>
                                <Text style={{ color: searchTab === "Voucher" ? "#fff" : "#00d563", fontWeight: "bold" }}>Accept Vouchers</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => searchTab === "Deal" ? setSearchTab("") : setSearchTab("Deal")} style={{ backgroundColor: searchTab === "Deal" ? "#00d563" : "#fff", padding: 5, borderRadius: 50, paddingHorizontal: 15, marginHorizontal: 5 }}>
                                <Text style={{ color: searchTab === "Deal" ? "#fff" : "#00d563", fontWeight: "bold" }}>Deals</Text>
                            </TouchableOpacity>
                        </ScrollView>
                        <View>
                            <View onLayout={(event) => {
                                const layout = event.nativeEvent.layout;
                                setCuisinePos(layout.height)
                            }} style={{ marginVertical: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Cuisine</Text>
                            </View>
                            <View>
                                {cuisin.map((ele, index) => {
                                    return (
                                        <View key={index}>
                                            <CheckBox
                                                style={{ flex: 1, paddingVertical: 5 }}
                                                leftText={"Desi"}
                                                checkBoxColor={"#00d563"}
                                                onClick={() => setChecked(!checked)}
                                                isChecked={checked}
                                            />
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                        <View>
                            <View onLayout={(event) => {
                                const layout = event.nativeEvent.layout;
                                setAttributePos(layout.height)
                            }} style={{ marginVertical: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Attributes</Text>
                            </View>
                            <View>
                                {attributes.map((ele, index) => {
                                    return (
                                        <View key={index}>
                                            <CheckBox
                                                style={{ flex: 1, paddingVertical: 5 }}
                                                leftText={"Desi"}
                                                checkBoxColor={"#00d563"}
                                                onClick={() => setChecked(!checked)}
                                                isChecked={checked}
                                            />
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                    </View>
                </View>
            </Modalize>
            <View style={{ justifyContent: "space-between", flexDirection: "row", padding: 10, marginTop: 10, marginBottom: 5 }}>
                <View style={{ flexDirection: "row", alignItems: "center", marginRight: 20 }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Icon name='arrow-left' size={20} color="#00d563" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, height: 40, justifyContent: "center" }}>
                    <TextInput placeholderTextColor="#aaa" placeholder="Search" style={{ paddingHorizontal: 10, backgroundColor: "#eee", borderRadius: 10, color: "black" }} />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 5 }}>
                    <TouchableOpacity onPress={onOpen} >
                        <Icon name='sliders-h' size={20} color="#00d563" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ marginHorizontal: 10 }}>
                    <TouchableOpacity onPress={() => setSelectedTab("Delivery")} style={{ backgroundColor: selectedTab === "Delivery" ? "#00d563" : "#fff", padding: 5, borderRadius: 50, paddingHorizontal: 15 }}>
                        <Text style={{ color: selectedTab === "Delivery" ? "#fff" : "#00d563", fontWeight: "bold" }}>Delivery</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => setSelectedTab("Pickup")} style={{ backgroundColor: selectedTab === "Pickup" ? "#00d563" : "#fff", padding: 5, borderRadius: 50, paddingHorizontal: 15 }}>
                        <Text style={{ color: selectedTab === "Pickup" ? "#fff" : "#00d563", fontWeight: "bold" }}>Pick-Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, padding: 10 }}>
                <View style={{ height: 200, width: "100%" }}>
                    <Image resizeMode='contain' style={{ borderRadius: 10, width: '100%', height: "100%" }} source={require("../Assets/Images/sample.jpg")} />
                </View>
                <View style={{ justifyContent: "space-between", flexDirection: "row", marginBottom: 10 }}>
                    <View>
                        <Text>Title Heading</Text>
                    </View>
                    <View>
                        <Text>Star Rating</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>Descrpition Of The Product</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <View>
                        <Text>Delivery Fees Section</Text>
                    </View>
                </View>
            </View>
        </View>)
}
export default Search;