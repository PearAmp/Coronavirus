import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Next from './components/Next';
import Last from './components/Last';
import Contentcovid from './components/Contentcovid';
import HomeScreen from './screens/HomeScreen';
import StatisticScreen from './screens/StatisticScreen'
import SymptomScreen from './screens/SymptomScreen'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Next" component={Next} 
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen name="Last" component={Last} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Contentcovid" component={Contentcovid} 
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

