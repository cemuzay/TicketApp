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
import MusicCardScreen from "./components/MusicCardScreen";
import MusicDetailScreen from "./MusicDetailScreen/MusicDetailScreen";
import TheatherCardScreen from "./components/TheatherCardScreen";
import TheatherDetailScreen from "./DetailedTheatherScreens/TheatherDetailScreen";

const Tab = createBottomTabNavigator();
const Stack=createStackNavigator();

const FilmStack =()=>{
  return(
       <Stack.Navigator >
        <Stack.Screen name={"film"} component={Film} />
        <Stack.Screen name={"Detay"} component={MovieDetailScreen}/>
        <Stack.Screen name={"Purchase"} component={Purchase} />
        <Stack.Screen name={"Payment"} component={Payment}/>

       </Stack.Navigator>
     
  )
}
const MusicStack =()=>{
  return(
<Stack.Navigator>
  <Stack.Screen name={"Music"} component={MusicCardScreen}/>
  <Stack.Screen name={"MusicDetailScreen"} component={MusicDetailScreen}/>
  <Stack.Screen name={"Purchase"} component={Purchase} />
  </Stack.Navigator>
  )
}
const TheatherStack =()=>{
  return(
<Stack.Navigator>
  <Stack.Screen name={"Theather"} component={Theather}/>
  <Stack.Screen name={"TheatherCardScreen"} component={TheatherCardScreen}/>
  <Stack.Screen name={"TheatherDetailScreens"} component={TheatherDetailScreen}/>
  <Stack.Screen name={"Purchase"} component={Purchase} />
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
          component={MusicStack}
          options={{
            headerShown:false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="music" color={color} size={size} />
            ),
          }}
        />
         <Tab.Screen
          name="Theather"
          component={TheatherStack}
          options={{
            headerShown:false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="ticket" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
