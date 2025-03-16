import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import icons from "@/constants/icons";
import React from "react";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";
import { login } from "@/lib/appwrite";

const OAuth = () => {
    const { refetch, loading, isLoggedIn } = useGlobalContext();

    if (!loading && isLoggedIn) return <Redirect href="/" />;

    const handleLogin = async () => {
        const result = await login();

        if (result) {
            refetch();
        } else {
            Alert.alert("Error", "Failed to login");
        }
    };

    return (
        <View className="flex flex-col items-center mt-6">
            {/* Horizontal Line with OR */}
            <View className="flex-row items-center w-full px-4">
                <View className="flex-1" style={{ height: 1, backgroundColor: "#CED1DD", marginRight: 12 }} />
                <Text className="mx-4 text-sm text-gray-500">Or</Text>
                <View className="flex-1" style={{ height: 1, backgroundColor: "#CED1DD", marginLeft: 12 }} />
            </View>

            {/* Google Login Button */}
            <TouchableOpacity
                onPress={handleLogin}
                className="bg-white rounded-full w-full py-4 mt-6 flex-row items-center justify-center"
                style={{ borderWidth: 1, borderColor: "#CED1DD"}}
            >
                <Image source={icons.google} className="h-5 w-5" resizeMode="contain" />
                <Text className=" text-base font-rubik-medium text-black ml-2">Continue with Google</Text>
            </TouchableOpacity>
        </View>
    );
};

export default OAuth;
