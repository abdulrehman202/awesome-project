import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return <View style = {styles.item}>
        <View style={styles.itemsLeft}>
    <View style={styles.square}></View>
    <Text style={styles.itemText}>{props.myText}</Text>
    <View style={styles.circular }></View>
    </View>

    </View>
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemsLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#558CF6',
        marginRight: 15
    },
    itemText:{
        maxWidth: '80%',  
    },
    circular:{
        width: 12,
        height: 12,
        borderColor: '#558CF6',
        borderWidth: 2,
        borderRadius: 5,
    },
    
    
});

export default Task;