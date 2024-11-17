import React ,{useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

const Showcategory = ({data,category ,off}) => {
    const [isModalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View
        style={[styles.rowContainer, tw`  justify-between   w-85 self-center`]}>
        {data.map(
          (item, index) => (
            console.log('data:', data.length === 1 ? 'done' : 'not'),
            (
              // <View style={tw`border h-140 w-85 mb-3  flex-row self-center`}>
              <>
                <TouchableOpacity 
                onPress={()=>{
                    category(item.item),
                    off(isModalVisible)
                }}
                >
                  <View
                    style={tw`h-30 w-40 mt-5 items-center bg-white shadow-md `}
                    key={index}>
                    <View style={tw`h-16 w-16 mt-2 rounded-full bg-gray-700`} />
                    <Text style={tw`mt-2 text-blue-600 font-black`}>
                      {item.item}
                    </Text>
                  </View>
                </TouchableOpacity>
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

export default Showcategory;
