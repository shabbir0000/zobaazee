import {View, Text, Alert, TouchableOpacity, TextInput} from 'react-native';
import React, {useState,useEffect} from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/AntDesign';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Categories from '../Components/Businessname/Categories';

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

  return (
    <TextInput
      placeholder={placeholder}
      style={[tw`h-14 w-70 self-center rounded mb-3 pt-3 `]}
      onChangeText={handleInputChange}
      //  onFocus={handleFocus}
      onBlur={handleBlur}
      value={field.value}
    />
  );
};

const Businessname = ({navigation}) => {
    const [activetab, setactivetab] = useState();
     useEffect(() => {}, [activetab]);

  const validationSchema = Yup.object().shape({
    fieldName1: Yup.string().required('Field is required'),
  });

  return (
    <View style={[tw`flex flex-1`, {backgroundColor: '#ffffff'}]}>
      {/* Upper Box */}
      <View style={tw`h-40 items-center justify-center  w-full bg-blue-400`}>
        <View style={tw`items-start w-85 self-end`}>
          <Icon
            color={'white'}
            name="arrowleft"
            size={30}
            onPress={() => {
              navigation.goBack();
            }}></Icon>
          <Text style={tw`mt-3 font-bold text-lg text-white`}>
            Tell Us About Your Business Name
          </Text>
        </View>
      </View>

      {/* second box */}
      <View style={tw`h-10 items-center justify-center  w-full bg-blue-500`}>
        <View
          style={tw`items-center justify-between flex  flex-row w-85 self-center`}>
          <Text
            style={tw` font-bold text-base text-white`}
            onPress={() => {
              Alert.alert(
                'Alert!',
                'Plzz Login With Business Owner Account Add Your Email in Staff Managment Section And Try Again',
                [{text: 'OK'}],
              );
            }}>
            Already Have An Invitation ? Join As Staff
          </Text>
          <Icon color={'white'} name="right" size={30}></Icon>
        </View>
      </View>

      {/* Business name box  */}
      <View style={tw`mt-10`}>
        <Formik
          initialValues={{
            fieldName1: '',

            // Add more initial field values as needed
          }}
          validationSchema={validationSchema}
          onSubmit={values => {
            console.log(values);
          }}>
          {({handleSubmit}) => (
            <>
              {/* business name input */}
              <View
                style={tw`h-30 w-80  self-center items-center justify-center  rounded-md shadow-sm shadow-gray-300`}>
                <View style={tw`items-start w-70 self-center`}>
                  <Text style={tw`text-gray-500 font-medium text-lg mt-5`}>
                    Business Name
                  </Text>
                </View>
                <View style={tw`p-3  items-center`}>
                  {/* Add more input fields as needed */}

                  <Field
                    name="fieldName1"
                    placeholder="Business Name"
                    component={InputWithColorChange}
                  />

                  <ErrorMessage
                    name="fieldName3"
                    component={Text}
                    style={tw`mb-3 text-red-500`}
                  />
                </View>
              </View>

              <View
                style={tw`h-60 w-80 mt-5 self-center items-center justify-center  rounded-md shadow-sm shadow-gray-300`}>
                <View style={tw`items-start w-70 self-center`}>
                  <Text style={tw`text-gray-500 font-medium text-lg `}>
                    Business Type
                  </Text>
                  <Categories
                    activetab={activetab}
                    setactivetab={setactivetab}
                    navigation={navigation}
                    
                  />
                </View>
              </View>
              <Text style={tw`font-bold text-black`}>{activetab}</Text>
              <View
                style={tw`mt-5  justify-between self-center items-center w-80 `}>
                <TouchableOpacity onPress={handleSubmit}>
                  <View
                    style={tw` bg-blue-600 rounded-lg w-80 h-12 items-center self-center  justify-center`}>
                    <Text style={tw`font-bold text-white`}>CONTINUE</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Businessname;
