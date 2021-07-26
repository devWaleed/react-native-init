import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Dimensions, FlatList, Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default DropdownPopup = ({ items, show, renderItem, onItemSelected, keyExtractor }) => {
	const [openPopup, setOpenPopup] = useState(show);

	useEffect(() => {
		setOpenPopup(show);
	}, [show]);

	const { height: screenHeight } = Dimensions.get('screen');

	return (
		<>
			<TouchableOpacity activeOpacity={0.8} onPress={() => setOpenPopup(true)} style={styles.button}>
				<Text>Hello World</Text>
				<Icon name={'chevron-down'} />
			</TouchableOpacity>
			<Modal visible={openPopup} transparent={true}>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						backgroundColor: 'rgba(0, 0, 0, 0.5)',
						padding: 20,
					}}>
					<View
						style={{
							maxHeight: screenHeight * 0.4,
							backgroundColor: '#fff',
							overflow: 'hidden',
							padding: 20,
							borderRadius: 5,
						}}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
							<Text>Select From List</Text>
							{/* <TouchableOpacity
								onPress={() => setOpenPopup(false)}
								hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
								<Icon name={'times'} size={15} color={'#777'} />
							</TouchableOpacity> */}
						</View>
						<View style={{ marginVertical: 10 }}>
							<FlatList
								data={items}
								renderItem={({ item, index }) => {
									return (
										<TouchableOpacity
											activeOpacity={0.6}
											onPress={() => {
												onItemSelected(item);
												setTimeout(() => setOpenPopup(false), 100);
											}}>
											{renderItem({ item, index })}
										</TouchableOpacity>
									);
								}}
								keyExtractor={keyExtractor}
							/>
						</View>
					</View>
					<View style={styles.closeButtonContainer}>
						<TouchableOpacity onPress={() => setOpenPopup(false)}>
							<Text style={styles.closeButton}>Close</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#fff',
		margin: 10,
		paddingVertical: 15,
		paddingHorizontal: 15,
		elevation: 2,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	closeButtonContainer: {
		backgroundColor: '#fff',
		justifyContent: 'center',
		paddingBottom: 15,
	},
	closeButton: {
		alignSelf: 'center',
		backgroundColor: 'orange',
		color: '#fff',
		paddingVertical: 3,
		paddingHorizontal: 10,
		borderRadius: 5,
	},
});
