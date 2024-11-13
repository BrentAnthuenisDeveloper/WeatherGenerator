import "./gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import React, { useState, useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./navigation/MainNavigation";

SplashScreen.preventAutoHideAsync();
export default function App() {
	const [fontsLoaded] = Font.useFonts({
		canterbury: require("./assets/fonts/canterbury.regular.ttf"),
		medievalSharp: require("./assets/fonts/MedievalSharp-Regular.ttf"),
	});
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		if (fontsLoaded) {
			setAppIsReady(true);
		}
	}, [fontsLoaded]);
	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}
	return (
		//todo : add stack navigation and navigation between pages
		<NavigationContainer onReady={onLayoutRootView}>
			<MainNavigation />
		</NavigationContainer>
	);
}
const styles = StyleSheet.create({
	basic: {},
});
