import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'


const styles = StyleSheet.create({
  formControl: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    width: '80%',
    marginBottom: 8,
  },
  button: {
    marginLeft: 8,
    width: '40%',
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '60%'
  }
})
export default props => {
  const [goal, setGoal] = useState('')
  const onTextChange = (text) => setGoal(text)

  const addGoal = () => {
    props.addGoal(goal)
    setGoal('')
  }

  return (
    <Modal visible={props.isModalVisible} animationType="fade">
      <View style={styles.formControl}>
        <TextInput
          style={styles.input}
          placeholder="Course Goal"
          onChangeText={onTextChange}
          value={goal}
        />
        <View style={styles.btnGroup}>
          <View style={styles.button}>
            <Button
              title="Add"
              onPress={addGoal}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="red"
              onPress={props.onCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}