import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Button, TextInput } from 'react-native';
import { Task } from './src/components/Task';

export default function App() {

  const [modalWindow, setModalWindow] = useState(false)

  return (
    <View style={styles.container}>

        <Modal 
            animationType="fade"
            transparent={true}
            visible={modalWindow}>
                <View style={styles.modal}>
                    <View style={styles.modalWrapper}>
                        <Text style={styles.modalText}>Enter your note</Text>
                        <TextInput style={styles.input}></TextInput>
                        <Button title="close" color="black" onPress={() => setModalWindow(false)}/>
                    </View>
                </View>
        </Modal>

      <View style={styles.mainWrapper}>
        <Text style={styles.title}>Your Notes</Text>
        

        <View style={styles.items}>

          <Task text={'TASK 1'}/>
          <Task text={'TASK 2'}/>
          <Task text={'TASK 3'}/>

        </View>

      </View>

      <View style={styles.button}>

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
  },
  modal: {
    flex: 1,
    backgroundColor: "#rgba(0,0,0, 0.3)",
  },
  modalWrapper: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 30,
    borderRadius: 10,
    
  },
  modalText: {
    color: 'black',
    fontSize: 25,
    marginBottom: 20,
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
    marginBottom: 20,

  }
});
