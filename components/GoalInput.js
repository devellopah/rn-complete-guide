import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'


const styles = StyleSheet.create({
  formControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})
export default props => {
  const [goal, setGoal] = useState('')
  const onTextChange = (text) => setGoal(text)

  return (
    <Modal visible={props.isModalVisible} animationType="fade">
      <View style={styles.formControl}>
        <TextInput
          placeholder="Course Goal"
          onChangeText={onTextChange}
          value={goal}
        />
        <Button
          title="Add"
          onPress={props.addGoal.bind(this, goal)}
        />
      </View>
    </Modal>
  )
}