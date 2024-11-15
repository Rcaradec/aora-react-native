import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text>Aora!</Text>
      <StatusBar style='auto' />
      <Link href='/profile' style={{ color: "#c5c5ef" }}>
        Go to Profile
      </Link>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
