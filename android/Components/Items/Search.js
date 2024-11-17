import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/Octicons';
import RowItem from '../Ucomponents/demo';

const Search = ({navigation}) => {
  const data = [
    {item: 'rice', price: 200},
    {item: 'fruit', price: 200},
    {item: 'apple', price: 200},
    // {item: 'dryfruit', price: 200},
    // {item: 'sela rice', price: 200},
    // {item: 'orange', price: 200},
    // {item: 'potato', price: 200},
    // {item: 'milk', price: 200},
    // {item: 'doodh', price: 200},
    // {item: 'doodh', price: 200},
  ];

  const chunkData = (data, size) => {
    const chunkedArr = [];
    let index = 0;
    while (index < data.length) {
      chunkedArr.push(data.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  };
  // const rows = chunkData(data, 2);

  // Add an extra item container in the last row if the last row doesn't have three items
  const rows = data.length > 0 ? chunkData(data, 2) : [];

  const newrow = rows.flat();
  console.log('ss', newrow);
  console.log('rows', rows.length);

  const renderItem = ({item}) => {
   
      return <RowItem data={item} />;
    
  };

  const renderFooter = () => {
    return (
      <TouchableOpacity>
        <View style={tw`w-70 mt-5 h-35  self-center`}>
          <View
            style={tw`h-30 w-30 bg-white shadow-lg rounded-md justify-center self-start items-center `}>
            <Image
              source={require('../../Images/add.png')}
              style={tw`h-10 w-10`}
            />
            <Text>Add Item</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = text => {
    setInputValue(text);
  };

  const handleButtonPress = async () => {
    inputValue.length == 0
      ? Alert.alert('Alert', 'Plzz Fill The Input First', [{text: 'OK'}])
      : navigation.navigate('Aftersearch', {
          inputValue,
          data,
        });
  };

  return (
    <View style={tw`flex-1`}>
      <View style={tw`bg-blue-700`}>
        <View style={tw`mt-2 mb-2 flex flex-row self-center w-80 items-center`}>
          <TextInput
            style={tw`h-12 w-70  bg-white pl-2  border border-gray-400 rounded-md`}
            placeholder="What Do You Want To Sell ?"
            onChangeText={handleInputChange}
            value={inputValue}
          />
          <TouchableOpacity
            onPress={() => {
              handleButtonPress();
            }}>
            <Icon name="search" size={20} color="black" style={tw`-ml-8`} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={tw`items-center justify-center mt-40 `}>
        <Image
          source={require('../../Images/noitem.png')}
          style={tw`h-28 w-28 `}
        />

        <Text style={tw`text-gray-400 mt-2`}>No Item Please Add Item</Text>

        <TouchableOpacity>
          <View style={tw`h-10 mt-2 w-70 rounded-md items-center justify-center bg-green-400`}>
            <Text style={tw`text-center text-lg font-semibold text-white`}>START ADDING</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* <View style={[styles.container]}>
        <FlatList
          data={rows}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
           ListFooterComponent={renderFooter}
          contentContainerStyle={styles.contentContainer}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  contentContainer: {
    paddingBottom: 10, // Add a bottom padding to accommodate the "Add Item" button
  },
  addItemButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    paddingVertical: 15,
    borderRadius: 5,
  },
  addItemButtonText: {
    fontWeight: 'bold',
  },
});

export default Search;
