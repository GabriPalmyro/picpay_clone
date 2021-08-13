import styled from 'styled-components';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16,
    },
}))`
    background-color: #1E222B;
    height: 130px;
    margin-top: 5px;
`;

export const Option = styled.TouchableOpacity`
    width: 80px;
    margin-right: 16px;
    align-items: center;
`;

export const Img = styled.Image`

`;

export const Label = styled.Text`
    color: #FFF;
    text-align: center;
    font-weight: bold;
    margin-top: 8px;
    font-size: 14px;
`;
