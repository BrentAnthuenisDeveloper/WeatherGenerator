import "./gesture-handler";
import { StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import React, { useState, useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AboutTabNav from "./navigation/AboutTabNav";

SplashScreen.preventAutoHideAsync();
export default function App() {
	const [fontsLoaded] = Font.useFonts({
		canterbury: require("./assets/fonts/canterbury.regular.ttf"),
		medievalSharp: require("./assets/fonts/MedievalSharp-Regular.ttf"),
	});
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		if (fontsLoaded) {
			setTimeout(() => { setAppIsReady(true) }, 2000)
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
		<NavigationContainer onReady={onLayoutRootView}>
			<AboutTabNav />
		</NavigationContainer>
	);
}
const styles = StyleSheet.create({
	basic: {},
});
