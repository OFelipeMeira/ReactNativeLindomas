import { View, Text, Image } from "react-native";
import styles from "./styles.js";

export default function SingleImage({ route }) {
  const { foto, name } = route.params

  return (
    <View style={styles.container}>

      <Text>{name}</Text>

      <Image 
      source={require('../../assets/image-' + foto + '.png')}
      style={{width:200, height:200}}
      />

    </View>
  );
}