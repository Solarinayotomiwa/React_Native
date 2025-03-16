
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useGlobalContext } from "@/lib/global-provider";

export default function AppLayout() {
    const { loading, isLoggedIn } = useGlobalContext();

    if (loading) {
        return (
            <SafeAreaView className="bg-white h-full flex justify-center items-center">
                <ActivityIndicator className="text-primary-100" size="large" />
            </SafeAreaView>
        );
    }

    if (!isLoggedIn) {
        return <Redirect href="/welcome" />;
    }

    return <Slot />;
}
