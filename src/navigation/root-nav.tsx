import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/login';
import SignUpScreen from '../screens/signup';

const Stack = createStackNavigator();

const options: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
};

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name={'Login'} component={LoginScreen} />
        <Stack.Screen name={'SignUp'} component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
