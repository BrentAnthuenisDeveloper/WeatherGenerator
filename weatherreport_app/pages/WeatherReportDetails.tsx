import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const WeatherReportDetails = () => {
    return (
        <View style={styles.container}>
            <Text>page for viewing all of the generated weatherreports</Text>
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