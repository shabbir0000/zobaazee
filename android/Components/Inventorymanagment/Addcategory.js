import {View, Text, Image,TouchableOpacity,TextInput} from 'react-native';
import React ,{useState} from 'react';
import tw from 'twrnc';
import * as Yup from 'yup';
import {Formik, Form, Field, ErrorMessage} from 'formik';

const Addcategory = () => {


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
      });

  return (
    <View style={tw`flex-1`}>
      <View style={tw`h-16 w-full justify-center items-center bg-blue-600`}>
        <Text style={tw`text-center text-white font-semibold text-lg`}>
          ADD CATEGORY
        </Text>
      </View>

      <View style={tw`mt-10`}>
        <Image
          style={tw`h-30 w-30 self-center  `}
          source={require('../../Images/photo.png')}
        />

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
                    placeholder="Enter Category Name"
                    component={InputWithColorChange}
                  />

                  <ErrorMessage
                    name="fieldName1"
                    component={Text}
                    style={tw`mb-3 border text-red-500`}
                  />

                  <View style={tw`mt-5 items-end w-80 `}>
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
    </View>
  );
};

export default Addcategory;
