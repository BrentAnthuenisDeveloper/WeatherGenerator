import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, ScrollView, Platform } from "react-native";
//import DatePicker from "react-native-date-picker";
import WeatherReportListItem from "../components/WeatherReportListItem";
import WeatherReport from "../helpers/Models/WeatherReport";
import WeatherGenerator from "../helpers/WeatherGenerator";
import { Formik } from 'formik';
import * as Yup from "yup";
import DateTimePicker from '@react-native-community/datetimepicker';

const validationSchema = Yup.object().shape({
	datetime: Yup.date().required("please select a date and a time"),
})

const NewWeatherReport = () => {
	const [newestWeatherReport, setNewestWeatherReport] = useState<WeatherReport | undefined>(undefined);
	const [showDatePicker, setShowDatePicker] = useState(false);
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());
	const generator = new WeatherGenerator();

	const generateWeatherButtonPress = () => {
		if(selectedDate===undefined){
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

	const handleDateChange = (event: any, selectedDate: Date | undefined) => {
		const currentDate = selectedDate || new Date();
		setShowDatePicker(Platform.OS === "ios" ? true : false); // Keep it open on iOS
		setSelectedDate(currentDate);
	};

	return (
		<ScrollView>
			<Formik
				initialValues={{ datetime: selectedDate ? selectedDate.toString() : "" }}
				validationSchema={validationSchema}
				onSubmit={generateWeatherButtonPress}
			>
				{({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
					<View style={styles.container}>
						<Text>select Date and Time</Text>
						<View style={styles.datepicker}>
							<Button
								title={selectedDate ? selectedDate.toLocaleString() : "Pick a date"}
								onPress={() => setShowDatePicker(true)}
							/>
							{showDatePicker && (
								<DateTimePicker
									value={selectedDate || new Date()}
									mode="datetime" // Use "time" for a time picker, or "datetime" for both
									display="default"
									onChange={handleDateChange}
								/>
							)}
						</View>
						{touched.datetime && errors.datetime && (
							<Text style={styles.errorText}>{errors.datetime}</Text>
						)}
						<Button
							onPress={() => { handleSubmit() }}
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
