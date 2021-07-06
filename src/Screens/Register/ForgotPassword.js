import React, { useEffect } from "react";
import { View, Text, Button, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { InputBlock } from "../../Components/";
import { Images } from "../../Assets"
const ForgotPassword = (props) => {
    useEffect(() => {
        props.navigation.setOptions({
            headerShown: false
        })
    }, [])
    const initialValues = { email: '', password: '' };
    const formSchema = Yup.object().shape({
        email: Yup.string().trim().email('Email must be valid').required('email is required').min(5).max(16),
        password: Yup.string().trim().required('password is required').min(5).max(16),
    });
    return (
        <View style={styles.flexContainer}>
            <ImageBackground style={styles.flexContainer} source={Images.background}>
                <View style={{ flex: 1.2 }}>
                    <View style={styles.innerContainer}>
                        <View style={styles.circle}>
                            <Text style={styles.heroTitle}>PINCH</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.secondaryContainer}>
                    <View>
                        <View style={{ paddingVertical: 5 }}>
                            <View style={styles.headingMargin}>
                                <Text style={styles.loginHeading}>Forgot Password</Text>
                            </View>
                            <View style={styles.headingMargin}>
                                <Text style={styles.subHeading}>Please enter your registered email to reset your password</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <View>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={formSchema}
                            >
                                {({ handleChange, handleBlur, handleSubmit, values }) => (
                                    <View>
                                        <View style={{ marginHorizontal: 2 }}>
                                            <InputBlock
                                                label={'First Name'}
                                                onChangeText={handleChange('email')}
                                                onBlur={handleBlur('email')}
                                                value={values.email}
                                                placeholder={'ex: john@doe.com'}
                                                icon={"envelope"}
                                            />
                                            <View style={styles.headingMargin}>
                                                <ErrorMessage component={ErrorText} name="email" />
                                            </View>
                                        </View>
                                        <View style={{ marginTop: 20 }}>
                                            <TouchableOpacity onPress={handleSubmit} style={{ ...styles.TouchableButton, padding: 15, backgroundColor: "#00d563" }}>
                                                <Text style={styles.buttonText} >Send</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => { props.navigation.navigate("Login") }} style={{ ...styles.TouchableButton, padding: 10, }}>
                                                <Text style={styles.actionHeading} >Back to Login?</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                )}
                            </Formik>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View >)
}
function ErrorText({ children }) {
    return <Text style={{ fontSize: 12, color: 'red', }}>{children}</Text>
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "space-between"
    },
    flexContainer: {
        flex: 1
    },
    loginHeading: { fontSize: 24, fontWeight: "bold" },
    innerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    circle: {
        paddingHorizontal: 40,
        backgroundColor: "#00d563",
        borderRadius: 100,
        paddingVertical: 55
    },
    heroTitle: {
        color: "white",
        fontSize: 18
    },
    secondaryContainer: {
        elevation: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 25
    },
    subHeading: { color: "black", opacity: 0.3 },
    headingMargin: { marginVertical: 5 },
    actionHeading: { color: "#00d563", fontWeight: "bold" },
    buttonText: { color: "white", fontWeight: "bold" },
    TouchableButton: { marginVertical: 10, justifyContent: "center", alignItems: "center" }
})
export default ForgotPassword;