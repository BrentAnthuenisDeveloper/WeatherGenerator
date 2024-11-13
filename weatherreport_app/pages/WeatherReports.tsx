import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import WeatherGenerator from "../helpers/WeatherGenerator";
import WeatherReportListItem from "../components/WeatherReportListItem";

const WeatherReports = () => {
	const weatherGenerator = new WeatherGenerator();
	const WeatherReports = weatherGenerator.weatherReports;
	return (
		<View style={styles.list}>
			<FlatList
				data={WeatherReports}
				renderItem={({ item }) => (
					<WeatherReportListItem weatherReport={item} />
				)}
			/>
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
