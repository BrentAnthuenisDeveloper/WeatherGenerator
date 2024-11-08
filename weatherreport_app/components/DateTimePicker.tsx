import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const NewWeatherReport = () => {
    return (
        <View style={styles.container}>
            <Text>this is a datetimepicker</Text>
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

export default NewWeatherReport;