import {View, Text, Image, TouchableOpacity, ScrollView, Platform} from 'react-native'
import React from 'react'
import {router, useLocalSearchParams} from "expo-router";
import icons from "@/constants/icons";
import {SafeAreaView} from "react-native-safe-area-context";
import images from "@/constants/images";
import {Dimensions} from "react-native";
import {FacilityCards, TitleCards} from "@/component/facilityCards";
import IdNav from "@/component/IdNav";

const windowHeight = Dimensions.get("window").height;

const Property = () => {
    const {id} = useLocalSearchParams();

    return (

                <View className="flex-1">

            <ScrollView showsVerticalScrollIndicator={false}className=" h-full" style={{ backgroundColor: "#FCFCFC"}}>

                //learn how to create a top nav bar

            // image and title
            <View className="relative w-full" style={{ height: windowHeight / 2 }}>
                //image
                    <Image className="absolute size-full" resizeMode="cover" source={images.japan} />
                    <Image className="absolute top-0 w-full" source={images.whiteGradient} />

            <View className="flex flex-row items-center justify-between px-5" style={{
                top: Platform.OS === "ios" ? 60 : 20,
            }}>

                //back arrow
                <TouchableOpacity onPress={() => router.back()}>
                <Image source={icons.backArrow} className="size-8" />
                </TouchableOpacity>

                //heart & send icon
                <View className="flex flex-row items-center">
                    <Image source={icons.heart} className="size-8 mx-4" tintColor= "#191d31" />
                    <Image source={icons.send} className="size-8" />
                </View>

            </View>
            </View>

                // Properties
                <View className="px-5 pb-40">

                    //Title component
                    <View className="relative flex flex-col items-start mt-6 ">

                        //Title
                        <Text className="text-2xl font-rubik-semibold text-black-300">Modern Apartment</Text>

                        //review and home type
                        <View className="flex flex-row my-4 items-center">
                            //button
                            <View className="rounded-full items-center justify-center" style={{ width: 84, height: 24, backgroundColor: "#0061FF0A" }}>
                                <Text className=" font-rubik-medium text-xs text-primary-100"> Apartment </Text>
                            </View>
                            //rating
                            <View className="px-2.5 flex flex-row">
                                <Image source={icons.star} className="size-5 " />
                                <Text className="font-rubik text-sm text-black-200"> 4.8 (1,234 reviews)</Text>
                            </View>

                        </View>

                            //facility buttons
                        <View className="flex flex-row items-center ">
                            <TitleCards image={icons.bed} text="8 beds" />
                            <View className="mx-2">
                            <TitleCards image={icons.bath} text="3 baths" />
                            </View>
                            <TitleCards image={icons.area} text="2000 sqft" />
                        </View>

                        //Agent

                        <View className="flex flex-col items-start border-t border-primary-200 mt-7 pt-7 w-full">
                            //Title
                            <Text className="font-rubik-medium text-xl "> Agent </Text>

                            //contact card
                            <View className="flex flex-row items-center justify-between mt-4 w-full">

                                //profile
                                <View className="flex flex-row items-center justify-between">
                                <Image className="rounded-full" style={{width:60, height:60}} source={images.avatar}/>

                                //profile details
                                <View className="flex flex-col items-start ml-4">
                                    <Text className="text-lg font-rubik-medium" > Natasya Wilodra </Text>
                                    <Text className="text-sm font-rubik mt-1 text-black-200" > Owner </Text>
                                </View>
                                </View>

                                //Contact buttons
                                <View className="flex flex-row items-center justify-between">
                                    <Image style={{width: 26, height: 26}} source={icons.chat}/>
                                    <Image style={{width: 26, height: 26, marginLeft:20}} source={icons.phone}/>
                                </View>

                            </View>
                                //Overview
                                <View className="flex flex-col items-start w-full mt-7">
                                    <Text className="text-lg font-rubik-medium">Overview</Text>
                                    <Text className="text-base font-rubik mt-3 text-black-200" style={{lineHeight: 24 }} >Sleek, modern 2-bedroom apartment with open living space, high-end finishes, and city views. Minutes from downtown, dining, and transit.</Text>

                                </View>

                            //Facilities
                            <View className="flex flex-col items-start mt-7">
                                <Text className="font-rubik-medium text-xl">Facilities</Text>
                                <View className="flex flex-row items-start justify-between w-full mt-5">
                                <FacilityCards image={icons.carPark} text="Car parking" />
                                <FacilityCards image={icons.swim} text="Swimming" />
                                <FacilityCards image={icons.dumbell} text="Gym & Fitness" />
                                <FacilityCards image={icons.cutlery} text="Restuarant" />
                                </View>
                                <View className="flex flex-row items-start justify-between w-full mt-5">
                                <FacilityCards image={icons.wifi} text="Wi-fi & Networks" />
                                <FacilityCards image={icons.dog} text="Pet Center" />
                                <FacilityCards image={icons.run} text="Sport Center" />
                                <FacilityCards image={icons.laundry} text="Laundry" />
                                </View>
                            </View>

                            //Gallery
                            <View className="flex flex-col items-start mt-7">
                                //Text
                                <Text className="font-rubik-medium text-xl">Gallery</Text>
                                //Images
                                <View className="flex flex-row items-center justify-between mt-5 w-full">
                                    <Image style={{width: 110, maxWidth:118, height: 110, borderRadius: 10}} source={images.newYork}/>
                                    <Image style={{width: 110, maxWidth:118, height: 110, borderRadius: 10}} source={images.newYork}/>
                                    <View style={{width: 110, maxWidth:118, height: 110, borderRadius: 10, flex: 0}}>
                                        <View style={{backgroundColor: "#0000004D", position: "absolute", width: "100%",
                                        height: "100%", zIndex: 20, alignItems: "center", justifyContent: "center", borderRadius: 10}}>
                                            <Text className="text-white text-lg font-rubik-medium">20+</Text> </View>
                                        <Image style={{width: "100%", height: "100%", borderRadius: 10}} source={images.newYork}/>
                                    </View>
                                </View>
                            </View>

                            //Location
                            <View className="flex flex-col items-start mt-7 w-full">
                                //Text
                                <Text className="font-rubik-medium text-xl">Location</Text>
                                //address
                                <View className="flex flex-row items-center justify-between my-4">
                                    <Image className="size-5" source={icons.location}/>
                                    <Text className="text-sm font-rubik text-black-200 ml-2">Grand City St. 100, New York, United States</Text>
                                </View>
                                //image
                                <Image className="w-full" style={{height: 200, borderRadius: 16}} source={images.map}/>
                            </View>

                        </View>

                        //Reviews
                        <View className="flex flex-col items-start border-t border-primary-200 mt-8 pt-7 w-full">
                            //review text & see all
                            <View className="flex flex-row items-center justify-between w-full">
                                <View className="flex-row items-center justify-start">
                                    <Image className="size-6" source={icons.star}/>
                                    <Text className="font-rubik-medium text-lg ml-1">4.8 (1,275 reviews)</Text>
                                </View>
                                <Text className="font-rubik-medium text-base text-primary-100">See All</Text>
                            </View>

                            //user reviews
                            <View className="flex-row items-center justify-start mt-6">
                                <Image style={{width:40, height:40}} source={images.avatar}/>
                                <Text className="font-rubik-medium text-base ml-2.5">Ayotomiwa Solarin</Text>
                            </View>

                            //user review text
                            <Text className ="text-base font-rubik mt-2.5 text-black-200" style={{lineHeight: 24 }} >
                                I really think like the interior design. Looks like I'll feel at home in this place 😍
                            </Text>

                            //like
                            <View className="flex flex-row items-center justify-between w-full mt-4">

                                <View className="flex-row items-center justify-start">
                                    <TouchableOpacity>
                                        <Image className="size-5" source={icons.heart} tintColor="#0061FF"/>
                                    </TouchableOpacity>
                                    <Text className="ml-2 text-sm font-rubik-medium">936</Text>
                                </View>

                                <Text className="font-rubik text-sm text-black-200">6 days ago</Text>
                            </View>

                        </View>

                    </View>

                </View>

            </ScrollView>

                    //Bottom Nav Bar
                    <IdNav/>

                </View>
    )
}

export default Property;
