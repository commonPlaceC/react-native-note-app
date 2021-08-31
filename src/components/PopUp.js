import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';

export const PopUp = ({ setModal }) => {

    const [modalWindow, setModalWindow] = useState(true)

    return (
        <Modal 
            animationType="fade"
            transparent={true}
            visible={modalWindow}>
                <View style={styles.modal}>
                    <View style={styles.modalWrapper}>
                        <Text style={styles.modalText}>Modal text</Text>
                        <Button title="close" color="black" onPress={() => setModalWindow(false)}/>
                    </View>
                </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
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
        fontSize: 40,
      },
})