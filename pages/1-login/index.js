import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Autenticação/fireBaseConfig/"

//() => navigation.navigate('Home', { num1: Number(num1), num2: Number(num2) })

export default function Login({ navigation }) {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const auth = getAuth(app);

  const logar = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('Imgs', {usuario: user.email})
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('D:')
      });
  }

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.mainTxt}>Login</Text>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Type your e-mail"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />

      <Pressable
        style={styles.btn}
        onPress={logar}>
        <Text style={styles.btnTxt}>
          Log in
        </Text>
      </Pressable>

      <Pressable
        style={styles.btn}
        onPress={()=>{navigation.navigate('') }}>
        <Text style={styles.btnTxt}>
          Sing up
        </Text>
      </Pressable>

    </View>
  );
}