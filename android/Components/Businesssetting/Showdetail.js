import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Showdetail = ({name, secondname, navigation, setingname}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
            {
                setingname === "" ?
                ""
                :
                navigation.navigate('Addbusinessdetails', {
                    Add_business_detail_name: setingname,
                  })
            }
        
        }}>
        <View style={tw`w-85 h-15 self-center mt-5 border-gray-400 border-b-2`}>
          <View>
            <Text style={tw`text-lg font-medium text-black`}>{name}</Text>
            <Text style={tw` text-base  text-gray-400`}>{secondname}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Showdetail;
