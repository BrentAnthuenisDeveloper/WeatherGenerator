import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const NewWeatherReport = () => {
  return (
    <View style={styles.container}>
      <Text>page for generating a new weather report</Text>
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