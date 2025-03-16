import {View, Text, Image, ImageSourcePropType} from 'react-native'
import React from 'react'

interface Props {
    image: ImageSourcePropType,
    text: string,
}

export const TitleCards = ( {image, text} : Props) => {
    return (
        <View className="flex flex-row items-center justify-start">

            //Icon
            <View className="items-center justify-center rounded-full ml-2" style={{backgroundColor: "#0061FF0A", width: 40, height:40,
            }}>
            <Image source = {image} style={{width:16,height:16}}/>
            </View>

            //Text
            <Text className="text-sm font-rubik-medium" style={{marginLeft: 10}}>{text}</Text>

        </View>
    )
}

export const FacilityCards = ({image, text} : Props) => {
    return (
        <View>
            <View className="flex flex-col items-center justify-center" style={{width: 86}} >

                //Icon
                <View className="items-center justify-center rounded-full" style={{backgroundColor: "#0061FF0A", width: 60, height:60}}>
                    <Image source = {image} style={{width:28,height:28}}/>
                </View>

                //Text
                <Text className="text-sm font-rubik" numberOfLines={1} style={{marginTop: 8}}>{text}</Text>

            </View>

        </View>
    )
}