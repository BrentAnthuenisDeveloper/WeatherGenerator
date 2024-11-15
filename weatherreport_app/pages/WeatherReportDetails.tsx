import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import WeatherReport from '../helpers/Models/WeatherReport';

const WeatherReportDetails = ({weatherreport}:{weatherreport:WeatherReport}) => {
    return (
        <View style={styles.container}>
            <Text>page for viewing the specifics of the weatherreport on {weatherreport.dateTime.toLocaleString()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default WeatherReportDetails;