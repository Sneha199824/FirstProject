import React from "react";
import { View, ScrollView } from 'react-native';
import mobile from '../../images/mobile.png';
import { Product } from "./Product";
import { Header } from "./Header";

export const AddToCartHeader = () => {
    const data = [
        {
            id: 1,
            image: mobile,
            text: 'Android',
            price: '8000'
        },
        {
            id: 2,
            image: mobile,
            text: 'Nokia',
            price: '10000'
        },
        {
            id: 3,
            image: mobile,
            text: 'Samsung',
            price: '12000'
        },
        {
            id: 4,
            image: mobile,
            text: 'Samsung',
            price: '12000'
        },
        {
            id: 5,
            image: mobile,
            text: 'Samsung',
            price: '12000'
        },
    ];

    return (
        <View>
            <Header />
            <ScrollView>
                {data.map((item) => (
                    <Product item={item} />
                ))}
            </ScrollView>
        </View>
    );
};
