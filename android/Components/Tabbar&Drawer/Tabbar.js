import {View, Text, Image} from 'react-native';
import {useState} from 'react';
import tw from 'twrnc';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Report from '../Report/Report';
import Todaysale from '../Todaysale/Todaysale';
import Counter from '../Counter/Counter';
import Items from '../Items/Items';
import More from '../More/More';

const Tab = createBottomTabNavigator();

function MyTabs({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Counter"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',

        headerShown: false,
        tabBarBackground: () => (
          <View style={tw`bg-white top-0 left-0 bottom-0 right-0 absolute `} />
        ),

        tabBarStyle: {
          overflow: 'hidden',
          borderRadius: 10,
          position: 'relative',
          display: 'flex',
          height: 60,
          width: 400,
          justifyContent: 'center',
          alignSelf: 'center',

          backgroundColor: '#FFFFFF',
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          tabBarBackground: () => (
            <View style={tw`bg-blue-700 w-20 h-20 absolute`} />
          ),
          tabBarLabel: 'Report',

          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <>
                  <Image
                    style={tw`w-6 h-6`}
                    source={require('../../Images/reportwhite.png')}
                  />
                </>
              ) : (
                <>
                  <Image
                    style={tw`w-6 h-6`}
                    source={require('../../Images/report.png')}
                  />
                </>
              )}
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Today"
        component={Todaysale}
        options={{
          tabBarBackground: () => (
            <View style={tw`bg-blue-700 w-20 h-20 left-20 absolute`} />
          ),
          tabBarLabel: 'Today',

          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <>
                  <Image
                    style={tw`w-6 h-6`}
                    source={require('../../Images/sellwhite.png')}
                  />
                </>
              ) : (
                <>
                  <Image
                    style={tw`w-6 h-6`}
                    source={require('../../Images/sell.png')}
                  />
                </>
              )}
            </>
          ),
          //  tabBarBadge: 3,
        }}
      />

      <Tab.Screen
        name="Counter"
        component={Counter}
        options={{
          tabBarBackground: () => (
            <View style={tw`bg-blue-700 w-20 h-20 left-40 absolute`} />
          ),
          tabBarLabel: 'Counter',

          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <>
                  <Image
                    style={tw`w-6 h-6`}
                    source={require('../../Images/clerkwhite.png')}
                  />
                </>
              ) : (
                <>
                  <Image
                    style={tw`w-6 h-6`}
                    source={require('../../Images/clerk.png')}
                  />
                </>
              )}
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Items"
        component={Items}
        options={{
          tabBarBackground: () => (
            <View style={tw`bg-blue-700 w-20 h-20 left-60 absolute`} />
          ),
          tabBarLabel: 'Items',

          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <>
                  <Image
                    style={tw`w-6 h-6`}
                    source={require('../../Images/task-listwhite.png')}
                  />
                </>
              ) : (
                <>
                  <Image
                    style={tw`w-6 h-6`}
                    source={require('../../Images/task-list.png')}
                  />
                </>
              )}
            </>
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarBackground: () => (
            <View style={tw`bg-blue-700 w-20 h-20 left-80 absolute`} />
          ),
          tabBarLabel: 'More',

          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <>
                  <Image
                    style={tw`w-6 h-6`}
                    source={require('../../Images/applicationwhite.png')}
                  />
                </>
              ) : (
                <>
                  <Image
                    style={tw`w-6 h-6`}
                    source={require('../../Images/application.png')}
                  />
                </>
              )}
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
