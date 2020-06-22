import styled from 'styled-components';

export const Circle = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    border: 5px solid #FFD54F;
    background-color: #FFFF;
    border-radius: 50px;
`;

export const SmallCircle = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    border: 3px solid #FFC107;
    background-color: #FFFF;
    border-radius: 50px;
`;

export const Text = styled.Text`
    color: #FFC107;
    font-weight: bold;
    font-size: 24px;
    margin: 0
`;

export const SmallText = styled.Text`
    color: #FFC107;
    font-weight: bold;
    font-size: 17px;
    margin: 0
`;