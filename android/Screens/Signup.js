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

const validationSchema = Yup.object().shape({
  fieldName1: Yup.string().required('Field is required'),
  fieldName2: Yup.string().required('Field is required'),
  fieldName3: Yup.string().required('Field is required'),
  // Add more fields and validation rules as needed
});

export const InputWithColorChange = ({field, form, placeholder}) => {
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

const Signup = () => {
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
              <Text style={tw`font-bold text-2xl mt-5 `}>Sign up</Text>
            </View>
            <View style={tw`p-3 mt-10 items-center`}>
              <Field
                name="fieldName1"
                placeholder="Email"
                component={InputWithColorChange}
              />

              <ErrorMessage
                name="fieldName1"
                component={Text}
                style={tw`mb-3 text-red-500`}
              />

              {/* Add more input fields as needed */}
              <Field
                name="fieldName2"
                placeholder="First Name"
                component={InputWithColorChange}
              />
              <ErrorMessage
                name="fieldName2"
                component={Text}
                style={tw`mb-3 text-red-500`}
              />

              <Field
                name="fieldName3"
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
                    <Text style={tw`font-bold text-white`}>SAVE</Text>
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

export default Signup;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  formContainer: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
