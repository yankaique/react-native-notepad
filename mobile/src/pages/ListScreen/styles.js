import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color: #333;
    justify-content: center;
    align-items: center;
`;

export const AddButton = styled.TouchableHighlight`
    margin-right: 15px;
`;


export const AddButtonImage = styled.Image`
    height:24px;
    width:24px;
`;

export const NotesList = styled.FlatList`
    flex:1;
    width:100%;
`;