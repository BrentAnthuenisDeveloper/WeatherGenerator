import React from "react";
import { StyleSheet, View, Text } from "react-native";
import WeatherReport from "../helpers/DetailedWeather/Models/WeatherReport";

type WeatherReportListItemProps = {
	weatherReport: WeatherReport;
};

const WeatherReportListItem = ({
	weatherReport,
}: WeatherReportListItemProps) => {
	return (
		<View style={styles.container}>
			<Text>this is a weatherreportlistitem</Text>
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
});

export default WeatherReportListItem;
