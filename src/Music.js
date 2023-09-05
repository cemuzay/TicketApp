import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import MusicCardScreen from '../components/MusicCardScreen';
const Music = () => {
  return (
    <View style={styles.Container}>
      <MusicCardScreen/>
    </View>
 
  )
}
const styles = StyleSheet.create({
  Container:{
    flex:1,
  },
});
export default Music