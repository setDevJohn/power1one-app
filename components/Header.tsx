import { Image, StyleSheet, View } from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';
import power1oneLogo from "../assets/images/power1one.png";


export default function Header() {
  return (
    <View style={styles.container}>
      <Icon name="menu" size={30} color={"#222"} />

      <View>
        <Image source={power1oneLogo} style={styles.logo} resizeMode="contain"/>
      </View>

      <Icon name="search" size={30} color={"#222"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 35,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#C9C9C9",
  }, 
  logo: {
    width: 100,
    height: 50,
  },
});