import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { data } from '../data/data';
import Search from './Search';

const CardScreen = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [ascendingOrder, setAscendingOrder] = useState(true); // State variable for sorting order
  const navigation = useNavigation();

  const handleSearch = (query) => {
    const filteredResults = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };
  const handleFilter = (query) => {
    setSearchQuery(query);
    const filteredResults = data.filter((item) =>
      item.title.toLowerCase() === query.toLowerCase()
    );
    setSearchResults(filteredResults);
  };
  

  const toggleSortingOrder = () => {
    // Toggle the sorting order and update the state
    setAscendingOrder((prevOrder) => !prevOrder);
  };

  const sortData = (dataToSort) => {
    // Sort the data based on the sorting order
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
      <Card.Cover source={item.source} />
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{item.type}</Paragraph>
        <Paragraph>{item.duration}</Paragraph>
        <Paragraph>{item.score}</Paragraph>
        <Button onPress={() => handlePress(item)}>Detay</Button>
      </Card.Content>
    </Card>
  );

  const handlePress = (item) => {
    navigation.navigate('Detay', { movie: item });
  };

  return (
    <View>
      <Search handleSearch={handleSearch} handleFilter={toggleSortingOrder} />
      <FlatList
        data={searchResults.length === 0 ? data : sortData(searchResults)}
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
});

export default CardScreen;
