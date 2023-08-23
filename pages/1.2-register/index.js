import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Autenticação/fireBaseConfig/"

//() => navigation.navigate('Home', { num1: Number(num1), num2: Number(num2) })

export default function Login({ route, navigation }) {

  return (
    <View style={styles.container}>

    </View>
  );
}