import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Purchase = () => {
  const showtimes = [
    { time: '11:00', couch: 'A' },
    { time: '13:30', couch: 'B' },
    { time: '16:15', couch: 'C' },
    { time: '18:00', couch: 'D' },
  ];

  const navigation = useNavigation();
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const [selectedCouch, setSelectedCouch] = useState(null); 

  const handleShowtimeSelect = (time) => {
    setSelectedShowtime(time);
  };

  const handleCouchSelect = (couch) => {
    setSelectedCouch(couch); 
  };

  const handlePressPay = () => {
    if (selectedShowtime && selectedCouch) {
      navigation.navigate('Payment'); 
    } else {
      alert('Please select a showtime and a couch before proceeding.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 3 }}>
        <Text>Seans Seçiniz</Text>
      </View>
      <View>
        {showtimes.map((showtime, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.cardContainer,
              selectedShowtime === showtime.time && styles.selectedShowtime,
            ]}
            onPress={() => handleShowtimeSelect(showtime.time)}
          >
            <Card style={styles.cardStyle}>
              <View style={styles.showtimeInfo}>
                <Text style={styles.timeText}>{showtime.time}</Text>
                <Text>{showtime.couch}</Text>
                <Text>{showtime.price}</Text>
              </View>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.couchContainer}>
        {showtimes.map((showtime, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCouchSelect(showtime.couch)} 
            style={[
              styles.couchIcon,
              selectedCouch === showtime.couch && styles.selectedCouchIcon,
            ]}
          >
            <FontAwesomeIcon icon={faCouch} size={30} style={{ color: selectedCouch === showtime.couch ? 'red' : 'black' }} />
          </TouchableOpacity>
        ))}
      </View>
      <View>
        <Button onPress={handlePressPay}>Tıkla</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  couchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    maxWidth: 300,
    alignSelf: 'center',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    padding: 5,
  },
  selectedShowtime: {
    borderColor: 'blue', 
  },
  cardStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  showtimeInfo: {
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeText: {
    fontWeight: 'bold',
  },
  couchIcon: {
    borderColor: 'transparent',
    borderRadius: 5,
    padding: 5,
  },
  selectedCouchIcon: {
    borderColor: 'blue', 
  },
});

export default Purchase;
