import {View, Text, Alert, TouchableOpacity, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/AntDesign';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import TimeZone from 'react-native-timezone';
import Country from '../Components/Businesslocation/Country';
import CountryPicker from 'react-native-country-picker-modal';

const Businesslocation = ({navigation}) => {
  const [activetab, setactivetab] = useState();
  const [Timezonee, setTimezone] = useState();
  const [countryCode, setCountryCode] = useState('FR');
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withFlag, setWithFlag] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);
  
  const onSelect = country => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  useEffect(() => {
    const getTimeZone = async () => {
      const timeZone = await TimeZone.getTimeZone().then(zone => zone);
      setTimezone(timeZone);
    };

    getTimeZone();
  }, [activetab]);

 

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
            Your Business Location
          </Text>
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
                style={tw`h-30 w-80  self-center items-center  rounded-md shadow-sm shadow-gray-300`}>
                <View style={tw`items-start w-70 self-center`}>
                  <View style={tw`mt-5`}>
                    <CountryPicker
                      {...{
                        withFilter,
                        withFlag,
                        withCountryNameButton,
                        withAlphaFilter,
                        withCallingCode,
                        withEmoji,
                        onSelect,
                      }}
                      visible
                    />
                  </View>
                  {country !== null && (
                   <Text style={tw`text-gray-500 ml-5 font-medium text-lg mt-5`}>
                     {country.name}
                  </Text>
                    )}
                </View>
              </View>

              <View
                style={tw`h-30 w-80  self-center items-center  rounded-md shadow-sm shadow-gray-300`}>
                <View style={tw`items-start w-70 self-center`}>
                  <Text style={tw`text-gray-500 font-medium text-lg mt-5`}>
                    TImezone
                  </Text>
                  <Text style={tw`text-gray-500 ml-5 font-medium text-lg mt-5`}>
                    {TimeZone}
                  </Text>
                </View>
              </View>

              <View
                style={tw`h-30 w-80  self-center items-center  rounded-md shadow-sm shadow-gray-300`}>
                <View style={tw`items-start w-70 self-center`}>
                {country !== null && (  
                    <View>
                  <Text style={tw`text-gray-500  font-medium text-lg mt-5`}>
                    Currency
                  </Text>
                   <Text style={tw`text-gray-500 ml-10 font-medium text-lg mt-5`}>
                   {country.currency}
                   </Text>
                   </View>
                   )}
                </View>
              </View>

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

export default Businesslocation;
