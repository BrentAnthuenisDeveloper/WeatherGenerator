import React from "react";
import { StyleSheet, View, Text, FlatList,Button } from "react-native";
import WeatherGenerator from "../helpers/WeatherGenerator";
import WeatherReportListItem from "../components/WeatherReportListItem";

const WeatherReports = () => {
	const weatherGenerator = new WeatherGenerator();
	const WeatherReports = weatherGenerator.weatherReports;
	const onNewWeatherReportButtonPress=()=>{
		//todo: show newweatherreportscren as modal
	}
	return (
		<View style={styles.list}>
			<FlatList
				data={WeatherReports}
				renderItem={({ item }) => (
					<WeatherReportListItem weatherReport={item} />
				)}
			/>
			<Button title="generate new weather report" onpress={onNewWeatherReportButtonPress} />
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
