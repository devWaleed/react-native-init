import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import CheckBox from "react-native-check-box";
import Icon from "react-native-vector-icons/FontAwesome5";

const Filters = (props) => {
    return (
        <View style={{ flex: 1, padding: 10, marginVertical: 10 }}>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={onClose} style={{ paddingHorizontal: 5, }}>
                    <Icon name="window-close" size={20} color="#00d563" />
                </TouchableOpacity>
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Filters</Text>
                </View>
            </View>
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
                <View style={{ flexDirection: "row", marginVertical: 10 }}>
                    <TouchableOpacity onPress={() => setHeadingTab("Cuisine")} style={{ flex: 1, alignItems: "center" }}>
                        <View stlye={{ flex: 1, marginVertical: 10, borderBottomColor: "#00d563", borderBottomWidth: 2 }}>
                            <Text style={{ color: headingTab === "Cuisine" ? '#00d563' : "black", fontWeight: "bold", borderBottomColor: "#00d563", borderBottomWidth: headingTab === "Cuisine" ? 4 : 0, paddingVertical: 10 }}>Cuisine</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setHeadingTab("Attributes")} style={{ flex: 1, alignItems: "center" }}>
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
                <View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Cuisine</Text>
                    </View>
                    <View>
                        <View>
                            <CheckBox
                                style={{ flex: 1, paddingVertical: 5 }}
                                leftText={"Desi"}
                                checkBoxColor={"#00d563"}
                                onClick={() => setChecked(!checked)}
                                isChecked={checked}
                            />
                        </View>
                        <View>
                            <CheckBox
                                style={{ flex: 1, paddingVertical: 5 }}
                                leftText={"American"}
                                checkBoxColor={"#00d563"}
                                onClick={() => setChecked(!checked)}
                                isChecked={checked}
                            />
                        </View>
                        <View>
                            <CheckBox
                                style={{ flex: 1, paddingVertical: 5 }}
                                leftText={"Arabian"}
                                checkBoxColor={"#00d563"}
                                onClick={() => setChecked(!checked)}
                                isChecked={checked}
                            />
                        </View>
                        <View>
                            <CheckBox
                                style={{ flex: 1, paddingVertical: 5 }}
                                leftText={"Asian"}
                                onClick={() => setChecked(!checked)}
                                isChecked={checked}
                                checkBoxColor={"#00d563"}
                            />
                        </View>
                        <View>
                            <CheckBox
                                style={{ flex: 1, paddingVertical: 5 }}
                                leftText={"Asian"}
                                onClick={() => setChecked(!checked)}
                                isChecked={checked}
                                checkBoxColor={"#00d563"}
                            />
                        </View>
                        <View>
                            <CheckBox
                                style={{ flex: 1, paddingVertical: 5 }}
                                leftText={"Asian"}
                                onClick={() => setChecked(!checked)}
                                isChecked={checked}
                                checkBoxColor={"#00d563"}
                            />
                        </View>
                        <View>
                            <CheckBox
                                style={{ flex: 1, paddingVertical: 5 }}
                                leftText={"Asian"}
                                onClick={() => setChecked(!checked)}
                                isChecked={checked}
                                checkBoxColor={"#00d563"}
                            />
                        </View>
                        <View>
                            <CheckBox
                                style={{ flex: 1, paddingVertical: 5 }}
                                leftText={"Asian"}
                                onClick={() => setChecked(!checked)}
                                isChecked={checked}
                                checkBoxColor={"#00d563"}
                            />
                        </View>
                        <View>
                            <CheckBox
                                style={{ flex: 1, paddingVertical: 5 }}
                                leftText={"Asian"}
                                onClick={() => setChecked(!checked)}
                                isChecked={checked}
                                checkBoxColor={"#00d563"}
                            />
                        </View>
                        <View>
                            <CheckBox
                                style={{ flex: 1, paddingVertical: 5 }}
                                leftText={"Asian"}
                                onClick={() => setChecked(!checked)}
                                isChecked={checked}
                                checkBoxColor={"#00d563"}
                            />
                        </View>
                        <View>
                            <CheckBox
                                style={{ flex: 1, paddingVertical: 5 }}
                                leftText={"Asian"}
                                onClick={() => setChecked(!checked)}
                                isChecked={checked}
                                checkBoxColor={"#00d563"}
                            />
                        </View>
                        <View>
                            <CheckBox
                                style={{ flex: 1, paddingVertical: 5 }}
                                leftText={"Asian"}
                                onClick={() => setChecked(!checked)}
                                isChecked={checked}
                                checkBoxColor={"#00d563"}
                            />
                        </View>
                        <View>
                            <CheckBox
                                style={{ flex: 1, paddingVertical: 5 }}
                                leftText={"Asian"}
                                onClick={() => setChecked(!checked)}
                                isChecked={checked}
                                checkBoxColor={"#00d563"}
                            />
                        </View>
                        <View>
                            <CheckBox
                                style={{ flex: 1, paddingVertical: 5 }}
                                leftText={"Asian"}
                                onClick={() => setChecked(!checked)}
                                isChecked={checked}
                                checkBoxColor={"#00d563"}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <TouchableOpacity style={{ paddingVertical: 15, backgroundColor: "#00d563", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Apply Filters</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Filters;