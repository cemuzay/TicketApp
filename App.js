import Icon from "react-native-vector-icons/FontAwesome";
import Film from "./src/Film";
import Music from "./src/Music";
import Theather from "./src/Theather";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MovieDetailScreen from "./DetailedFilmScreens/MovieDetailScreen";
import Purchase from "./DetailedFilmScreens/Purchase";
import Payment from "./DetailedFilmScreens/Payment";

const Tab = createBottomTabNavigator();
const Stack=createStackNavigator();

const FilmStack =()=>{
  return(
       <Stack.Navigator >
        <Stack.Screen name={"film"} component={Film} />
        <Stack.Screen name={"Detay"} component={MovieDetailScreen}/>
        <Stack.Screen name={"Purchase"} component={Purchase}/>
        <Stack.Screen name={"Payment"} component={Payment}/>

       </Stack.Navigator>
     
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  > 
        <Tab.Screen
    
          name="Films"
          component={FilmStack}
          options={{
            headerShown:false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="film" color={color} size={size} />
            ),
       
          }}
          
        />
        <Tab.Screen
          name="MusicScreen"
          component={Music}
          options={{
          
            tabBarIcon: ({ color, size }) => (
              <Icon name="music" color={color} size={size} />
            ),
          }}
        />
         <Tab.Screen
          name="Theather"
          component={Theather}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="ticket" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
