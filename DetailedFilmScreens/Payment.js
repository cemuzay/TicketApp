import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Payment = () => {
    const Navgation=useNavigation();
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    console.log('Card Number:', cardNumber);
    console.log('Expiration Date:', expirationDate);
    console.log('CVV:', cvv);
    Alert.alert('Ödemeniz Başarıyla Gerçekleşmiştir.');
    Navgation.navigate('film')
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Credit Card Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Kart Numaranız:"
        onChangeText={(text) => setCardNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Son Kullanma Tarihi (MM/YY)"
        onChangeText={(text) => setExpirationDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        onChangeText={(text) => setCvv(text)}
        secureTextEntry={true} 
      />
      <Button title="Öde" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:15,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default Payment;
