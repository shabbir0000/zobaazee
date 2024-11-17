import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import tw from 'twrnc';
import {FAB} from '@rneui/themed';
import * as Yup from 'yup';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import CheckBox from '@react-native-community/checkbox';

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
        tw`h-14 w-70 border-2 pl-3  rounded mb-3 pt-3 mt-5`,
        {borderColor: inputBorderColor},
      ]}
      onChangeText={handleInputChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={field.value}
    />
  );
};

const AddDetails = ({route}) => {
  const {Add_business_detail_name} = route.params;
  const [checkbox, setcheckbox] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };

  const validationSchema = Yup.object().shape({
    fieldName1: Yup.string().required('Field is required'),
    fieldName2: Yup.string().required('Field is required'),
  });

  return (
    <View style={tw`flex-1`}>
      <View style={tw`h-16 w-full bg-blue-600 items-center justify-center`}>
        <Text style={tw`text-center font-bold text-white text-xl`}>
          {Add_business_detail_name}
        </Text>
      </View>

      <Modal
        isVisible={isModalVisible2}
        animationIn={'bounceInUp'}
        avoidKeyboard={false}
        onBackButtonPress={() => toggleModal2()}
        style={tw`self-center items-center  flex-1  `}
        animationOut={'zoomOut'}>
        <View
          style={tw`h-100 self-center justify-center w-80 bg-white rounded-lg `}>
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
                  <View style={tw` w-70 self-center items-start`}>
                    <View
                      style={tw`h-10 w-80 bg-blue-600 items-center self-center justify-center`}>
                      <Text
                        style={tw`text-center font-bold text-white text-xl`}>
                        Add {Add_business_detail_name}
                      </Text>
                    </View>

                    <Field
                      name="fieldName1"
                      placeholder={`${Add_business_detail_name} Name`}
                      component={InputWithColorChange}
                    />

                    <Field
                      name="fieldName2"
                      placeholder={`${Add_business_detail_name} Value in %`}
                      component={InputWithColorChange}
                    />

                    <View
                      style={tw`flex-row items-center  justify-between w-40 mt-5 `}>
                      <CheckBox
                        disabled={false}
                        // onCheckColor="blue"
                        value={checkbox}
                        onValueChange={newValue => setcheckbox(newValue)}
                        tintColors={{
                          true: 'blue',
                          false: 'black',
                        }}
                      />
                      <Text style={tw`font-semibold`}>
                        Default Add TO Bill
                      </Text>
                    </View>

                    <View style={tw`mt-10 flex-row justify-between w-70 `}>
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
                  </View>
                </View>
              </>
            )}
          </Formik>
        </View>
      </Modal>

      <View style={tw`items-center justify-center mt-50 `}>
        <Text style={tw`text-gray-400 text-lg mt-2`}>No Values Found</Text>
      </View>

      <FAB
        visible={true}
        onPress={toggleModal2}
        placement="right"
        title="Add"
        icon={{name: 'add', color: 'white'}}
        color="blue"
      />
    </View>
  );
};

export default AddDetails;
