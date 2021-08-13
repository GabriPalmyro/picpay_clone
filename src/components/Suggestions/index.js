import React from 'react';

import { Container, Option, Img, Label } from './style'

import img1 from '../../../images/01.png';
import img2 from '../../../images/02.png';
import img3 from '../../../images/03.png';
import img4 from '../../../images/04.png';
import img5 from '../../../images/05.png';
import img6 from '../../../images/06.png';
import img7 from '../../../images/07.png';

const items = [
    {
        key: 1,
        img: img1,
        label: 'Recarga'
    },
    {
        key: 2,
        img: img2,
        label: 'Uber'
    },
    {
        key: 3,
        img: img3,
        label: 'Ônibus'
    },
    {
        key: 4,
        img: img4,
        label: 'TV'
    },
    {
        key: 5,
        img: img5,
        label: 'Doações'
    },
    {
        key: 6,
        img: img6,
        label: 'Barras'
    },
    {
        key: 7,
        img: img7,
        label: 'SMS'
    },
]

export default function Suggestions() {
    return (
        <Container horizontal>
            {items.map((item) => (
                <Option key={item.key}>
                    <Img source={item.img} />
                    <Label>{item.label}</Label>
                </Option>
            ))}
        </Container>
    );
}