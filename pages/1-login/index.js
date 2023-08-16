import React from 'react';
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles.js";
import { Button } from 'react-native-web';

export default function Login({ navigation }) {
  const [num1, onChangeNum1] = React.useState('')
  const [num2, onChangeNum2] = React.useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.mainTxt}>Digite 2 numeros a serem somados</Text>

      <TextInput
      style={styles.input}
      onChangeText={onChangeNum1}
      placeholder="1º Numero"
      />

      <TextInput
      style={styles.input}
      onChangeText={onChangeNum2}
      placeholder="2º Numero"
      />

      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate('Home', {num1:Number(num1), num2:Number(num2)}) }>
          <Text style={styles.btnTxt}>
            Continue
          </Text>
      </Pressable>

    </View>
  );
}