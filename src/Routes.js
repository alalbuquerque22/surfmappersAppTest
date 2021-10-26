import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons, Feather, FontAwesome5 ,Entypo} from '@expo/vector-icons';
import Feed from './Pages/Feed'
import logo from './assets/logo.png';
import Album from './Pages/Album';
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Coming soon!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Coming soon!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function Routes() {
  return (

    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#c9c9c9',
          borderTopColor: 'transparent',
        },
        activeTintColor: '#2ACAEA',
        tabStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          backgroundColor: '#e9e9e9',

        },

      }}
      screenOptions={{
        headerStyle: { backgroundColor: '#f0f0f5', height: 70, borderBottomWidth: 0, borderBottomColor: 'transparent' },
        headerLeft: () => (<Image style={styles.imageLogo} source={logo} />),

        headerTitle: false,

      }}
    >

      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          headerTitle: () => { <></> },
          headerRight: () => (<View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons
              name="cart-outline"
              size={24}
              color="red"
              style={{ paddingHorizontal: 10 }}
            />
            <Ionicons
              name="ios-chatbubbles-outline"
              size={24}
              color="black"
              style={{ paddingHorizontal: 10,marginRight:10 }}
            />
          </View>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home-outline" size={size} color={color} />)
        }}
      />

      <Tab.Screen
        name="Album"
        component={Album}
        options={{
          headerTitle: () => { <></> },
          headerRight: () => (<View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons
              name="cart-outline"
              size={24}
              color="red"
              style={{ paddingHorizontal: 5 }}
            />
            <Ionicons
              name="ios-chatbubbles-outline"
              size={24}
              color="black"
              style={{ paddingHorizontal: 5 }}
              
            />
             <MaterialCommunityIcons name="dots-vertical" size={24} color="black"  style={{ paddingHorizontal: 5 }}/>
          </View>
          ),
          headerLeft: ({ color, size }) => (<>
          <Text style={{marginLeft:5 ,alignItems:'center',justifyContent:'center',fontSize:24,fontWeight:'bold'}}>
            <Entypo name="chevron-left" size={35} color={color} /> 
            Album
            </Text></>),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />)
        }}
      />
      <Tab.Screen

        name="Checkin"
        component={HomeScreen}
        options={{
          headerTitle: () => { <></> },
          tabBarIcon: ({ color, size }) => (
            <Feather name="map-pin" size={size} color={color} />)
        }}
      />
      <Tab.Screen name="notificações" component={HomeScreen} options={{
        headerTitle: () => { <></> },
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="notifications-outline" size={size} color={color} />)
      }} />
      <Tab.Screen name="Perfil" component={SettingsScreen} options={{
        headerTitle: () => { <></> },
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="user" size={size} color={color} />)
      }} />
    </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  imageLogo: {
    
    paddingHorizontal:10,
    marginLeft:10
  }
})