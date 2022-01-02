import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Alert, Text, View } from 'react-native';
import Task from './components/Task'

export default function App() {
  
  return (

    <View style={styles.container}>
      <View style = {styles.taskWrapper}>
      <Text style = {styles.sectionTitle}>
      Today's Task
      </Text>
      <View style={styles.items}>
        <Task myText={'This is task 1'}/>
        <Task myText={'This is task 2'}/>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
taskWrapper:{
  paddingTop:80,
  paddingHorizontal: 20,
},
sectionTitle:{
  fontSize: 24,
  fontWeight: 'bold',
},
items:{},
});
