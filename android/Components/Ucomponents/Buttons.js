import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Animated,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
// import {SocialIcon} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';

export const UButton = ({style, title, onPress, disabled}) => (
  <>
    <View style={style}>
      <TouchableOpacity
        title={title}
        //  style={tw`bg-${bgcolor} rounded-2xl h-10 w-52 justify-center`}
        onPress={onPress}
        disabled={disabled}>
        <Text style={tw`h-14 w-80 text-white text-center top-4 text-base `}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  </>
);

export const Normalbutton = ({
  style,
  title,
  onPress,
  Setactivetab,
  Activetab,
  disabled,
}) => (
  <>
    <TouchableOpacity title={title} onPress={() => Setactivetab(title)}>
      <View  
      style={tw`bg-${Activetab === title ? 'blue-600' : 'gray-200'}  rounded-2xl w-20 h-10 items-center justify-center `}>
      <Text
        style={tw`text-${
          Activetab === title ? 'white' : 'black'
        } text-center text-xs left-${style}`}>
        {title}
      </Text>
      </View>
    </TouchableOpacity>
  </>
);

export const Logobutton = ({
  style,
  title,
  onPress,
  disabled,
  top,
  type,
  source,
}) => (
  <>
    <TouchableOpacity
      title={title}
      //  style={tw`bg-${bgcolor} rounded-2xl h-10 w-52 justify-center`}
      onPress={onPress}
      disabled={disabled}>
      <View
        style={tw`flex  flex-row top-${top} rounded-md text-center justify-center items-center  bg-white border h-13 w-80 border-gray-500  self-center  `}>
         <Image source={source} />
        <Text style={style}>{title}</Text> 
      </View>
    </TouchableOpacity>
  </>
);

export const Buttonnormal = ({style, title, onPress, disabled}) => (
  <>
    <LinearGradient
      colors={['#064FF8', '#55ACEE']}
      style={tw`top-8 -left-20 h-12 w-30 rounded-md  `}>
      <TouchableOpacity title={title} onPress={onPress} disabled={disabled}>
        <Text style={style}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  </>
);

export const UButton2 = ({style, title, onPress, disabled}) => (
  <>
    <LinearGradient
      colors={['#064FF8', '#55ACEE']}
      style={tw`top-5 self-center items-center justify-center  h-12 w-80 rounded-md  `}>
      <TouchableOpacity
        title={title}
        //  style={tw`bg-${bgcolor} rounded-2xl h-10 w-52 justify-center`}
        onPress={onPress}
        disabled={disabled}>
        <Text style={style}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  </>
);
export const Icons = ({style, title, onPress, disabled, type}) => (
  <>
    <View style={style}>
      <TouchableOpacity
        title={title}
        //  style={tw`bg-${bgcolor} rounded-2xl h-10 w-52 justify-center`}
        onPress={onPress}
        disabled={disabled}>
        {/* <SocialIcon type={type} /> */}
      </TouchableOpacity>
    </View>
  </>
);


export const Fadeanimation = ({animation}) => {
 
  Animated.timing(animation, {
    toValue: 1,
    duration:1500,
    useNativeDriver: true,
  }).start();

};
