import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

const RootLayout = () => {
  return (
    <View className='flex-1 items-center justify-center bg-red'>
      <Text className='text-3xl font-pblack'>Aora!</Text>
      <StatusBar style='auto' />
      <Link href='/home' className='text-gray'>
        Go to Home
      </Link>
    </View>
  );
};

export default RootLayout;
