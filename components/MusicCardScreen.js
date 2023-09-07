import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Title, Paragraph, Button, IconButton } from 'react-native-paper'; // Import IconButton
import { useNavigation } from '@react-navigation/native';
import { ConcertData } from '../data/ConcertData';
import MusicSearch from '../components/MusicSearch';

const MusicCardScreen = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [ascendingOrder, setAscendingOrder] = useState(true);
  const navigation = useNavigation();

  const handleSearch = (query) => {
    const filteredResults = ConcertData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const toggleSortingOrder = () => {
    setAscendingOrder((prevOrder) => !prevOrder);
  };

  const sortData = (dataToSort) => {
    return dataToSort.slice().sort((a, b) => {
      const nameA = a.title.toLowerCase();
      const nameB = b.title.toLowerCase();
      if (ascendingOrder) {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  };

  const renderItem = ({ item }) => (
    <Card style={styles.cardContainer}>
      <Card.Cover source={{ uri: item.source.uri }} />
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{item.paragraph}</Paragraph>
        <Title>{item.Date}</Title>
        <Title>{item.Time}</Title>
        <Title>{item.price}</Title>
        <Button onPress={() => handlePress(item)}>Detay</Button>
      </Card.Content>
    </Card>
  );

  const sortAndFilterData = () => {
    let dataToSort = searchResults.length === 0 ? ConcertData : [...searchResults];
    return sortData(dataToSort);
  };

  const handlePress = (item) => {
    navigation.navigate('MusicDetailScreen', { movie: item });
  };

  return (
    <View style={{ flex: 1 }}>
      <MusicSearch handleSearch={handleSearch} handleFilter={toggleSortingOrder} />
      <IconButton
        icon="filter" 
        onPress={toggleSortingOrder}
        style={styles.filterIcon}
      />
      <FlatList
        data={sortAndFilterData()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
  },
  filterIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
  },
});

export default MusicCardScreen;
