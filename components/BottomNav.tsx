import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BottomNav() {
  const routes = useRouter();

  return (
    <View style={styles.container}>
      <Pressable 
        onPress={() => {routes.push("/")}}
        style={styles.navButtom}
      >
        <Icon name="home" size={24} color={"#222"} />
        <Text>Início</Text>
      </Pressable>

      <Pressable style={styles.navButtom}>
        <Icon name="cart" size={26} color={"#222"} />
        <Text>Carrinho</Text>
      </Pressable>

      <Pressable style={styles.navButtom}>
        <AwesomeIcon name="user" size={26} color={"#222"} />
        <Text>Conta</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#C9C9C9",
  },
  navButtom: {
    alignItems: "center",
    gap: 2
  }
});