import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';
import { Colors } from "../Themes";

const FormikInput = (props) => {
    const {
        field: { name, onBlur, onChange, value },
        form: { errors, touched, setFieldTouched },
        isMasked,
        isPlaceHolder,
        ...inputProps
    } = props
    const hasError = errors[name] && touched[name]

    return (
        <>
            <View style={{
                marginHorizontal: 10,
                marginBottom: 10,
            }}>
                <Text style={{ marginBottom: 5, fontSize: 12, fontWeight: 'bold', textAlign: 'left', color: "white" }}>{props.placeholder}</Text>
                <TextInput
                    secureTextEntry={props.isSecure}
                    style={[
                        styles.textInput,
                        hasError && styles.errorInput,
                        props.inputStyle
                    ]}
                    value={value}
                    onChangeText={(text) => onChange(name)(text)}
                    onBlur={() => {
                        setFieldTouched(name)
                        onBlur(name)
                    }}
                    {...inputProps}
                />
                {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    textInput: {
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "white",
        paddingHorizontal: 15,
        paddingVertical: Platform.OS === 'android' ? 7 : 10,
    },
    errorText: {
        fontSize: 10,
        color: 'red',
    },
    errorInput: {
        borderColor: 'red',
    }
})

export default FormikInput