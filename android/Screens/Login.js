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
import TimeZone from 'react-native-timezone';
import { InputWithColorChange } from './Signup';

const validationSchema = Yup.object().shape({
  fieldName1: Yup.string().required('Field is required'),

  // Add more fields and validation rules as needed
});


const Login = ({navigation}) => {
  useEffect(() => {
    const getTimeZone = async () => {
      const timeZone = await TimeZone.getTimeZone().then(zone => zone);
      console.log({timeZone});
    };

    getTimeZone();
  }, []);
  return (
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
          <View style={[tw`flex flex-1`, {backgroundColor: '#ffffff'}]}>
            <View style={tw`w-85 self-center`}>
              <Text style={tw`font-bold text-2xl mt-5 `}>Sign in</Text>
             
              
            </View>

            <View style={tw`w-80 self-center`}>
            <Text style={tw`font-bold text-2xl mt-5 `}>Welcome Back!</Text>
            <Text style={tw`font-semibold text-base mt-5 `}>
             You Are Already Used Demonaccount@gmail.com to Sign in Enter
              Your Password For That Account
              
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
              

              <View style={tw`mt-5 flex flex-row justify-between  items-center w-80 `}>
              <Text style={tw`font-bold text-black`}
              onPress={()=>{
                navigation.navigate("Forget")
              }}
              >Trouble singing in?</Text>
                <TouchableOpacity onPress={handleSubmit}>
                  <View
                    style={tw` bg-blue-600 rounded-md w-20 h-10 items-center justify-center`}>                 
                    <Text style={tw`font-bold text-white`}>SIGN IN</Text>
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

export default Login;


