import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/common.style'
import typographyStyle from '../styles/typography.style'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import button from '../styles/button.style'

export default function TodoListScreen() {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {
      position: 'relative'
    }]}>
      <View style={[styles.flexContainer, styles.padding15]}>
        <Text style={typographyStyle.title}>List of Items</Text>
      </View>
      <View style={[ button.blueCircle, { position: 'absolute', bottom: 15, right: 15}]}>
        <TouchableOpacity onPress={() => navigation.navigate('TodoForm')}>
          <Icon name="plus" style={{ color: '#ffffff' }} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
