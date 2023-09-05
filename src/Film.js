import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Search from '../components/Search';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardScreen from '../components/CardScreen';
const Film = () => {
  return (
    <View style={{ flex: 1 }}>
        <CardScreen/>
    </View>

  );
};

const styles = StyleSheet.create({
  Container:{
    flex:1,
  },
});

export default Film;
