import React from "react";
import { View, Text, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

export default function InputBlock({ placeholder, label, icon, keyboardType, onChangeText, onBlur, value, isSecured }) {
    return (
        <View>
            {label && <Text style={{ fontWeight: 'bold', marginVertical: 2 }}>{label}</Text>}
            <View style={{
                elevation: 2,
                borderRadius: 7,
                backgroundColor: '#fff',
            }}>
                <TextInput
                    style={{
                        color: '#000',
                        paddingVertical: 7,
                        paddingHorizontal: 10,
                    }}
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    placeholderTextColor={'#aaa'}
                    placeholder={placeholder}
                    value={value}
                    secureTextEntry={isSecured}
                />
                {
                    icon != null && <View style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        paddingHorizontal: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff',
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                    }}>
                        <Icon name={icon} size={15} color={'#777'} />
                    </View>
                }
            </View>
        </View>
    );
}

