import React, {useState, useEffect} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import tw from 'twrnc';

import { InputWithColorChange } from './Signup';

const validationSchema = Yup.object().shape({
  fieldName1: Yup.string().required('Field is required'),

  // Add more fields and validation rules as needed
});



const Forget = () => {
 
  return (
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
            <View style={tw`w-85 self-center`}>
              <Text style={tw`font-bold text-2xl mt-5 `}>Recover Password</Text>
             
              
            </View>

            <View style={tw`w-80 self-center`}>
            
            <Text style={tw`font-normal text-lg mt-5 `}>
             Get Instruction Send To This Email That How To Recover Your Password              
              </Text>
            </View>
            <View style={tw`p-3 mt-5 items-center`}>
              

              {/* Add more input fields as needed */}
              

              <Field
                name="fieldName1"
                placeholder="Password"
                component={InputWithColorChange}
              />

              <ErrorMessage
                name="fieldName3"
                component={Text}
                style={tw`mb-3 text-red-500`}
              />
              

              <View style={tw`mt-5 items-end w-80 `}>
             
                <TouchableOpacity onPress={handleSubmit}>
                  <View
                    style={tw` bg-blue-600 rounded-md w-20 h-10 items-center justify-center`}>                 
                    <Text style={tw`font-bold text-white`}>SEND</Text>
                  </View>                 
                </TouchableOpacity>
               
              </View>

              <View style={tw`w-80 mt-5 flex-row justify-end  self-center`}>
                <Text style={tw`underline font-bold text-blue-900 mr-5`} >Term Of Service</Text>
                <Text style={tw`underline font-bold text-blue-900`}  >Privacy Policy</Text>
              
              </View>
            </View>
          </View>
        </>
      )}
    </Formik>
  );
};

export default Forget;


