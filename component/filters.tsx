import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {router, useLocalSearchParams} from "expo-router";
import {categories} from "@/constants/data";

const Filters = () => {
    const params = useLocalSearchParams<{filter?: string}>();
    const [selectedCategory, setSelectedCategory] = useState(params.filter || "All");

    const handleCategoryPress = (category: string) => {
        if (selectedCategory === category) {
            setSelectedCategory("All");
            router.setParams({filter: "All"});
            return;
        }

        setSelectedCategory(category);
        router.setParams({filter: category});
    }

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="my-6" style={{marginTop: 12}}>
            {categories.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => handleCategoryPress(item.category)} className=" flex flex-col items-center" style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 999,
                    backgroundColor: selectedCategory === item.category ? "#0061FF" : "#0061FF0A",
                    borderWidth: selectedCategory === item.category ? 0 : 1,
                    borderColor: "#0061FF1A",
                    marginRight: 12,
                }}>
                    <Text className={"font-rubik-regular text-sm"}
                    style={{
                        fontWeight: selectedCategory === item.category ? "500" : "400", // Medium if selected
                        color: selectedCategory === item.category ? "#FFFFFF" : "#6B7280", // White when selected, gray otherwise
                    }}
                    >
                        {item.category}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}
export default Filters
