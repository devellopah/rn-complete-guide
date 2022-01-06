import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('')
  const [goals, setGoals] = useState([])

  const onTextChange = (text) => setGoal(text)
  const addGoal = () => setGoals(currentGoals => [...currentGoals, goal])

  return (
    <View style={styles.container}>
      <View style={styles.formControl}>
        <TextInput
          placeholder="Course Goal"
          onChangeText={onTextChange}
          value={goal}
        />
        <Button
          title="Add"
          onPress={addGoal}
        />
      </View>
      <ScrollView>
        {goals.map((text, index) => <View key={index} style={styles.listItem}><Text>{text}</Text></View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 48,
  },
  formControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: 'black',
  }
});
