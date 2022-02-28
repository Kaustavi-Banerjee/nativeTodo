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
          name="Todo List"
          component={TodoListScreen}
          options={{ title: 'TodoList' }}
        />
        <Stack.Screen name="Todo Form" component={TodoFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
