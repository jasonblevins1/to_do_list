import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './component/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);

  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        {/* Page Title*/}
        
        <View style={styles.titleCard}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        </View>
        
        
        
        
        <View style={styles.items}>
          {/*this is the location of current tasks*/}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task  text={item} />
              </TouchableOpacity>
            )

          })
          }


        </View>
      </View>
      {/* Write a Task */}
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={' Write A Task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>



      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
    

  },
  items: {
    marginTop: 30,
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {},

  titleCard:{
    backgroundColor: '#b0c4de',
    alignItems: 'center',
    padding: 20,
    borderRadius: 8,
    
  },
  header:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  square: {
    width: 70,
    height: 70,
    backgroundColor: '#778899',
    justifyContent: "center",
    borderRadius: 5,
    marginRight: 15,
},
});
