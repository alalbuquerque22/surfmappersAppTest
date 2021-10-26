import React, { useEffect, useState } from "react";
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import api from '../../services/api'
import { Entypo,FontAwesome5,AntDesign ,Feather,MaterialIcons} from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";


const { height, width } = Dimensions.get('window');
export default function Album() {


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <Title/>
      <View style={{ borderColor: '#c9c9c9', borderWidth: 0.5 ,width:'100%',marginVertical:5}}/>

      <Follow />
      <View style={{ borderColor: '#c9c9c9', borderWidth: 0.5 ,width:'100%',marginVertical:5}}/>

      <Filter />
      <View style={{ borderColor: '#c9c9c9', borderWidth: 0.5 ,width:'100%',marginVertical:5}}/>
      <Photos />
    </View>
  );
}
function Photos() {
const [feed, setFeed] = useState([])

  useEffect(() => {
    api.get('/feed')
    .then(response => {
        setFeed(response.data)
    }).catch(err => {   
        console.log('err', err)
    })


  },[])
  return (
    <ScrollView >
      <View style={[styles.containerGallery]}>
        <Text style={styles.time}>6h-7h</Text>

        <View style={styles.imageArea}>
          {/* <View style={styles.image}></View> */}
          {feed.map(item => {
          const key = item.id
            return (
              <View key={key} style={styles.image}>
                <ImageBackground source={{ uri: item.image }} style={[styles.image, { alignItems: 'flex-end', padding: 5 }]} >
                  <TouchableOpacity style={styles.imageIcon}>
                    <FontAwesome5 name="images" size={15} color="white" />
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            )})} 
          

        </View>
      </View>
    </ScrollView>
  );
}

function Title(){
  return(
    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <View style={styles.titleArea}>
        <Text style={{fontWeight:'bold',fontSize:25}} >Praia do Meio, Natal-RN</Text>
        <Text style={{color:'#999999',fontSize:14}}>Hoje, Sábado 17 abril 2021 - 07h às 10h</Text>
      </View>
      <View style={styles.buttonArea}>
        <View style={[styles.boxIcon,{borderColor:'#79B9FF'}]} >
          <Entypo name="share" size={24} color="gray" />
        </View>
      </View>
    </View>
  )
}
function Filter() {
 
  return (
 
    <View style={{ 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      width: '95%' ,
      alignItems:'center',
      height: 50,
    }} >

      <Text style={{ color: "#007AFF", fontSize: 18, fontWeight: 'bold'}}>260 fotos</Text>

      <TouchableOpacity style={styles.filter}>
    
        <View style={{padding:10,flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ backgroundColor: '#007AFF', width: 25, height: 25, borderRadius: 15, justifyContent: 'center', alignItems: 'center' ,marginHorizontal:5}}>
            <FontAwesome5 name="filter" size={15} color="white" />
          </View>
          <Text style={{ marginHorizontal:5,color: "#007AFF", fontSize: 18, fontWeight: 'bold' }}>Filtrar por surfista</Text>
          <AntDesign name="caretdown" size={15} color="#007AFF" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

function Follow() {
  return(
    <View style={styles.followContainer}>
      <TouchableOpacity style={styles.box}>
        <View style={styles.boxIcon}><Feather name="camera" size={20} color="gray" /></View>
 
        <Text style={{  fontSize:18,color:'gray',fontWeight:'bold', marginLeft:10,}}>Manoel</Text>
      </TouchableOpacity>
      <View style={styles.box}>
        <TouchableOpacity style={[styles.boxIcon,{borderColor:'#79B9FF'}]}>
        <MaterialIcons name="chat-bubble" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={{fontSize:18,color:'white',fontWeight:'bold',paddingHorizontal:10}}>Seguindo</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  containerGallery: {
    width: (width),
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  imageArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  image: {
    marginTop: 1,
    width: (width * 33) / 100,
    height: (width * 30) / 100,
    // backgroundColor: 'red',
  },

  filter: {
    flexDirection: 'row',
    backgroundColor: '#C5EFF9',
    height: 40,
    borderRadius: 15,
    width: (width * 50) / 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:10
  },
  followContainer:{
    marginVertical:(height*1)/100,

    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    // backgroundColor:'red',
    width:(width*90)/100,
  },
  box:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  boxIcon:{
    width:30,
    height:30,
    borderRadius:8,
    borderWidth:1.4,
    borderColor:'gray',
    justifyContent:'center',
    alignItems:'center',
  },
  iconButton:{
    backgroundColor:'#007AFF',
    height:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    marginLeft:10,
  },
  imageIcon:{ 
    borderRadius:5, 
    width: 25, 
    height: 25, 
    backgroundColor: 'rgba(81, 161, 248, .80)',
    justifyContent: 'center',
    alignItems:'center'
  },
  titleArea:{
    width: (width * 90) / 100,
    marginVertical:(height*1)/100,

  }
})