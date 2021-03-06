import React from "react";

import { Container, Option, Title, Img } from './style';

import img8 from '../../../images/08.png';
import img9 from '../../../images/09.png';
import img10 from '../../../images/10.png';
import img11 from '../../../images/11.png';
import img12 from '../../../images/12.png';

const item = [
    {
        key: String(Math.random()),
        img: img8,
        title: 'Pague suas contas sem sair de casa',
        bgColor: "#172C4A"
    },
    {
        key: String(Math.random()),
        img: img9,
        title: 'Universitário! Cadastre-se e ganhe mais cashback',
        bgColor: "#6A0159"
    },
    {
        key: String(Math.random()),
        img: img10,
        title: 'Pague parcelado',
        bgColor: "#4139C8"
    },
    {
        key: String(Math.random()),
        img: img11,
        title: 'Universitário! Cadastre-se e ganhe mais cashback',
        bgColor: "#00AB4B"
    },
    {
        key: String(Math.random()),
        img: img12,
        title: 'Pague suas contas sem sair de casa',
        bgColor: "#BA2F76"
    },
]

export default function Tips() {
    return (
        <Container>
            {item.map((item) => (
                <Option key={item.key} bgColor={item.bgColor}>
                    <Title>{item.title}</Title>
                    <Img source={item.img} />
                </Option>
            ))}
        </Container>
    );
}