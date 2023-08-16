import { View, Text, Pressable } from "react-native";
import styles from "./styles.js";

export default function Final({route, navigation }) {
    const {final} = route.params
  return (
    <View style={styles.container}>
      
      <Text style={styles.mainTxt}>
          {final*2}
      </Text>

      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate( 'Imgs', {qnt:final} ) }>
          <Text style={styles.btnTxt}>
            Continue
          </Text>
      </Pressable>

    </View>
  );
}