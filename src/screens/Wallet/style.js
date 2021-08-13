import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

export const Wrapper = styled.View`
    flex: 1;
    background: #000,
    
`;

export const Header = styled(LinearGradient)`
    height: 40%;
`;

export const HeaderContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
`;

export const SaldoContainer = styled.View`
    margin: 10px 0;
    flex-direction: row;
    align-items: center;
`;

export const Value = styled.Text`
    color: #FFF;
    font-size: 38px;
    font-weight: 200;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
    margin-left: 15px;
`;

export const Info = styled.Text`
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
`;

export const Actions = styled.View`
    flex-direction: row;
    margin-top: 40px;
`;

export const Action = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    border: 1px solid rgba(255,255,255,0.6);
    width: 150px;
    height: 45px;
    border-radius: 25px;
`;

export const ActionLabel = styled.Text`
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    margin-left: 15px;
`;

export const UseBalance = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background: #121212;
    height: 60PX;
`;

export const UseBalanceTitle = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
`;

export const PaymentMethods = styled.View`
    height: 180px;
    margin: 20px 5px;
`;

export const PaymentTitle = styled.Text`
    color: rgba(255,255,255,0.2);
    font-size: 14px;
    margin-bottom: 5px;
`;

export const PaymentContainer = styled.View`
    background: #1E232A;
    height: 180px;
    border-radius: 3px;
    padding: 15px;
    flex-direction: row;
`;

export const PaymentLeftView = styled.View`
    flex: 2;
`;

export const PaymentLeftTitle = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const PaymentLeftInfo = styled.Text`
    color: rgba(255,255,255,0.6);
    font-size: 14px;
`;

export const PaymentRightView = styled.View`
    flex: 1;
`;

export const Img = styled.Image`
    width: 70px;
    align-self: center;
`;

export const PaymentButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
`;

export const ButtonLabel = styled.Text`
    color: #0DB060;
    font-size: 16px;
    margin-left: 10px;
`;