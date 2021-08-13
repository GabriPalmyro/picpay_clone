import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { Button, Label } from './style'

export default function PayButton({ onPress, focused }) {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={
                        focused
                            ? ['#FFF', '#CCC']
                            : ['#00FC6C', '#00A400']
                    }
                    start={[1, 0.5]}
                    style={styles.button}>
                    <MaterialIcons 
                        name={"attach-money"} 
                        size={20} 
                        color= {!focused ? "#FFF" : '#000'} />
                    <Text style={{
                        backgroundColor: 'transparent',
                        fontSize: 12,
                        color: !focused ? "#FFF" : '#000',}}
                        >
                            Pagar
                    </Text>
                </LinearGradient>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        marginBottom: 10,
        borderRadius: 30
    },
    button: {
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35
    },
});