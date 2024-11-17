import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import tw from 'twrnc';

const Addmodifier = () => {
  const [inputRows, setInputRows] = useState([['', '']]);

  const handleInputChange = (text, rowIndex, inputIndex) => {
    const newInputRows = [...inputRows];
    newInputRows[rowIndex][inputIndex] = text;
    setInputRows(newInputRows);
  };

  const handleAddRow = () => {
    setInputRows([...inputRows, ['', '']]);
  };

  const handleDeleteRow = rowIndex => {
    if (inputRows.length > 1 || inputRows[rowIndex][0] !== '') {
      const newInputRows = inputRows.filter((_, index) => index !== rowIndex);
      setInputRows(newInputRows);
    }
  };

  const handleSubmit = () => {
    console.log('Form values:', inputRows);
    // setInputRows([['', '']]);
    const resetInputRows = inputRows.map(row => ['','']);
    setInputRows(resetInputRows); // Reset only the text within the input fields
 
  };

  return (
    <View style={{flex: 1}}>
      <View style={tw`h-16 w-full bg-blue-600 items-center justify-center`}>
        <Text style={tw`text-center font-bold text-white text-xl`}>
          CREATE MODIFIER
        </Text>
      </View>
      <View style={tw`flex-row ml-5  self-start w-70 mt-5 justify-between`}>
        <View style={tw`w-35`}>
          <Text>Enter name</Text>
        </View>
        <View style={tw`w-35`}>
          <Text>Enter Value</Text>
        </View>
      </View>
      {inputRows.map((inputFields, rowIndex) => (
        <View
          key={rowIndex}
          style={[
            {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
            tw` p-2`,
          ]}>
          {inputFields.map((value, inputIndex) => (
            <TextInput
              key={inputIndex}
              style={[
                {flex: 1, padding: 10, marginRight: 5},
                tw`rounded-md border-b`,
              ]}
              placeholder="Enter"
              value={value}
              onChangeText={text =>
                handleInputChange(text, rowIndex, inputIndex)
              }
            />
          ))}
          {inputFields.length > 1 || inputFields[0] ? (
            <TouchableOpacity onPress={() => handleDeleteRow(rowIndex)}>
              {/* <Text style={{ marginLeft: 10 }}>Delete</Text> */}
              <Image
                style={tw`h-8 w-8 ml-3`}
                source={require('../../Images/remove.png')}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      ))}
      <View style={tw`mt-5 flex-row justify-around  w-80 `}>
        <TouchableOpacity onPress={handleSubmit}>
          <View
            style={tw` bg-blue-600 rounded-md w-20 h-10 items-center justify-center`}>
            <Text style={tw`font-bold text-white`}>SAVE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAddRow}>
          <View
            style={tw` bg-blue-600 rounded-md w-20 h-10 items-center justify-center`}>
            <Text style={tw`font-bold text-white`}>ADD</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Addmodifier;
