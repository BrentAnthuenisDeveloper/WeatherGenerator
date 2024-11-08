import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Drawer>
        <Drawer.Screen
          name="pages/NewWeatherReport"
          options={{
            drawerLabel: 'NewWeatherReport',
            title: 'NewWeatherReport',
          }}
        />
      </Drawer>
      <Drawer>
        <Drawer.Screen
          name="pages/WeatherReports"
          options={{
            drawerLabel: 'WeatherReports',
            title: 'WeatherReports',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
