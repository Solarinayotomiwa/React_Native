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

export default function Index() {

    const {user} = useGlobalContext();
    const params = useLocalSearchParams<{query?: string; filter?: string;}>();

    const {data: latestProperties, loading: latestPropertiesLoading} = useAppwrite({
        fn: getLatestProperties
    });

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
        limit: 6,
        });
    }, [params.filter, params.query]);

    const handleCardPress = (id: string) => router.push(`/properties/$[id]`);

    return (
        <SafeAreaView className=" h-full" style={{ backgroundColor: "#FCFCFC" }}>

            {/*Recommendation list*/}
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
                    {/*top nav bar*/}
                    <View className="flex flex-row items-center justify-between mt-5">
                        <View className="flex flex-row items-center">
                            <Image source={{uri:user?.avatar}} className="size-12 rounded-full" />
                            <View className="flex flex-col items-start ml-2 justify-center">
                                <Text className="text-xs font-rubik text-black-300">Good morning</Text>
                                <Text className="text-base font-rubik-medium text-black-300">{user?.name}</Text>
                            </View>
                        </View>
                        <Image source={icons.bell} className="size-6"/>
                    </View>
                    {/*search bar*/}
                    <Search />
                    {/*featured section*/}
                    <View className="mt-5">
                        <View className="flex flex-row items-center justify-between">
                            <Text className="font-rubik-medium text-xl text-black-300">Featured</Text>
                            <TouchableOpacity>
                                <Text className="font-rubik-medium text-base text-primary-100">See All</Text>
                            </TouchableOpacity>
                        </View>

                        {latestPropertiesLoading ?
                            <ActivityIndicator size ="large" className="text-primary-100" /> : !latestProperties || latestProperties.length === 0
                            ? <NoResults /> : (

                        <FlatList
                            data={latestProperties}
                            renderItem={({item}) => <FeaturedCard item = {item} onPress={() => handleCardPress(item.$id)}/>}
                            keyExtractor={(item) => item.$id}
                            horizontal
                            bounces={false}
                            showsHorizontalScrollIndicator={false}
                            contentContainerClassName="flex gap-5 mt-5"
                        />
                                )}

                    </View>
                    {/*Recommendation section*/}
                    <View className="mt-6">
                        <View className="flex flex-row items-center justify-between">
                            <Text className="font-rubik-medium text-xl text-black-300">Our Recommendation</Text>
                            <TouchableOpacity>
                                <Text className="font-rubik-medium text-base text-primary-100">See All</Text>
                            </TouchableOpacity>
                        </View>
                        {/*filters*/}
                        <Filters />

                    </View>
                </View>
            }

            />

        </SafeAreaView>

    )
}