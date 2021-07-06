import React, { useRef } from "react";
import { View, TouchableOpacity, Text, ScrollView, ImageBackground, Image } from "react-native";
import Blur from "./BlurView";
import { Formik, Field } from "formik";
import { FormikInput } from "../../Components"
import * as Yup from "yup"
const Login = (props) => {
    React.useEffect(() => {
        props.navigation.setOptions({
            headerShown: false
        })
    })
    const getFormikInput = ({ name, placeholder, type, isMasked, isSecure }) => {
        return (
            <>
                <Field
                    component={FormikInput}
                    name={name}
                    placeholder={placeholder}
                    keyboardType={type}
                    isMasked={isMasked || false}
                    isSecure={isSecure}
                />
            </>)
    }
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground resizeMode='cover' style={{ flex: 1, paddingHorizontal: 20 }} source={require("../../Assets/Images/carthazirbg.png")}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                    <View
                        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center", marginVertical: 25 }}>
                        <Image source={require("../../Assets/Images/loginLogo.png")} />
                    </View>
                    <View style={{ flex: 2, backgroundColor: "rgba(255, 255, 255, .20)", borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                        <View style={{ alignItems: "center", paddingVertical: 20 }}>
                            <View style={{ marginVertical: 5 }}>
                                <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Login</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: "white" }}>Dont have an account? </Text>
                                <TouchableOpacity><Text style={{ textDecorationLine: "underline", color: "#f2901f" }}>Signup</Text></TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Formik>
                                {({ handleSubmit, isValid, values }) => {
                                    return (
                                        <View>
                                            {getFormikInput({
                                                name: "email",
                                                placeholder: "Your Email",
                                            })}
                                            {getFormikInput({
                                                name: "password",
                                                placeholder: "Password",
                                                isSecure: true
                                            })}
                                            <View style={{ marginVertical: 10, justifyContent: "flex-end", flexDirection: "row", marginHorizontal: 15 }}>
                                                <TouchableOpacity>
                                                    <Text style={{ color: "white", fontSize: 12 }}>Forgot password</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ marginVertical: 20 }}>
                                                <TouchableOpacity style={{ backgroundColor: "#030055", alignItems: "center", padding: 15, width: "75%", alignSelf: "center", borderRadius: 10 }}>
                                                    <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>)
                                }}
                            </Formik>

                        </View>
                        <View style={{ marginVertical: 10, alignSelf: "center" }}>
                            <TouchableOpacity>
                                <Text style={{ color: "white" }}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>

        </View>
    )
}

export default Login;