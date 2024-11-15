import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WeatherReports from "../pages/WeatherReports";
import About from '../pages/About';
import DetailsStackNav from './DetailsStackNav';

const Tab = createBottomTabNavigator();

type MainNavigationParamList = {};
const AboutTabNav = () => {
	return (
		//todo: stack and tab navigator
		<Tab.Navigator>
			<Tab.Screen name="about" component={About}
			 options= {{
			 	tabBarLabel:'about'
			 }}
			/>
			<Tab.Screen name="weatherreports" component={DetailsStackNav} options={{tabBarLabel:'weather reports'}}/>
		</Tab.Navigator>
	);
};
export default AboutTabNav;