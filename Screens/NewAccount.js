import { StatusBar } from 'expo-status-bar';
import { BackHandler, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { ImageBackground } from 'react-native';
import firebase from '../Config/index.js';

const auth = firebase.auth();

export default function NewAccount(props) {
  var email, password, confirmPassword;

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/background.png')}
    >
      <View
        style={{
          width: '95%',
          height: 300,
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: '#0005',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text
          style={{
            fontSize: 34,
            fontWeight: 'semibold',
            color: 'white'
          }}
        >
          Create account
        </Text>

        <TextInput
          onChangeText={text => email = text}
          style={styles.inputStyle}
          inputMode='email'
          placeholder='Please enter your email'
        />

        <TextInput
          onChangeText={text => password = text}
          style={styles.inputStyle}
          secureTextEntry={true}
          placeholder='Enter your password'
        />

        <TextInput
          onChangeText={text => confirmPassword = text}
          style={styles.inputStyle}
          secureTextEntry={true}
          placeholder='Confirm your password'
        />

        <Button
          onPress={() => {
            auth.createUserWithEmailAndPassword(email, password)
              .then(() => {
                const UID = auth.currentUser.uid;
                props.navigation.replace("Home");
              })
              .catch((err) => {
                alert(err.message);
              });
          }}
          title='Create'
          color='gray'
        />

        <Button
          onPress={() => {
            props.navigation.goBack();
          }}
          title='Return'
          color='rgb(214, 58, 30)'
        />

      </View>

      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#fff4',
    width: '90%',
    height: 52,
    textAlign: 'center',
    margin: 8,
    borderRadius: 8,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});