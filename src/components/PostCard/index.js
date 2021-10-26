import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Feather, Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { format, formatRelative, parseISO, subDays } from 'date-fns';
import { pt, ptBR } from 'date-fns/locale'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
export default function PostCard(
    { photographer = 'chris hadfield',
        imageLink,
        Description,
    }
) {
    const [hour, setHour] = useState(
        '1970-01-21T23:23:58.935Z',
    );
    const navigation = useNavigation()
    //   {formatRelative(subDays(new Date(), 3), new Date(), { locale: ptBR })}
    return (

        <View style={{ alignItems: 'center', paddingTop: 20 }}>
            {/* <View style={{backgroundColor:'red'}}> */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '94%' }}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>{Description}</Text>
                    <Text style={styles.subTitle}> {format(parseISO(hour), "eeee dd/MM/yyyy 'às' HH:mm")} </Text>
                </View>
                <View>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
                </View>
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Album')
            }}>
                <View style={styles.imageArea}>
                    <Image style={styles.image}
                        source={{ uri: `${imageLink}` }} />
                </View>
                <View style={styles.bottomArea}>
                    <View style={[styles.bottomButton, { justifyContent: 'flex-start' }]}>
                        <AntDesign name="hearto" size={24} color="black" />
                        <Entypo style={{ marginLeft: 10 }} name="share" size={24} color="black" />
                    </View>
                    <View style={[styles.bottomButton, { justifyContent: 'center' }]}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'gray'}}>.....</Text>
                    </View>
                    <View style={[styles.bottomButton, { justifyContent: 'flex-end', }]}>
                        <Feather name="camera" size={24} color="black" />
                        <Text style={{ marginLeft: 2, fontWeight: 'bold' }}>{photographer}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({



    titleArea: { width: '94%' },
    title: { fontSize: 20, fontWeight: 'bold', color: '#2ACAEA' },
    subTitle: { fontSize: 12, color: '#707070', justifyContent: 'flex-end' },


    imageArea: {
        marginTop: 0,
        // backgroundColor:'red',
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        height: 250,
        width: '100%',
        margin: 10,
        borderRadius: 10
    },

    bottomArea: {
        marginTop: 10,
        width: '94%',
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    bottomButton: { flexDirection: 'row', width: '33%', alignItems: 'center', }
})