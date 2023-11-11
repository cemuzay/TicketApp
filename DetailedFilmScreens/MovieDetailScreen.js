import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';
import Purchase from './Purchase';
import { useNavigation } from '@react-navigation/native';

const MovieDetailScreen = ({ route }) => {
  const { movie } = route.params; 
  const navigation = useNavigation();

  const handleOnPressAgora = () => {
    navigation.navigate('Purchase');
  };

  return (
    <View style={{ flex: 1 }}>
      <Card style={{ flex: 1 }}>
        <Card.Cover source={movie.source} />
        <Card.Content>
          <Title>{movie.title}</Title>
          <Paragraph>{movie.paragraph}</Paragraph>
          <Text>{movie.score}</Text>
          <Text>{movie.type}</Text>
          <Text>{movie.duration}</Text>
          <Text>{movie.price}</Text>
          <View style={styles.buttonContainer}>
            <Button onPress={handleOnPressAgora}>
              Satın al
            </Button>
            <Button onPress={() => navigation.goBack()}>
              Geri Dön
            </Button>
          </View>
          
        </Card.Content>
      </Card>
      <MapView
        style={{ flex: 1, maxHeight: 300, maxWidth: 430, justifyContent: "center", alignItems: "center", borderWidth: 2 }}
        initialRegion={{
          latitude: 38.39514218028428,
          longitude: 27.053793715341175,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 38.39514218028428,
            longitude: 27.053793715341175,
          }}
          pinColor="red"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "flex-end",
  },
});

export default MovieDetailScreen;
