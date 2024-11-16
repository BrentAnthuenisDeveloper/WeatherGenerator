import React from "react";
import { StyleSheet, View, Text } from "react-native";
import WeatherReport from "../helpers/Models/WeatherReport";

type WeatherReportListItemProps = {
	weatherReport: WeatherReport;
};

const WeatherReportListItem = ({
	weatherReport,
}: WeatherReportListItemProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				weather report for {weatherReport.dateTime.toLocaleString("nl-BE")}
			</Text>
			<Text>
				{weatherReport.weather.effects.reduce((accumulator, currentValue) => {
					return accumulator + ` ${currentValue.name}`;
				}, "")}
			</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {},
});

export default WeatherReportListItem;
