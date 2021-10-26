import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import api from "../../services/api";
export default function Stories() {

    const [stories, setStories] = useState([])
    useEffect(() => {
        api.get('/authors')
            .then(response => {
                setStories(response.data)
                console.log('imagesssssssss=>',response.data)
            }).catch(error => {
                console.log(error)
            })
    }, [])
    return (

        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            <View style={styles.imageArea}>
                <View style={[styles.imageContent,]}>
                    <View style={[styles.image, { justifyContent: 'center', alignItems: 'center' }]}>
                        <Ionicons name="md-camera-sharp" size={30} color="#0C80FF" />
                    </View>
                    <Text>Adicionar</Text>
                </View>
                {stories.map(story => {
                    const key = story.id
                    return (
                        <View key={key} style={styles.imageContent}>
                            <Image style={styles.image} source={{ uri: story.avatar }} />
                            <Text>{story.name}</Text>
                        </View>
                    )
                })}

            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    imageArea: {
        marginTop: 5,
        height: 80,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        // backgroundColor:'red',
        alignItems: 'center',

    },
    imageContent: {
        paddingHorizontal: 5,
        alignItems: 'center',
    },
    image: {
        paddingHorizontal: 10,

        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#2ACAEA'
    }
})