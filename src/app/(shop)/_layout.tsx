import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router"
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

function TabBarIcon(props:{
    name:React.ComponentProps<typeof FontAwesome>['name'],
    color:string;
}){
    return <FontAwesome size={24} {...props} style={{color:"#1BC464"}}/>
}
const Tabslayout=()=>{
    return(
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
     <Tabs screenOptions={{
        tabBarActiveTintColor:"#1BC464",
        
        tabBarInactiveTintColor:"gray",
        tabBarLabelStyle:{fontSize:16},
        tabBarStyle:{
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            paddingTop:10,
        },
        headerShown:false
     }}>
        <Tabs.Screen name="index"
      
         options={{
            title:"shop",
            tabBarIcon(props){
                return <TabBarIcon {...props} name="shopping-cart"/>
            }
        }}/>
        <Tabs.Screen name="orders" options={{
            title:"orders",
            tabBarIcon(props){
                return <TabBarIcon {...props} name="book"/>
            }
        }}/>
    </Tabs>
    </SafeAreaView>
      )  
        
}
export default Tabslayout;

const styles=StyleSheet.create({
    safeArea:{
        flex:1,
    }
})