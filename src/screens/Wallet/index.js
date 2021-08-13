import React, { useState } from 'react';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons'
import { Switch } from 'react-native'
import {
    Wrapper,
    Header,
    HeaderContainer,
    Title,
    SaldoContainer,
    Value,
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentTitle,
    PaymentContainer,
    PaymentLeftView,
    PaymentLeftTitle,
    PaymentLeftInfo,
    PaymentRightView,
    Img,
    PaymentButton,
    ButtonLabel
} from './style';

import creditCard from '../../../images/credit-card.png';

export default function Wallet() {

    const [isVisible, setIsVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);

    function handleToggleVisibility() {
        setIsVisible((prevState) => !prevState);
    }

    function handleToggleUseBalance() {
        setUseBalance((prevState) => !prevState);
    }

    return (
        <Wrapper>
            <Header colors={
                useBalance 
                    ? ['#52E78C', '#1ABC63'] 
                    : ['#D3D3D3', '#868686']}>
                
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>
                    <SaldoContainer>
                        <Value>R$ <Bold>{isVisible ? '0,00' : '----'}</Bold></Value>
                        <EyeButton onPress={handleToggleVisibility}>
                            <Feather name={isVisible ? "eye" : "eye-off"} size={28} color="#FFF" />
                        </EyeButton>
                    </SaldoContainer>
                    <Info>Seu saldo está rendendo 100% do CDI</Info>
                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name="cash" size={25} color="#FFF" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>
                        <Action>
                            <FontAwesome name="bank" size={20} color="#FFF" />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>
                </HeaderContainer>
            </Header>
            <UseBalance>
                <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
                <Switch value={useBalance} onValueChange={handleToggleUseBalance}/>
            </UseBalance>

            <PaymentMethods>
                <PaymentTitle>FORMAS DE PAGAMENTO</PaymentTitle>
                <PaymentContainer>
                    <PaymentLeftView>
                        <PaymentLeftTitle>Cadastre seu cartão de crédito</PaymentLeftTitle>
                        <PaymentLeftInfo>Cadastre um cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay</PaymentLeftInfo>
                        <PaymentButton>
                            <AntDesign name="pluscircleo" size={30} color="#0DB060" />
                            <ButtonLabel>Adicionar cartão de crédito</ButtonLabel>
                        </PaymentButton>
                    </PaymentLeftView>
                    <PaymentRightView>
                        <Img source={creditCard} resizeMode="contain" />
                    </PaymentRightView>
                </PaymentContainer>
            </PaymentMethods>
        </Wrapper>
    );
}