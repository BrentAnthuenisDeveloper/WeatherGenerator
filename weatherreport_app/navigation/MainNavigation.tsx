import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigatorScreenParams } from "@react-navigation/native";
import NewWeatherReport from '../components/DateTimePicker';
import WeatherReports from '../pages/WeatherReports';

type MainNavigationParamList = {
};

const Drawer = createDrawerNavigator<MainNavigationParamList>();
const MainNavigation = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				drawerStyle: {
					backgroundColor: "#c6cbef",
					width: 240,
				},
				headerShown: false,
			}}
		>
			<Drawer.Screen name="newWeatherReport" component={NewWeatherReport} />
			<Drawer.Screen name="weatherReports" component={WeatherReports} />
		</Drawer.Navigator>
	);
};
export default MainNavigation
