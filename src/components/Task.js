import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export const Task = ({ text }) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.checkMark}/>
                <Text style={styles.itemText}>{ text }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    checkMark: {
        width: 30,
        height: 30,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#A385FF',
        marginRight: 10,
    },
    itemText: {
        maxWidth: '80%'

    },
})