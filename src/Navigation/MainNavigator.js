import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MainScreens } from "./Screens";

const Stack = createStackNavigator();

export default function MainNavigator(props) {
	return (
		<NavigationContainer >
			<Stack.Navigator initialRouteName={"Home"}>
				{Object.keys(MainScreens).map((key) => {
					return (
						<Stack.Screen key={key} name={key} component={MainScreens[key]} />
					);
				}
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
