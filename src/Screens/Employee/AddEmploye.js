import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Header, DropDown, Datepicker } from "../../Components/"
const AddEmploye = (props) => {
    React.useEffect(() => {
        props.navigation.setOptions({
            headerShown: false
        })
    }, [])

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString());
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const localeDate = date.toLocaleDateString()
        setSelectedDate(localeDate)
        hideDatePicker();
    };

    const [index, setIndex] = React.useState(-1)
    const staticData = [
        "All", "Active", "Inactive", "Terminated"
    ];


    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Header
                isBack={true}
                title={"Add Employee"}
                backPress={() => props.navigation.goBack()}

            />
            <View style={{ flex: 1, padding: 15 }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, marginHorizontal: 5 }}>
                        <View style={{ marginVertical: 2 }}>
                            <Text style={{ fontWeight: "bold" }}>Status*</Text>
                        </View>
                        <View style={{ height: 45, width: '100%' }}>
                            <DropDown
                                dropdownStyle={{ width: 110, borderRadius: 10, overflow: "hidden" }}
                                dataSource={staticData}
                                index={index}
                                onSelect={setIndex}
                            >
                                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    <View>
                                        <Text>{staticData[index] ?? "Select"}</Text>
                                    </View>
                                    <View>
                                        <Icon name="angle-down" size={20} color="#00d563" />
                                    </View>
                                </View>
                            </DropDown>
                        </View>
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 5 }}>
                        <View style={{ marginVertical: 2 }}>
                            <Text style={{ fontWeight: "bold" }}>Role*</Text>
                        </View>
                        <View style={{ height: 45 }}>
                            <DropDown
                                dropdownStyle={{ width: 110, borderRadius: 10, overflow: "hidden" }}
                                dataSource={staticData}
                                index={index}
                                onSelect={setIndex}
                            >
                                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    <View>
                                        <Text>{staticData[index] ?? "Select"}</Text>
                                    </View>
                                    <View>
                                        <Icon name="angle-down" size={20} color="#00d563" />
                                    </View>
                                </View>
                            </DropDown>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Datepicker
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                        isVisible={isDatePickerVisible}
                        icon={"calendar-alt"}
                        iconColor={"#00d563"}
                        showDatePicker={showDatePicker}
                        date={new Date(selectedDate)}
                    />
                </View>
            </View>
        </View>
    )
}

export default AddEmploye;