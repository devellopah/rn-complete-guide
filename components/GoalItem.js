import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: 'black',
  }
})
export default props =>
  <View style={styles.listItem}>
    <Text>{props.title}</Text>
  </View>