import {View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {Dimensions} from 'react-native'

const windowHeight = Dimensions.get("window").height;



const IdNav = () => {
    return (
        <View className=" absolute flex-row flex-1 items-center justify-between" style={{
            backgroundColor: "white", borderColor: "#0061FF1A", bottom: 0, right: 0, left: 0,
            borderWidth: 1, shadowColor: "#000", shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.08, shadowRadius: 10, elevation: 3, borderTopLeftRadius: 36, borderTopRightRadius: 36
        }}>
            <View className=" flex-row flex items-center justify-between" style={{paddingHorizontal: 20, width: "100%",
            paddingBottom: 24, paddingTop: 16}} >

                <View className="flex flex-col items-start" >
                    <Text className="text-sm font-rubik text-black-200">Price</Text>
                    <Text className="text-2xl font-rubik-medium text-primary-100" style={{marginTop: 4}}>$12821</Text>
                </View>

                <TouchableOpacity className="items-center justify-center bg-primary-100 rounded-full"
                                  style={{height: 50, width: 236}}>
                    <Text className="text-base font-rubik-medium text-white ">Book Now</Text>

                </TouchableOpacity>

            </View>


        </View>
    )
}
export default IdNav
