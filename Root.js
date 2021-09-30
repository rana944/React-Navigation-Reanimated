import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

export default (() => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='ScreenA' component={ScreenA} />
                <Stack.Screen name='ScreenB' component={ScreenB} />
            </Stack.Navigator>
        </NavigationContainer>
    )
});