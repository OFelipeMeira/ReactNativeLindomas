import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from "react-native";
//import styles from "./styles.js";

//() => navigation.navigate('Home', { num1: Number(num1), num2: Number(num2) })

export default function Login({ navigation }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const logar = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('Imgs', { usuario: user.email })
      })
      .catch((error) => {
        console.log(error.code)
        console.log(error.message)
      });
  }

  return (
    <View 
    //style={styles.container}
    >

      <View>
        <Text 
          //style={styles.mainTxt}
        >Login</Text>
      </View>

      <TextInput
        //style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Type your e-mail"
      />

      <TextInput
        //style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />

      <Pressable
        //style={styles.btn}
        onPress={logar}>
        <Text 
        //style={styles.btnTxt}
        >
          Log in
        </Text>
      </Pressable>

      <Pressable
        //style={styles.btn}
        >
        <Text //style={styles.btnTxt}
        >
          Sing up
        </Text>
      </Pressable>

    </View>
  )
}