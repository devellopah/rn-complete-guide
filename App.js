import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('')
  const [goals, setGoals] = useState([])

  const onTextChange = (text) => setGoal(text)
  const addGoal = () => setGoals(currentGoals => [
    ...currentGoals,
    { key: Math.random().toString(), value: goal }
  ])

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
      <FlatList data={goals} renderItem={text => (
        <View style={styles.listItem}>
          <Text>{text.item.value}</Text>
        </View>
      )}>
      </FlatList>
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
