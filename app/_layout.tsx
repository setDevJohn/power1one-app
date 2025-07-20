import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Toast from 'react-native-toast-message';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Slot />
      </View>

      <BottomNav />

      <StatusBar style="dark" />
      <Toast /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
