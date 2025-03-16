import {View, Text, Image} from 'react-native'
import React from 'react'
import images from "@/constants/images";

const NoResults = () => {
    return (
        <View className="flex items-center my-5">
            <Image source={images.noResult} className="w-11/12 h-80" resizeMode="contain"  style={{
                width: "60%",
                height: 240,
                resizeMode: "contain"
            }}   />

            <Text className="text-xl font-rubik-medium text-primary-300 mt-2 ">No Results</Text>
            <Text className="text-sm text-primary-300 mt-2"> We could not find any properties </Text>
        </View>
    )
}
export default NoResults
