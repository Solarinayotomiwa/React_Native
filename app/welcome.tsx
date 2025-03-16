import {View, Text, ScrollView, Image, TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';
import images from "@/constants/images";
import icons from '@/constants/icons';
import {login} from "@/lib/appwrite";
import {useGlobalContext} from "@/lib/global-provider";
import {Redirect, router} from "expo-router";

const Welcome = () => {
    const {refetch, loading, isLoggedIn} = useGlobalContext();

    if(!loading && isLoggedIn) return <Redirect href="/" />;

    const handleLogin = async () => {
        const result = await login();

        if (result) {
            refetch();
        } else {
            Alert.alert("Error", "failed to login")
        }
    };


    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerClassName="h-full">
            <Image source={images.onboarding} className="w-full h-3/5" resizeMode="contain"/>
                <View className="px-10 mt-10">
                    <Text className="text-sm text-center uppercase font-rubik text-black-200">
                        Welcome to Restate
                    </Text>

                    <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
                        Let's Get You Closer To Your Ideal Home
                    </Text>

                    <TouchableOpacity onPress={handleLogin} className="bg-primary-100 rounded-full w-full py-4 mt-6">
                       <View className="flex flex-row items-center justify-center">
                           <Text className="text-base font-rubik-medium text-white">Sign up</Text>
                       </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLogin}
                                      className="bg-white rounded-full w-full py-4 mt-6 flex-row items-center justify-center"
                                      style={{ borderWidth: 1, borderColor: "#CED1DD"}}
                    >
                       <View className="flex flex-row items-center justify-center">
                           <Image
                               source={icons.google}
                               className="h-5 w-5"
                               resizeMode="contain"
                           />
                           <Text className="text-base font-rubik-medium text-black-300 ml-2">Continue with Google</Text>
                       </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Welcome


