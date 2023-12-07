import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import axios from 'axios';

export const Axois = () => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {

        const axoisData = async () => {
            try {

                const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
                setData(response.data);
            } catch (error) {
            } finally {
                setLoading(false);
            }

        };


        axoisData();
    }, []);
    return (
        <View>
            {isLoading ?
                (<ActivityIndicator />) : (
                    <View>
                        {[data].map((item, id) =>
                <View>
                                <Text>{item.title}</Text>
                            </View>
                        )
    
                        }
                    </View>
                )}
        </View>
    );
};

