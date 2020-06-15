import styled from 'styled-components';

export const Flex = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const style = {
    noMargin: {
        marginRight: 0
    },
    dot: {
        marginRight: 4,
        marginLeft: 4
    },
    border: {
        borderLeftWidth: 1,
        borderLeftColor: '#E0E0E0',
        paddingLeft: 10
    },
    text: {
        fontWeight: 'bold'
    },
    card: {
        borderRadius: 6,
        padding: 0
    },
    icon: {
        color: '#263238'
    }
};
