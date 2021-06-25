import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Splash,
    Home,
    Info
} from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
           
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Info"
                component={Info}
            />
            
        </Tab.Navigator>
    )
}

const Route = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Route;