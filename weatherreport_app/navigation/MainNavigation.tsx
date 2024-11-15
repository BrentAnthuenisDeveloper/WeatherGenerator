import { createStackNavigator } from "@react-navigation/stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import NewWeatherReport from "../components/DateTimePicker";
import WeatherReports from "../pages/WeatherReports";
import { Header } from "react-native/Libraries/NewAppScreen";

const Stack = createStackNavigator();

type MainNavigationParamList = {};
const MainNavigation = () => {
	return (
		//todo: stack and tab navigator
		<Stack.Navigator>
			<Stack.Screen name="weatherReports" component={WeatherReports}
			// options: {
			// 	headerTitle: (props) => <Header {...props} />,
			// }
			/>
			<Stack.Screen name="newWeatherReport" component={NewWeatherReport} />
		</Stack.Navigator>
	);
};
export default MainNavigation;
