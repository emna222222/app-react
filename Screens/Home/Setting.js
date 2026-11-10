import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet, Image } from 'react-native'
import firebase from '../../Config/index.js';
const database = firebase.database(); 

export default function Setting() {
const ref_accounts = database.ref("Accounts");


  const [Nom, setNom] = useState('anonym');
  const [Pseudo, setPseudo] = useState('');
  const [Numero, setNumero] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Setting</Text>

      <Image
        style={styles.avatar}
        source={require('../../assets/profile.png')}
      />

      <TextInput
        style={styles.textInputStyle}
        value={Nom}
        onChangeText={(text) => { setNom(text) }}
        placeholder="Nom"
      />
      <TextInput
        style={styles.textInputStyle}
        value={Pseudo}
        onChangeText={(text) => { setPseudo(text) }}
        placeholder="Pseudo"
      />
      <TextInput
        value={Numero}
        onChangeText={(text) => { setNumero(text) }}
        style={styles.textInputStyle}
        placeholder="Numero"
        keyboardType="phone-pad"
      />

      <Pressable 
      
      onPress={() => { 
        const key = ref_accounts.push().key;
        const ref_MyAccount = ref_accounts.child(key);
        ref_MyAccount.set({
          Nom,
          Pseudo,
          Numero
        });
      }}>

      <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    width: '100%',
    textAlign: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  textInputStyle: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#0003',
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fffe',
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 20,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgba(53, 145, 249, 1)',
  },
})
