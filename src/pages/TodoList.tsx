import React from 'react'
import { Text, View } from 'react-native'
import styles from '../styles/common.style'
import typographyStyle from '../styles/typography.style'

export default function TodoListScreen() {
  return (
    <View style={styles.container}>
      <View style={[styles.flexContainer, styles.paddingT30]}>
        <Text style={typographyStyle.title}>TodoList</Text>
      </View>
    </View>
  )
}
