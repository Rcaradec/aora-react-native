import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

const RootLayout = () => {
  return (
    <View className='flex-1 items-center justify-center bg-red'>
      <Text className='text-5xl'>Aora!</Text>
      <StatusBar style='auto' />
      <Link href='/profile' style={{ color: "#c5c5ef" }}>
        Go to Profile
      </Link>
    </View>
  );
};

export default RootLayout;
