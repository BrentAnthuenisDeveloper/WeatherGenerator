import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WeatherReports from "../pages/WeatherReports";
import About from "../pages/About";
import DetailsStackNav from "./DetailsStackNav";
import { Icon } from "react-native-vector-icons/Icon";

const Tab = createBottomTabNavigator();

type MainNavigationParamList = {};
const AboutTabNav = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarActiveBackgroundColor: "blue",
				tabBarActiveTintColor: "calk",
				tabBarIcon: ({ focused, color, size }) => {
					let iconName: string;

					if (route.name === "about") {
						iconName = focused ? "Info" : "InfoOutlined";
					} else if (route.name === "weatherreports") {
						iconName = focused ? "ViewList" : "ViewListOutlined";
					}
					// Return the icon component
					return <Icon name={iconName} size={size} color={color} />;
				},
				tabBarInactiveTintColor: "gray",
			})}
		>
			<Tab.Screen
				name="about"
				component={About}
				options={{
					tabBarLabel: "about",
				}}
			/>
			<Tab.Screen
				name="weatherreports"
				component={DetailsStackNav}
				options={{ tabBarLabel: "weather reports" }}
			/>
		</Tab.Navigator>
	);
};
export default AboutTabNav;
