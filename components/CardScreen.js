import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Title, Paragraph, Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { data } from '../data/data';
import Search from './Search';

const CardScreen = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [ascendingOrder, setAscendingOrder] = useState(true);
  const navigation = useNavigation();

  const handleSearch = (query) => {
    const filteredResults = data.filter((item) =>
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

  const sortAndFilterData = () => {
    let dataToSort = searchResults.length === 0 ? data : [...searchResults];
    return sortData(dataToSort);
  };

  const handlePress = (item) => {
    navigation.navigate('Detay', { movie: item });
  };

  return (
    <View>
      <Search handleSearch={handleSearch} handleFilter={toggleSortingOrder} />
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

export default CardScreen;
