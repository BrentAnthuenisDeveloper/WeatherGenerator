import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const WeatherReports = () => {
    return (
        <View style={styles.container}>
            <FlatList></FlatList>
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

export default WeatherReports;

