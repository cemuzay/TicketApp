import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Searchbar placeholder='Search' onChangeText={handleSearch} value={searchQuery} style={styles.searchBar} />
        <Icon name="filter" size={24} color="white" style={styles.filterIcon} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  searchBar: {
    flex: 1,
    marginRight: 10,
  },
  filterIcon: {
    color:'indigo',
  },
});

export default Search;
