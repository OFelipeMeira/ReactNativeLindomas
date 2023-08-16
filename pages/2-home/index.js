import { View, Text, Pressable } from "react-native";
import styles from "./styles.js";

export default function Home({route, navigation }) {
    const {num1, num2} = route.params
    const final = num1 + num2
  return (
    <View style={styles.container}>
        <Text style={styles.mainTxt}>
            {final}
        </Text>

        <Pressable style={styles.btn} onPress={() => navigation.navigate('Final', {final: final})}>
            <Text style={styles.btnTxt}>
                x2
            </Text>
        </Pressable>
        
    </View>
  );
}