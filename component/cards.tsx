import {View, Text, TouchableOpacity, Image} from 'react-native'
import images from "@/constants/images";
import icons from "@/constants/icons";
import {Models} from "react-native-appwrite";
import uri from "ajv/lib/runtime/uri";

interface Props {
    onPress?: () => void;
    item: Models.Document;
}

export const FeaturedCard = ({item: {image, rating, name, address, price }, onPress}: Props) => {
    return (
        <TouchableOpacity onPress={onPress}  style={{
            flexDirection: "column",
            alignItems: "flex-start",
            width: 200,
            height: 270,
            position: "relative",
        }}>
            <Image
                source={{uri: image}}
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 16, // Equivalent to "rounded-2xl"
                }}
            />
            <Image
                source={images.cardGradient}
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 16,
                    position: "absolute",
                    bottom: 0,
                }}
            />

            {/*for the star*/}
            <View className="flex flex-row absolute items-center"
            style={{
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 999,
                backgroundColor: "#FFFFFFE6",
                top: 16,
                right: 16,
            }}
            >
                <Image style={{
                    width: 14,
                    height: 14,
                }} source={icons.star}/>
                <Text className="text-xs font-rubik-medium text-primary-100" style={{ marginLeft: 4, }} >{rating}</Text>
            </View>

            {/*text on card*/}
            <View className="flex flex-col items-start absolute" style={{
                bottom: 20,
                width: "100%",
                paddingHorizontal: 16
            }}>
                <Text className="text-white text-base font-rubik-bold" numberOfLines={1} >{name}</Text>
                <Text className="text-white text-sm font-rubik-regular" numberOfLines={1} style={{marginVertical: 8,}}>{address}</Text>

                <View className="flex flex-row justify-between items-center w-full" >

                <Text className="text-white text-base font-rubik-bold">${price}</Text>

            <Image source={icons.heart} style={{
                width: 22,
                height: 22,
            }}/>

                </View>

            </View>


        </TouchableOpacity>
    )
}

export const Card = ({item: {image, rating, name, address, price }, onPress}: Props) => {
    return (
        <TouchableOpacity onPress={onPress} className="flex-col relative"
                          style={{
                              flex: 1,
                              maxWidth:192,
                              width: "100%",
                              height: 275,
                              backgroundColor: "white",
                              borderRadius: 12,
                              paddingHorizontal: 14,
                              paddingTop: 16,
                              paddingBottom: 20,
                              boxShadow: "0 10px 15px 0px rgba(0, 0, 0, 0.02)",
                              borderColor: "#F1F1F1",
                              borderWidth: 1
        }}>
            {/*image component*/}
        <View>
            {/*image*/}
            <Image source={{uri: image}} style={{
                width: "100%",
                height: 154,
                borderRadius: 10,
            }}/>
            {/*star*/}
            <View className="flex flex-row absolute items-center"
                  style={{
                      paddingHorizontal: 6,
                      paddingVertical: 4 ,
                      borderRadius: 999,
                      backgroundColor: "#FFFFFFE6",
                      top: 12,
                      right: 12,
                  }}
            >
                <Image style={{
                    width: 10,
                    height: 10,
                }} source={icons.star}/>
                <Text className=" font-rubik-medium text-primary-100" style={{ marginLeft: 2, fontSize: 10 }} >{rating}</Text>
            </View>
        </View>
            {/*star*/}
            <View className="items-start" style={{ width: "100%", marginTop: 12 }}>
                <Text className="text-primary-300 text-base font-rubik-medium" >{name}</Text>
                <Text numberOfLines={1} className="text-primary-300 text-sm font-rubik-regular" style={{
                    marginVertical: 10,
                }}>{address}</Text>

                <View className="flex flex-row justify-between items-center w-full" >
                    <Text className="text-primary-100 text-base font-rubik-medium">${price}</Text>

                    <Image source={icons.heart} tintColor="#191d31" style={{
                        width: 20,
                        height: 20,
                    }}/>

                </View>
            </View>
        </TouchableOpacity>
    )
}

