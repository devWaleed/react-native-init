import React from 'react';
import { View, Text, StyleSheet, Button, Image, Modal, TouchableOpacity, ScrollView, Dimensions, FlatList } from 'react-native';
import { Images } from '../Assets';
import { Colors } from '../Themes';
import { SmartImage, DropdownPopup } from 'components';
import { useState } from 'react';

export default function Home(props) {
	return (
		<View>
			<AppIntro title={'React Native Simple Boilerplate'} {...props} />
		</View>
	);
}

function AppIntro(props) {
	const [openPopup, setOpenPopup] = useState(false);

	return (
		<View>
			<SmartImage style={{ alignSelf: 'center', marginVertical: 20 }} source={Images.hamburgerIcon} />
			<Text style={styles.heading}>{props.title}</Text>
			<Text style={styles.paragraph}>
				A simple react native project with only essential things that are required to build a great app
			</Text>

			{/* <DropdownPopup
				items={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
				renderItem={({ item, index }) => {
					return (
						<View style={{ paddingVertical: 10 }}>
							<Text>
								Click me Item {item} on index {index}
							</Text>
						</View>
					);
				}}
				onItemSelected={(item) => {
					console.log('selected', item);
				}}
				show={openPopup}
				keyExtractor={(item) => item.toString()}
			/> */}
		</View>
	);
}

const styles = StyleSheet.create({
	heading: {
		fontSize: 20,
		paddingTop: 30,
		textAlign: 'center',
		fontWeight: 'bold',
		color: Colors.greenDark,
	},
	paragraph: {
		padding: 15,
		marginVertical: 20,
		textAlign: 'center',
		color: Colors.greenLight,
	},
	sampleImage: {
		width: 100,
		height: 100,
		marginTop: 50,
		borderRadius: 10,
		alignSelf: 'center',
	},
});
