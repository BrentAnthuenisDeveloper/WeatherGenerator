import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import DatePicker from "react-native-date-picker";
import WeatherReportListItem from "../components/WeatherReportListItem";
import WeatherReport from "../helpers/DetailedWeather/Models/WeatherReport";
import WeatherGenerator from "../helpers/WeatherGenerator";

const NewWeatherReport = () => {
	const [date, setDate] = useState<Date>(new Date());
	const [open, setOpen] = useState<Boolean>(false);
	const [newestWeatherReport, setNewestWeatherReport] = useState<
		WeatherReport | undefined
	>(undefined);
	const generator = new WeatherGenerator();
	const generateWeatherButtonPress = () => {
		const weatherreport: WeatherReport = new WeatherReport(
			date,
			generator.GenerateRandomWeather()
		);
		setNewestWeatherReport(weatherreport);
	};
	return (
		<View style={styles.container}>
			<Button title="Open" onPress={() => setOpen(true)} />
			<DatePicker
				modal
				open={open}
				date={date}
				onConfirm={(date: Date) => {
					setOpen(false);
					setDate(date);
				}}
				onCancel={() => {
					setOpen(false);
				}}
			/>
			<Button onPress={generateWeatherButtonPress}>
				Generate weatherReport
			</Button>
			<View>
				<WeatherReportListItem
					weatherReport={newestWeatherReport}
				></WeatherReportListItem>
			</View>
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
	datepicker: {},
});

export default NewWeatherReport;
