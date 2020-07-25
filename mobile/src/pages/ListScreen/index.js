import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
    Container,
    Text,
    Button
} from './styles';


export default () =>{

    const navigation = useNavigation();

    return(
        <Container>
            <Text>List Screen</Text>
            <Button title="Ir para edição" onPress={() => navigation.navigate('EditNote')} />  
        </Container>
    )
};