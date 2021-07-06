import React from "react";
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Images } from "../Assets";
import { Colors } from "../Themes";
import { SmartImage } from 'components';

export default function Home(props) {

	return (
		<View>
			<AppIntro title={"React Native Simple Boilerplate"} {...props} />
		</View>
	);

}

function AppIntro(props) {
	return (
		<View>
			<SmartImage
				style={{ alignSelf: 'center', marginVertical: 20 }}
				source={Images.hamburgerIcon}
			/>
			<Text style={styles.heading}>
				{props.title}
			</Text>
			<Text style={styles.paragraph}>
				A simple react native project with only essential things that are required to build a great app
			</Text>
			<View style={{ marginHorizontal: 30, marginVertical: 10, }}>
				<Button title={"Click Me!"} onPress={() => {
					props.navigation.navigate('Details');
				}} />
			</View>
			<View style={{ marginHorizontal: 30, marginVertical: 10, }}>
				<Button title={"Form.js"} onPress={() => {
					props.navigation.navigate('Form');
				}} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	heading: {
		fontSize: 20,
		paddingTop: 30,
		textAlign: 'center',
		fontWeight: 'bold',
		color: Colors.greenDark
	},
	paragraph: {
		padding: 15,
		marginVertical: 20,
		textAlign: 'center',
		color: Colors.greenLight
	},
	sampleImage: {
		width: 100,
		height: 100,
		marginTop: 50,
		borderRadius: 10,
		alignSelf: 'center'
	}
});