import React, { useState } from "react";
import { StyleSheet, View, Text, Button,TextInput } from "react-native";
//import DatePicker from "react-native-date-picker";
import WeatherReportListItem from "../components/WeatherReportListItem";
import WeatherReport from "../helpers/Models/WeatherReport";
import WeatherGenerator from "../helpers/WeatherGenerator";
import { Formik } from 'formik';

const NewWeatherReport = () => {
	const [newestWeatherReport, setNewestWeatherReport] = useState<
		WeatherReport | undefined
	>(undefined);
	const generator = new WeatherGenerator();
	const generateWeatherButtonPress = ({datetime}:{datetime:string}) => {
		const datetimeObject = new Date(datetime)
		const weatherreport: WeatherReport =
			generator.GenerateRandomWeatherReport(datetimeObject);
		setNewestWeatherReport(weatherreport);
	};
	return (
		<View>
			<Formik initialValues={{datetime:""}} onSubmit={generateWeatherButtonPress}>
				{({ handleChange, handleBlur, handleSubmit, values }) => (
					<View style={styles.container}>
						<TextInput
							onChangeText={handleChange('datetime')}
							onBlur={handleBlur("datetime")}
							value={values.datetime}
						/>
						<Button
							onPress={handleSubmit}
							title="Generate weatherReport"
						/>

					</View>
				)}
			</Formik>

			<WeatherReportListItem
				weatherReport={newestWeatherReport}
			></WeatherReportListItem>
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
