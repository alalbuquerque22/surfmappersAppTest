import React, { useEffect, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PostCard from "../../components/PostCard";
import { Ionicons } from '@expo/vector-icons';

import api from '../../services/api'
import Stories from "../../components/Stories";


const Feed = () => {
    // async function loadPage() {


    //     const response = await api.get('/authors')
    //         .then((response) => {
    //             Alert.alert('data', response.data)
    //         })
    //     console.log('response =>', response)
const [feed,setFeed] = useState([])


    // }
    useEffect(() => { 
        api.get('/feed')
            .then(response => {
                console.log('data', response)
                setFeed(response.data)
            }).catch(err => {   
                console.log('err', err)
            })
        


    }, []);
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}>

        <Stories/>


            <View style={styles.search}>
                <Text style={styles.searchText}>Onde você <Text style={{ fontWeight: 'bold' }}>Surfou hoje?</Text></Text>
                <View style={styles.inputArea}>
                    <Ionicons name="search" size={20} color={'#707070'} />
                    <TextInput
                        style={styles.input}
                        placeholder="Onde você surfou hoje?"
                    ></TextInput>
                </View>

            </View>




            <FlatList
                key="list"
                data={feed}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <PostCard imageLink={item.image}
                    Description={item.description}
                    />
                )}
            />

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    // container: {
    //     justifyContent: 'center',
    //     flex:1
    // },

    searchText: {
        marginTop: 12,
        paddingLeft: 10,
        fontSize: 24,
    },
    inputArea: {
        height: 40,
        margin: 12,
        borderWidth: 0,
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e9e9e9',
    },

})

export default Feed;