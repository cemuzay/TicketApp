import Icon from "react-native-vector-icons/FontAwesome";
import Film from "./src/Film";
import Music from "./src/Music";
import StandUp from "./src/StandUp";
import Theather from "./src/Theather";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Films"
          component={Film}
          options={{
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
           <Tab.Screen
          name="StandUp"
          component={StandUp}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="users" color={color} size={size} />
            ),
          }}
        />
        
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
