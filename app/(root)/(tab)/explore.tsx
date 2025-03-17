import {Link, router, useLocalSearchParams} from 'expo-router'
import {Text, View, Image, TouchableOpacity, ScrollView, FlatList, Button, ActivityIndicator} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/component/search";
import {Card, FeaturedCard} from "@/component/cards";
import Filters from "@/component/filters";
import {useGlobalContext} from "@/lib/global-provider";
import seed from "@/lib/seed";
import {useAppwrite} from "@/lib/useAppwrite";
import {getLatestProperties, getProperties} from "@/lib/appwrite";
import {useEffect} from "react";
import NoResults from "@/component/NoResults";

export default function Explore() {

    const params = useLocalSearchParams<{query?: string; filter?: string;}>();

    const {data: properties, loading, refetch} = useAppwrite({
        fn: getProperties,
        params: {
            filter: params.filter!,
            query: params.query!,
            limit: 6,
        },
        skip: true
    })

    useEffect(() => {
        refetch({
            filter: params.filter!,
            query: params.query!,
            limit: 20,
        });
    }, [params.filter, params.query]);

    const handleCardPress = (id: string) => router.push(`/properties/$[id]`);

    return (
        <SafeAreaView className=" h-full" style={{ backgroundColor: "#FCFCFC" }}>

            {/*Recommendation section*/}
            <FlatList
                data={properties}
                renderItem={({item}) => <Card item = {item} onPress={() => handleCardPress(item.$id)}/>}
                keyExtractor={(item) => item.$id}
                numColumns={2}
                contentContainerClassName="pb-32"
                columnWrapperClassName="flex gap-4 px-5 mt-4"
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={
                    loading ? (
                        <ActivityIndicator size="large" className=" text-primary-100 mt-5" />
                    ) : <NoResults />
                }
                ListHeaderComponent={

                <View className="px-5">

                    {/*Top Nav*/}
                    <View className= "flex flex-row items-center justify-between mt-2">

                        <TouchableOpacity onPress={() => router.back()} className= " flex flex-row justify-center items-center bg-primary-200 size-12 rounded-full" >
                            <Image className="size-6" source={icons.backArrow}/>

                        </TouchableOpacity>

                        <Text className= "font-rubik-semibold text-base ">Search For Your Ideal Home</Text>

                        <Image className="p-2.5 size-12" source={icons.bell}/>


                    </View>

                    {/*search component*/}
                    <Search/>

                    {/*Text & filters*/}
                    <View className="mt-2">
                        {/*filters*/}
                        <Filters />
                        <Text className=" mt-5 text-black-300 text-xl font-rubik-medium"> Found {properties?.length} Properties </Text>
                    </View>

                </View>


                }

            />

        </SafeAreaView>

    )
}