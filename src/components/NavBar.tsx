import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import TodoFormScreen from '../pages/TodoForm';
import TodoListScreen from '../pages/TodoList';

const Stack = createNativeStackNavigator();

export default function NavBar() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TodoList"
          component={TodoListScreen}
        />
        <Stack.Screen name="TodoForm" component={TodoFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
