import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import * as Yup from 'yup';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Modal from 'react-native-modal';
import Showcategory from './Showcateory';
import Advanceadditem from './Advanceadditem';

const Additem = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [category, setcategory] = useState('Category Ex: Fruit');
  const [category1, setcategory1] = useState('Select Selling Category');
  const [title, settitle] = useState('Simple');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1);
  };

  const renderItem = ({item}) => {
    return (
      <Showcategory data={item} category={setcategory} off={setModalVisible} />
    );
  };

  const data = [
    {item: 'rice', price: 200},
    {item: 'fruit', price: 200},
    {item: 'apple', price: 200},
    {item: 'dryfruit', price: 200},
    {item: 'sela rice', price: 200},
    {item: 'orange', price: 200},
    {item: 'potato', price: 200},
    {item: 'milk', price: 200},
    {item: 'doodh', price: 200},
    {item: 'doodh', price: 200},
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

  const InputWithColorChange = ({field, form, placeholder}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const handleInputChange = text => {
      form.setFieldValue(field.name, text);
    };

    const inputBorderColor = isFocused ? 'black' : 'gray';

    return (
      <TextInput
        placeholder={placeholder}
        style={[
          tw`h-14 w-80 border-2 pl-3  rounded mb-3 pt-3 mt-5`,
          {borderColor: inputBorderColor},
        ]}
        onChangeText={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={field.value}
      />
    );
  };

  const validationSchema = Yup.object().shape({
    fieldName1: Yup.string().required('Field is required'),
    fieldName2: Yup.string().required('Field is required'),
    fieldName3: Yup.string().required('Field is required'),
    // Add more fields and validation rules as needed
  });

  return (
    <View>
      <View style={tw`h-16 w-full bg-blue-600 items-center justify-center`}>
        <Text style={tw`text-center font-bold text-white text-xl`}>
          ADD ITEM'S
        </Text>
      </View>
      <Formik
        initialValues={{
          fieldName1: '',
          fieldName2: '',
          fieldName3: '',
          // Add more initial field values as needed
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
        }}>
        {({handleSubmit}) => (
          <>
            <View style={[tw`flex flex-1`, {backgroundColor: '#ffffff'}]}>
              <View style={tw`p-3  items-start`}>
                <Field
                  name="fieldName1"
                  placeholder="Item name"
                  component={InputWithColorChange}
                />

                <ErrorMessage
                  name="fieldName1"
                  component={Text}
                  style={tw`mb-3 text-red-500`}
                />

                {/* Add more input fields as needed */}
                <View
                  style={tw`flex h-16 items-center justify-between w-75 flex-row`}>
                  <TouchableOpacity onPress={toggleModal}>
                    <View
                      style={tw`felx flex-row justify-between w-80 items-center`}>
                      <View
                        style={tw`h-14 w-70 border-2 border-gray-500 items-start justify-center rounded-md`}>
                        <Text style={tw`ml-3 font-normal text-gray-600`}>
                          {category}
                        </Text>
                      </View>
                      <Image
                        style={tw`h-10 w-10`}
                        source={require('../../Images/down.png')}
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <Modal
                  isVisible={isModalVisible}
                  animationIn={'bounceInUp'}
                  avoidKeyboard={false}
                  onBackButtonPress={() => toggleModal()}
                  style={tw`self-center items-center justify-end flex-1  `}
                  animationOut={'zoomOut'}>
                  <View
                    style={tw`h-120 border  self-center w-100 bg-white rounded-lg `}>
                    <View
                      style={tw`h-12 w-full bg-slate-100 items-center justify-center`}>
                      <Text style={tw`text-center text-black`}>
                        SELECT CATEGORY
                      </Text>
                    </View>
                    <TouchableOpacity>
                      <View
                        style={tw`h-10 w-80 mt-5 bg-blue-600 rounded-md items-center justify-center self-center`}>
                        <Text style={tw`font-normal text-center text-white `}>
                          Add New Category
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <FlatList data={rows} renderItem={renderItem} />
                  </View>
                </Modal>

                <View
                  style={tw`flex h-16 mt-5 items-center justify-between w-75 flex-row`}>
                  <TouchableOpacity onPress={toggleModal1}>
                    <View
                      style={tw`felx flex-row justify-between w-80 items-center`}>
                      <View
                        style={tw`h-14 w-70 border-2 border-gray-500 items-start justify-center rounded-md`}>
                        <Text style={tw`ml-3 font-normal text-gray-600`}>
                          {category1}
                        </Text>
                      </View>
                      <Image
                        style={tw`h-10 w-10`}
                        source={require('../../Images/down.png')}
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <Modal
                  isVisible={isModalVisible1}
                  animationIn={'bounceInUp'}
                  avoidKeyboard={false}
                  onBackButtonPress={() => toggleModal1()}
                  style={tw`self-center items-center justify-end flex-1  `}
                  animationOut={'zoomOut'}>
                  <View style={tw`h-50 self-center w-85 bg-white rounded-lg `}>
                    <View
                      style={tw` w-80 h-40 items-center justify-center self-center mt-5 `}>
                      <View
                        style={tw`flex-row justify-between w-75 h-32 items-center self-center `}>
                        <TouchableOpacity
                          onPress={() => {
                            setcategory1('Sell By Unit'),
                              setModalVisible1(false);
                          }}>
                          <View
                            style={tw`bg-white shadow-lg items-center justify-evenly  h-28 w-35`}>
                            <Text
                              style={tw`text-blue-700 text-base font-medium`}>
                              Sell By Unit
                            </Text>
                            <Text style={tw`text-xs text-center`}>
                              sell as a whole and fix unit
                            </Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => {
                            setcategory1('Sell By Fraction'),
                              setModalVisible1(false);
                          }}>
                          <View
                            style={tw`bg-white shadow-lg items-center justify-evenly  h-28 w-35`}>
                            <Text
                              style={tw`text-blue-700 text-base font-medium`}>
                              Sell By Fraction
                            </Text>
                            <Text style={tw`text-xs text-center`}>
                              sell as loose with 1:100
                              {'\n'}
                              eg 1kg = 1000 gram
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>

                <View style={tw`h-12 mt-5 flex-row w-80 justify-center`}>
                  <TouchableOpacity
                    onPress={() => {
                      settitle('Simple');
                    }}>
                    <View
                      style={tw`h-12 w-40 items-center justify-center bg-${
                        title === 'Simple' ? 'blue-600' : 'white'
                      }`}>
                      <Text
                        style={tw`text-${
                          title === 'Simple' ? 'white' : 'black'
                        } font-medium`}>
                        Simple
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      settitle('Advance');
                    }}>
                    <View
                      style={tw`h-12 w-40 items-center justify-center bg-${
                        title === 'Advance' ? 'blue-600' : 'white'
                      }`}>
                      <Text
                        style={tw`text-${
                          title === 'Advance' ? 'white' : 'black'
                        } font-medium`}>
                        Advanced
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

                {title === 'Simple' ? (
                  <>
                    <Field
                      name="fieldName3"
                      placeholder="Selling Price"
                      component={InputWithColorChange}
                    />

                    <ErrorMessage
                      name="fieldName3"
                      component={Text}
                      style={tw`mb-3 text-red-500`}
                    />

                    <View style={tw`mt-5 flex-row justify-between w-80 `}>
                      <TouchableOpacity onPress={handleSubmit}>
                        <View
                          style={tw` bg-blue-600 rounded-md w-20 h-10 items-center justify-center`}>
                          <Text style={tw`font-bold text-white`}>DELETE</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={handleSubmit}>
                        <View
                          style={tw` bg-blue-600 rounded-md w-20 h-10 items-center justify-center`}>
                          <Text style={tw`font-bold text-white`}>SAVE</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </>
                ) : (
                  <>
                    {/*  */}
                    {/* <Advanceadditem/> */}
                    <View style={tw`self-center mt-20`}>
                      <TouchableOpacity onPress={()=>{
                        navigation.navigate("Advanceadditem")
                      }}>
                        <View
                          style={tw` bg-blue-600 rounded-md w-40 h-10 items-center justify-center`}>
                          <Text style={tw`font-bold text-white`}>
                            ADD VARIANT +
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Additem;
