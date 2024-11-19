import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	Button,
	TextInput,
	ScrollView,
	Platform,
} from "react-native";
//import DatePicker from "react-native-date-picker";
import WeatherReportListItem from "../components/WeatherReportListItem";
import WeatherReport from "../helpers/Models/WeatherReport";
import WeatherGenerator from "../helpers/WeatherGenerator";
import { Formik } from "formik";
import * as Yup from "yup";
import DateTimePicker from "@react-native-community/datetimepicker";
import { weatherGenerator } from "./WeatherReports";

const validationSchema = Yup.object().shape({
	datetime: Yup.date().required("please select a date and a time"),
});

const NewWeatherReport = () => {
	const [newestWeatherReport, setNewestWeatherReport] = useState<
		WeatherReport | undefined
	>(weatherGenerator.currentWeatherReport);
	const [showDatePicker, setShowDatePicker] = useState(false);
	const [showTimePicker, setShowTimePicker] = useState(false);
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());
	const generator = weatherGenerator

	const generateWeatherButtonPress = () => {
		if (selectedDate === undefined) {
			alert("Date and time are required");
			return;
		}
		if (isNaN(selectedDate.getTime())) {
			alert("Invalid date. Please try again.");
			return;
		}
		const weatherreport: WeatherReport =
			generator.GenerateRandomWeatherReport(selectedDate);
		setNewestWeatherReport(weatherreport);
	};

	const handleDateChange = (event: any, newSelectedDate: Date | undefined) => {
		if (Platform.OS === "android" && event?.type === "dismissed") {
			// Handle cancel event
			setShowDatePicker(false);
			return;
		}
		if (newSelectedDate) {
			let newDate = selectedDate ?? new Date();
			newDate.setFullYear(
				newSelectedDate.getFullYear(),
				newSelectedDate.getMonth(),
				newSelectedDate.getDate()
			);
			setSelectedDate(newDate);
		}
		setShowDatePicker(false);
	};
	const handleTimeChange = (event: any, newSelectedDate: Date | undefined) => {
		if (Platform.OS === "android" && event?.type === "dismissed") {
			// Handle cancel event
			setShowTimePicker(false);
			return;
		}
		if (newSelectedDate) {
			let newDate = selectedDate;
			newDate.setHours(
				newSelectedDate.getHours(),
				newSelectedDate.getMinutes(),
				newSelectedDate.getSeconds(),
				newSelectedDate.getMilliseconds()
			);
			setSelectedDate(newDate);
		}
		setShowTimePicker(false);
	};

	return (
		<ScrollView>
			<Formik
				initialValues={{
					datetime: selectedDate ? selectedDate.toString() : "",
				}}
				validationSchema={validationSchema}
				onSubmit={generateWeatherButtonPress}
			>
				{({
					handleChange,
					handleBlur,
					handleSubmit,
					values,
					touched,
					errors,
				}) => (
					<View style={styles.container}>
						<Text>select Date and Time</Text>
						<View style={styles.datepicker}>
							<Button
								title={
									selectedDate ? selectedDate.toDateString() : "Pick a date"
								}
								onPress={() => setShowDatePicker(true)}
							/>
							{showDatePicker && (
								<DateTimePicker
									value={selectedDate || new Date()}
									mode="date"
									onChange={handleDateChange}
								/>
							)}
						</View>
						<View style={styles.datepicker}>
							<Button
								title={
									selectedDate ? selectedDate.toTimeString() : "Pick a time"
								}
								onPress={() => setShowTimePicker(true)}
							/>
							{showTimePicker && (
								<DateTimePicker
									value={selectedDate || new Date()}
									mode="time"
									onChange={handleTimeChange}
								/>
							)}
						</View>
						{touched.datetime && errors.datetime && (
							<Text style={styles.errorText}>{errors.datetime}</Text>
						)}
						<Button
							onPress={() => {
								handleSubmit();
							}}
							title="Generate weatherReport"
						/>
					</View>
				)}
			</Formik>

			{newestWeatherReport && (
				<WeatherReportListItem weatherReport={newestWeatherReport} />
			)}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#fff",
	},
	formContainer: {
		marginBottom: 20,
		alignItems: "center",
	},
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 10,
		width: "100%",
		paddingHorizontal: 10,
	},
	label: {
		fontSize: 16,
		marginBottom: 5,
	},
	errorText: {
		color: "red",
		fontSize: 12,
		marginBottom: 10,
	},
	datepicker: {
		width: "100%",
		marginBottom: 20,
	},
});

export default NewWeatherReport;
