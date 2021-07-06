import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const Header = (props) => {
    return (<View style={{ backgroundColor: 'white' }}>
        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: 10, marginTop: 20, marginBottom: 5 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {props.isBack && <TouchableOpacity onPress={props.backPress}>
                    <Icon name='arrow-left' size={25} color="#00d563" />
                </TouchableOpacity>}
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>{props.title}</Text>
                </View>
            </View>
            {!props.isBack && <View style={{ alignItems: "center" }}>
                <TouchableOpacity onPress={props.onPress}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#00d563" }}>+{props.actionTitle}</Text>
                </TouchableOpacity>
            </View>}
        </View>
    </View>)
};

export default Header;