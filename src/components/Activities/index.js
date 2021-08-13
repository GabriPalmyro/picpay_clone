import React from 'react';

import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { 
    Container, 
    Header, 
    Title, 
    Subtitle, 
    SubtitleButton, 
    SubHeader, 
    Card, 
    CardHeader, 
    Avatar, 
    Description, 
    Bold, 
    CardBody, 
    Username, 
    CardFooter, 
    Details, 
    Value, 
    Divider, 
    DateLabel, 
    Actions, 
    Option, 
    OptionLabel,

    } from './style'

import avatar from '../../../images/avatar.png';

export default function Activities() {
    return (
        <Container>
            <Header>
               <Title>Atividades</Title> 
               <SubHeader>
                    <SubtitleButton>
                        <Subtitle>Todas</Subtitle>
                    </SubtitleButton>
                {/* <Subtitle>Minhas</Subtitle>  */}
               </SubHeader>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar}  />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@palmyro_ga</Bold>
                    </Description>
                </CardHeader>
                <CardBody>
                    <Username>
                        Gabriel Palmyro
                    </Username>
                </CardBody>
                <CardFooter>
                    <Details>
                        <Value>
                            R$ 10.00
                        </Value>
                        <Divider/>
                        <Feather name="lock" color="#FFF" size={14}/>
                        <DateLabel>há 2 meses</DateLabel>
                    </Details>
                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#FFF"/>
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="hearto" size={14} color="#FFF"/>
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}