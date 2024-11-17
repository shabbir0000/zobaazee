import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Header = ({navigation}) => {
  return (
    <View style={[ {backgroundColor: '#ffffff'}]}>
      <View
        style={tw`h-10 items-center justify-between flex-row  w-full bg-blue-700`}>
        <View
          style={tw`w-35 ml-3 items-center h-14 flex flex-row justify-between`}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Image
              source={require('../../Images/menu.png')}
              style={tw`w-6 h-6 top-1`}
            />
          </TouchableOpacity>
          <Image
            source={require('../../Images/question.png')}
            style={tw`w-6 h-6`}
          />
          <Image
            source={require('../../Images/question2.png')}
            style={tw`w-6 h-6`}
          />
        </View>
        <View
          style={tw`w-20 mr-1 items-center h-14 flex flex-row justify-between`}>
          <Image
            source={require('../../Images/userh.png')}
            style={tw`w-6 h-6`}
          />
          <Image
            source={require('../../Images/server.png')}
            style={tw`w-6 h-6`}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
