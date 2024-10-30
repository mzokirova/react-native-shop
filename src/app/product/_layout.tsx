import { Ionicons } from "@expo/vector-icons"
import { Stack } from "expo-router"
import { TouchableOpacity } from "react-native"

export default function ProductsLayout(){
    return(
    <Stack>
        <Stack.Screen name='[slug]' options={({navigation})=>(
            {
                headerShown:true,
                headerLeft:()=>(
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="black"/>
                    </TouchableOpacity>
                )
            }
        )}/>
    </Stack>
    )
}