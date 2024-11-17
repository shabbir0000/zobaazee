import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import tw from 'twrnc';

const RowItem = ({data}) => {
  return (
    <>
    <View style={[styles.rowContainer, tw`  justify-between  w-70 self-center`]}>
      {data.map(
        (item, index) => (
          console.log('data:', data.length === 1 ? 'done' : 'not'),
          (
            // <View style={tw`border h-140 w-85 mb-3  flex-row self-center`}>
            <>
              <View
                style={tw`h-35 w-30 mt-5 items-center bg-white shadow-md `}
                key={index}>
                <View style={tw`h-16 w-16 mt-2 rounded-full bg-red-600`} />
                <Text style={tw`mt-2 font-semibold`}>{item.item}</Text>
                <Text style={tw`mt-2 font-semibold text-blue-600`}>
                  Rs{item.price} {index}
                </Text>
              </View>
            </>
          )
        ),
      )}
      
    </View>
   
    </>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    //  justifyContent: 'space-between',

    // paddingHorizontal: 10,
    marginBottom: 10,
  },
  itemContainer: {
    width: '30%', // Adjust this width as needed based on your requirements
    backgroundColor: '#f2f2f2',
    paddingVertical: 15,
    alignItems: 'center',
    //  justifyContent: 'center',
    borderRadius: 5,
  },
});

export default RowItem;
