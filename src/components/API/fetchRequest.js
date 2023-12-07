import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export const FetchRequest = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

   
       

    const getplaceholder = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            // console.log('response>>>', response)
            const json = await response.json();
            // console.log('json>>>', json)
            setData(json);
            // console.log('data>>response', data)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getplaceholder();
    }, []);

    return (
        <View style={{ flex: 1, padding: 24 }}>
        
            {isLoading ? (
                <ActivityIndicator />
            ) :
                (
                    <View>
                        {[data].map((item, id) => {
                            return (
                                <View>
                                    <Text>
                                        {item.title}
                                    </Text>
                                </View>
                            )
                        }
                        )
                        }
                    </View>

                )}
        </View>

    );
};




