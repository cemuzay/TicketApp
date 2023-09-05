import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Searchbar, Card, Title, Paragraph, Button } from 'react-native-paper';
import { data } from '../data/data'; // Import your data source correctly
import { useNavigation } from '@react-navigation/native';

const Theather = () => {
  const navigation = useNavigation(); // Correct the variable name to 'navigation'
  const [searchQuerys, setSearchQuerys] = useState('');

  const onChangeSearch = (query) => setSearchQuerys(query);

  const handlePress = (item) => {
    navigation.navigate('TheatherDetailScreens', { movie: item });
  };

  return (
    <View style={{ flex: 1 }}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuerys}
      />

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
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
          </View>
        )}
        keyExtractor={(item) => String(item.id)} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
  },
});

export default Theather;
