import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button, Modal } from "react-native";
import WeatherGenerator from "../helpers/WeatherGenerator";
import WeatherReportListItem from "../components/WeatherReportListItem";
import { NavigationProp, RouteProp, useNavigation } from "@react-navigation/native";
import { DetailsStackNavParamList } from "../navigation/DetailsStackNav";
import { StackNavigationProp } from "@react-navigation/stack";
import NewWeatherReport from "./NewWeatherReport";

// type WeatherReportsRouteProp = RouteProp<DetailsStackNavParamList, "weatherReports">;
type WeatherReportsStackNavigationProp = StackNavigationProp<DetailsStackNavParamList, "weatherReports">;



const WeatherReports = () => {
	const weatherGenerator = new WeatherGenerator();
	const WeatherReports = weatherGenerator.weatherReports;
	const nav = useNavigation<WeatherReportsStackNavigationProp>();

	const [isModalVisible, setIsModalVisible] = useState(false);
	const onNewWeatherReportButtonPress = () => {
		setIsModalVisible(true);
	}
	return (
		<View style={styles.list}>
			<FlatList
				data={WeatherReports}
				renderItem={({ item }) => (
					<>
						<WeatherReportListItem weatherReport={item} />
						<Button onPress={() => { nav.navigate("weatherReportDetails", { weatherreport: item }) }} title="details"></Button>
					</>
				)}
			/>
			<Button title="generate new weather report" onPress={onNewWeatherReportButtonPress} />
			<Modal
				visible={isModalVisible}
				animationType="slide" // You can change this animation to `fade` or `none` if you prefer
				transparent={false} // Make the background transparent
				onRequestClose={() => { setIsModalVisible(false) }} // Handle back button press on Android
			>
				<View>
					<NewWeatherReport />
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	list: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		height: 300,
	},
});

export default WeatherReports;
