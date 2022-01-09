import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


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
  <TouchableOpacity activeOpacity={0.8} onPress={props.deleteItem}>
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  </TouchableOpacity>