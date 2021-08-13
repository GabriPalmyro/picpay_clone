import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Details, Img, Title, Description } from './style'
import { LinearGradient } from 'expo-linear-gradient';

import img13 from '../../../images/13.png' 

export default function Banner() {
    return (
            <LinearGradient
            colors={
                ['#6882B0', '#849fdb',]
            }
            start={[0,1]}
            end={[1,0]}
            style={styles.button}>
            <Details>
                <Title>Cobre um amigo</Title>
                <Description>Mantenha suas parcerias em dia, use o PicPay para fazer suas cobranças</Description>
            </Details>
            <Img source={img13} />
        </LinearGradient>
    );
}


const styles = StyleSheet.create({
    button: {
        height: 150,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        padding: 15,
        marginHorizontal: 16,
        marginTop: 5,
        marginBottom: 15
    },
});