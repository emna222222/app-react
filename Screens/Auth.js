import { StatusBar } from 'expo-status-bar';
import { BackHandler, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { ImageBackground } from 'react-native-web';
import firebase from '../Config';
const auth = firebase.auth();


export default function Auth(props) {
  var email, password ;
  return (
    <ImageBackground style={styles.container}
    source = {require('../assets/background.png')}>
      <View style={{width: '95%',
         height : 300 ,
          borderWidth :1, 
         borderRadius : 10 ,
         backgroundColor :'#0005' ,
         alignItems :'center', 
         justifyContent : 'center'
         }}>
      <Text style={{fontSize : 34 , 
        fontWeight : 'semibold' , 
        color : 'white'
        }}>
          Welcome back
          </Text>
          <TextInput onChangeText={text=>email=text} style={styles.inputStyle} inputModel='email' placeholder='Please enter your email'/>
          <TextInput onChangeText={text=>password=text}  style={styles.inputStyle} secureTextEntry={true} placeholder='Entre your password'/>
          <Button onPress={()=>{auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        const UID = auth.currentUser.uid;
        props.navigation.navigate('Home');
      })
      .catch((error) => {
        alert(error.message);
      });}}   title='Connect' color='gray'></Button>
          <Button onPress={BackHandler.exitApp} title='Exit' color='#509df5ff'></Button>
          <Text onPress={()=>{props.navigation.navigate('NewAccount')}} >Create new account</Text>
          </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  inputStyle : {
    backgroundColor : '#fff4',
    width : '90%',
    height : 52,
    textAlign : 'center',
    margin : 8 ,
    borderRadius : 8,
    color : 'white',
    fontWeight : 'bold',
    fontSize : 16
  },
 

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
