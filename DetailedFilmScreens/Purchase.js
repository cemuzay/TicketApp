import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const CouchSelection = ({ showtime, selectedCouches, handleCouchSelect }) => {
  const couches = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

  const isCouchSelected = (couch) => selectedCouches.includes(couch);

  return (
    <View style={styles.couchContainer}>
      {couches.map((couch, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleCouchSelect(showtime.time, couch)}
          style={[
            styles.couchIcon,
            isCouchSelected(couch) && styles.selectedCouchIcon,
          ]}
        >
          <FontAwesomeIcon
            icon={faCouch}
            size={30}
            style={{ color: isCouchSelected(couch) ? 'red' : 'black' }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Purchase = () => {
  const showtimes = [
    { time: '11:00' },
    { time: '13:30' },
    { time: '16:15' },
    { time: '18:00' },
  ];

  const navigation = useNavigation();
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const [selectedCouches, setSelectedCouches] = useState({});

  const handleShowtimeSelect = (time) => {
    setSelectedShowtime(time);
  };

  const handleCouchSelect = (time, couch) => {
    setSelectedCouches((prev) => {
      const isSelected = prev[time]?.includes(couch);

      if (isSelected) {
      
        const updatedCouches = { ...prev };
        updatedCouches[time] = updatedCouches[time].filter((selectedCouch) => selectedCouch !== couch);
        return updatedCouches;
      } else {
        return { ...prev, [time]: [...(prev[time] || []), couch] };
      }
    });
  };

  const handlePressPay = () => {
   
      navigation.navigate('Payment');
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
              </View>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
      {showtimes.map((showtime, index) => (
        <CouchSelection
          key={index}
          showtime={showtime}
          selectedCouches={selectedCouches[showtime.time] || []}
          handleCouchSelect={handleCouchSelect}
        />
      ))}
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
