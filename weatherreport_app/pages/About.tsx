import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import WeatherReport from '../helpers/Models/WeatherReport';

const About = () => {
    return (
        <View style={styles.container}>
            <Text>
                the purpose of this app is to generate and track weather for a fictitious world. {'\n'}
                Use the tabs to navigate between screens
                </Text>
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

export default About;