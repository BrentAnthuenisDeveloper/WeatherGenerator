import { StackRouterOptions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type HeaderParams={
    title:string
}

const NewWeatherReport = ({title}:HeaderParams) => {
    const nav=useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{nav.goBack()}}><Text>back</Text></TouchableOpacity>
            <Text>{title}</Text>
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