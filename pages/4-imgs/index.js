import { View, Text, Image } from "react-native";
import styles from "./styles.js";
import { FlatList } from "react-native-gesture-handler";
import { Shadow } from "react-native-shadow-2";

export default function Imgs({ route, navigation }) {
  const { n } = route.params
  const lista = [
    { nome: 'a', idade: 1,photo: 1 },
    { nome: 'b', idade: 2,photo: 2 },
    { nome: 'c', idade: 3,photo: 3 },
    { nome: 'd', idade: 4,photo: 4 },
    { nome: 'e', idade: 5,photo: 5 },
    { nome: 'f', idade: 6,photo: 6 }
  ]
  return (
    <View style={styles.container}>

      <Text style={styles.mainTxt}>
        Final Page
      </Text>
      <Text style={styles.mainTxt}>
        {n}
      </Text>

      <FlatList
        numColumns={2}
        data={lista}
        renderItem={({ item }) => {
          return (
            <Shadow>
              <View style={styles.foto}>
                <Image source={require('../../assets/image-'+item.photo+'.png')} style={styles.img}/>
                {item.nome}
              </View>
            </Shadow>
          )
        }}
      />
    </View>
  );
}