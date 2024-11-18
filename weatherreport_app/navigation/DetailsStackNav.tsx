import { createStackNavigator } from "@react-navigation/stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import WeatherReports from "../pages/WeatherReports";
import { Header } from "react-native/Libraries/NewAppScreen";
import WeatherReportDetails from "../pages/WeatherReportDetails";
import WeatherReport from "../helpers/Models/WeatherReport";

export type DetailsStackNavParamList = {
	weatherReports: undefined,
	weatherReportDetails: { weatherreport: WeatherReport }
};
const Stack = createStackNavigator<DetailsStackNavParamList>();


const DetailsStackNav = () => {
	return (
		//todo: stack and tab navigator
		<Stack.Navigator screenOptions={({ route }) => ({
			headerShown: true,
			header: () => <Header title={route.name} />, // Use route.name for dynamic title
		  })}>
			<Stack.Screen name="weatherReports" component={WeatherReports}
			// options: {
			// 	headerTitle: (props) => <Header {...props} />,
			// }
			/>
			<Stack.Screen name="weatherReportDetails" component={WeatherReportDetails} />
		</Stack.Navigator>
	);
};
export default DetailsStackNav;
