import React from "react";
import { BlurView, VibrancyView } from "@react-native-community/blur";
import { View, Text } from "react-native"

const Blur = (props) => {
    return (<View style={{ flex: 1 }}>
        <BlurView {...props} style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        }}
            blurType="dark"
            blurAmount={5}
            blurRadius={10}
            reducedTransparencyFallbackColor="white" />
    </View>)
}
export default Blur;