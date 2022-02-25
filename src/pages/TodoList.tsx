import React from 'react'
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/common.style'

export default function TodoList() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on my app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
