import React, { useState } from "react"
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import ModalDropdown from '@monchilin/react-native-dropdown';

function Dropdown(props) {

  return (<>
    <ModalDropdown
      rootContainerStyle={{
        flex: 1,
        backgroundColor: "white",
        borderRadius: 10,
        justifyContent: "center",
        borderColor: "#e5eaed",
        borderWidth: 0.5,
      }}
      labelContainerStyle={{
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 10,
      }}
      itemLabelHighlightStyle={{ backgroundColor: "#eee" }}
      showSeparator={false}
      itemLabelStyle={{ fontWeight: "bold" }}
      {...props}
    >{props.children}</ModalDropdown></>)
}
export default Dropdown;