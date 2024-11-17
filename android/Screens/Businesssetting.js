import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import Showdetail from '../Components/Businesssetting/Showdetail';

const Businesssetting = ({navigation}) => {
  const [loop, setloop] = useState([
    'Receipt ID Predix',
    'Tax Setting',
    'Discount Setting',
    'Payment Mode Setting',
    'Delivery Fee Settting',
    'Packing Fee Setting',
    'Service Fee Setting',
    'Other Fee Setting',
  ]);

  return (
    <View>
      <View style={tw`h-16 w-full bg-blue-600 items-center justify-center`}>
        <Text style={tw`text-center font-bold text-white text-xl`}>
          Business Setting
        </Text>
      </View>

      <ScrollView
        vertical
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{paddingBottom: 70}}>

        <Showdetail
          navigation={navigation}
          name={'Receipt ID Predix'}
          secondname={'AT-02'}
          setingname={""}
        />

        <Showdetail
          navigation={navigation}
          name={'Tax Setting'}
          secondname={'0 Type'}
          setingname={"Own Tax"}
        />

        <Showdetail
          navigation={navigation}
          name={'Discount Setting'}
          secondname={'0 Type'}
          setingname={"Own Discount"}
        />

        <Showdetail
          navigation={navigation}
          name={'Payment Mode Setting'}
          secondname={'Cash'}
          setingname={""}
        />

        <Showdetail
          navigation={navigation}
          name={'Delivery Fee Settting'}
          secondname={'0 Type'}
          setingname={"Own Fee"}
        />

        <Showdetail
          navigation={navigation}
          name={'Packing Fee Setting'}
          secondname={'0 Type'}
          setingname={"Own Packing Fee"}
        />

        <Showdetail
          navigation={navigation}
          name={'Service Fee Setting'}
          secondname={'0 Type'}
          setingname={"Own Service Fee"}
        />

        <Showdetail
          navigation={navigation}
          name={'Other Fee Setting'}
          secondname={'0 Type'}
          setingname={"Own Other Fee"}
        />

      </ScrollView>
    </View>
  );
};

export default Businesssetting;
