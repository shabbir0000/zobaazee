import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {Normalbutton} from '../Ucomponents/Buttons';
import Icon from 'react-native-vector-icons/Octicons';

const Categories = ({activetab, setactivetab, navigation, id}) => {
  return (
    <View style={[tw`mt-5 w-75   self-center  `]}>
      <View style={tw`w-70 flex-row justify-between self-center `}>
        <Normalbutton
          title={'Retail'}
          Activetab={activetab}
          Setactivetab={setactivetab}
        />

        <Normalbutton
          title={'Whole Sale'}
          Activetab={activetab}
          Setactivetab={setactivetab}
        />

        <Normalbutton
          title={'Restaurent'}
          Activetab={activetab}
          Setactivetab={setactivetab}
        />
      </View>
      <View style={tw`w-70 mt-5 self flex-row justify-between self-center`}>
        <Normalbutton
          title={'Trader'}
          Activetab={activetab}
          Setactivetab={setactivetab}
        />

        <Normalbutton
          title={'Fastfood'}
          Activetab={activetab}
          Setactivetab={setactivetab}
        />

        <Normalbutton
          title={'Service'}
          Activetab={activetab}
          Setactivetab={setactivetab}
        />
      </View>
      <View style={tw`m-5 w-70  self-center justify-between flex-row`}>
        <Normalbutton
          title={'Other'}
          Activetab={activetab}
          Setactivetab={setactivetab}
        />
      </View>
    </View>
  );
};

export default Categories;
