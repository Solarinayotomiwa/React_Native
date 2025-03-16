import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native'
import React, {useState} from 'react'
import {router, useLocalSearchParams, usePathname} from "expo-router";
import icons from "@/constants/icons";
import {useDebouncedCallback} from "use-debounce";

const Search = () => {
    const path = usePathname();
    const params = useLocalSearchParams<{query?:string}>()
    const [search,setSearch] = useState(params.query);

    const debouncedSearch = useDebouncedCallback((text:string) => {router.setParams({query: text})}, 500)

    const handleSearch = (text: string) => {
        setSearch(text);
        debouncedSearch(text);
    }

    return (

        <View className="flex flex-row justify-between items-center w-full mt-5 py-2"
        style={{
            paddingHorizontal: 14, // px-4 (assuming 1 unit = 4px)
            paddingVertical: 12, // py-2
            borderRadius: 12, // rounded-lg
            borderWidth: 1, // border
            borderColor: '#0061FF0A', // border-primary-300 (Replace with actual color)
            backgroundColor: '#f6f6f6', // bg-accent-100 (Replace with actual color)
        }}
        >
            <View className="flex flex-1 flex-row justify-start items-center z-50">
                <Image source={icons.search} className="size-5"/>
            <TextInput
            value={search}
            onChangeText={handleSearch}
            placeholder="Search for your next house"
            className="text-sm font-medium text-black ml-2 flex-1"
            />
            </View>

            <TouchableOpacity>
                <Image source={icons.filter} className="size-5"/>
            </TouchableOpacity>
        </View>


    )
}
export default Search
