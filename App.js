import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([])

  const addGoal = (goal) => setGoals(currentGoals => [
    ...currentGoals,
    { key: Math.random().toString(), value: goal }
  ])

  return (
    <View style={styles.container}>
      <GoalInput addGoal={addGoal} />
      <FlatList data={goals} renderItem={text => <GoalItem title={text.item.value} />}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 48,
  },
});
