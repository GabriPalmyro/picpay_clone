import styled from 'styled-components';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddignLeft: 16
    }
}))`
    margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
    background: ${({ bgColor }) => bgColor};
    width: 150px;
    height: 200px;
    border-radius: 8px;
    padding: 15px;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-left: 10px;
`;

export const Img = styled.Image`
    align-self: center;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
`;
