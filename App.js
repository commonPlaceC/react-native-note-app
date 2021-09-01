import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Button, TextInput } from 'react-native';
import { Task } from './src/components/Task';

export default function App() {

  const [modalWindow, setModalWindow] = useState(false);

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null)
    setModalWindow(false)
  }

  return (
    <View style={styles.container}>
      {/* Modal PopOut */}
        <Modal 
            animationType="fade"
            transparent={true}
            visible={modalWindow}
            statusBarTranslucent={true}>
                <View style={styles.modal}>
                    <View style={styles.modalWrapper}>
                        <Text style={styles.modalText}>Enter your note</Text>
                        <TextInput style={styles.input} placeholder={'Write here'} onChangeText={text => setTask(text)} value={task}></TextInput>

                        <TouchableOpacity style={styles.saveButton} onPress={() => { handleAddTask()}}>
                          <Text style={styles.saveButtonText}>Save</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalWindow(false)}>
                          <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>

                    </View>
                </View>
        </Modal>
    {/* Tasks */}
      <View style={styles.mainWrapper}>
        <Text style={styles.title}>Your Notes</Text>

        <View style={styles.items}>

          {
            taskItems.map((item, index) => {
              return <Task key={index} text={item}/>
            })
          }

        </View>

      </View>

      <View style={styles.button}>
{/* Add button */}
        <TouchableOpacity onPress={() => setModalWindow(true)}>
          <View style={styles.addWrapper}>
            <Text style={styles.add}>+</Text>
          </View> 
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECF3'
  },
  mainWrapper: {
    paddingTop: 70,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  items: {
    
  },
  button: {
    position: 'absolute',
    end: 25,
    bottom: 25,
  },
  addWrapper: {
     height: 70,
     width: 70,
     backgroundColor: '#FFF',
     borderRadius: 50,
     alignItems: 'center',
     justifyContent: 'center',


  },
  add: {
    fontSize: 40,
    color: "#4100D7",
  },
  modal: {
    flex: 1,
    backgroundColor: "#rgba(0,0,0, 0.4)",
  },
  modalWrapper: {
    backgroundColor: '#ECECEC',
    margin: 20,
    padding: 30,
    borderRadius: 10,
    marginTop: 150,
    
  },
  modalText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  saveButton: {
    alignSelf: 'center',
    width: '50%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#8C00D9',
    borderRadius: 10,
  },
  saveButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },

  closeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 5,

  },
  closeButtonText: {
    color: '#FF7575',
    fontSize: 20,
  },
  input: {
    fontSize: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ECECEC',
    borderRadius: 30,
    height: 60,
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: '#rgba(0,0,0, 0.1)',
    marginBottom: 20,

  }
});
