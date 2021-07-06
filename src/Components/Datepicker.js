import React, { useState, useRef, useEffect } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatePicker = (props) => {
    return (
        <TouchableOpacity onPress={() => props.showDatePicker()}>
            <View style={{
                borderWidth: 0.5,
                borderColor: '#e5eaed',
                alignItems: "center",
                padding: 15,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <DateTimePickerModal {...props} />
                <View>
                    <Text style={{ opacity: 0.5 }}>{props.date.toLocaleDateString() ?? 'Select a Date'}</Text>
                </View>
                <View>
                    {props.icon && <Icon name={props.icon} size={20} color={props.iconColor} />}
                </View>
            </View>

        </TouchableOpacity>
    )

};

export default DatePicker;