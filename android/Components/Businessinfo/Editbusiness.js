import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';

import React, {useState, useEffect} from 'react';
import tw from 'twrnc';
import * as Yup from 'yup';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import CountryPicker from 'react-native-country-picker-modal';
import TimeZone from 'react-native-timezone';
import Modal from 'react-native-modal';
import Categories from '../Businessname/Categories';

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
  fieldName3: Yup.string().nonNullable().notRequired(),
  // Add more fields and validation rules as needed
});

const Editbusiness = ({navigation}) => {
  const [activetab, setactivetab] = useState();
  const [Timezonee, setTimezone] = useState();
  const [flag, setflag] = useState(false);
  const [countryCode, setCountryCode] = useState('FR');
  const [country, setCountry] = useState(null);
  const [withFilter, setWithFilter] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  
  const [visible, setVisible] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFlag, setWithFlag] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  

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

  return (
    <View style={[tw`flex flex-1`, {backgroundColor: '#ffffff'}]}>
      <View style={tw`h-16 w-full bg-blue-600 items-center justify-center`}>
        <Text style={tw`text-center font-bold text-white text-xl`}>
          UPDATE BUSINESS
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
            <View>
              <ScrollView
                vertical
                showsVerticalScrollIndicator={true}
                contentContainerStyle={{paddingBottom: 50}}>
                <View style={tw`self-center items-start`}>
                  <>
                    <Field
                      name="fieldName1"
                      placeholder="Business Name"
                      component={InputWithColorChange}
                    />

                    <ErrorMessage
                      name="fieldName1"
                      component={Text}
                      style={tw`mb-3 text-red-500`}
                    />
                  </>
                </View>

                <View
                  style={tw`flex-row items-center justify-between h-15 w-80 mt-5 self-center `}>
                  <View
                    style={tw`h-15 w-39 items-center justify-center bg-slate-200`}>
                    <Text style={tw`text-slate-600 font-medium text-base`}>
                      Location
                    </Text>
                    <Text style={tw`text-white font-medium text-lg`}>
                      {Timezonee}
                    </Text>
                  </View>

                  <View
                    style={tw`h-15 w-39 justify-center items-center  bg-slate-200`}>
                    <View
                      style={tw`items-center  justify-center  w-39 self-center`}>
                      <CountryPicker
                        {...{
                          withFilter,
                          withFlag,
                          withCountryNameButton: false,
                          //  withAlphaFilter,
                          // withCallingCode,
                          // withEmoji,
                          onSelect,
                          countryCode: 'PK',
                        }}
                        visible={flag}
                      />

                      <View style={tw`w-39 items-center`}>
                        {country !== null && (
                          <Text
                            numberOfLines={1}
                            style={tw`text-white  font-medium text-lg `}>
                            {country.name}
                          </Text>
                        )}
                      </View>
                    </View>
                  </View>
                </View>

                <View
                  style={tw`flex-row justify-between h-15 w-80 mt-5 self-center `}>
                  <View
                    style={tw`h-15 w-39 items-center  justify-center bg-slate-200`}>
                    <View>
                      <Text style={tw`text-gray-500  font-medium text-lg `}>
                        Currency
                      </Text>
                      {country !== null && (
                        <Text
                          style={tw`text-white text-center font-medium text-lg `}>
                          {country.currency}
                        </Text>
                      )}
                    </View>
                  </View>

                  <View
                    style={tw`h-15 w-39 items-center justify-center bg-slate-200`}>
                    <TouchableOpacity onPress={toggleModal}>
                      <Text>Select Business Type</Text>
                      <Text style={tw`font-bold text-black`}>{activetab}</Text>
                    </TouchableOpacity>
                  </View>

                  <Modal
                    isVisible={isModalVisible}
                    animationIn={'bounceInUp'}
                    avoidKeyboard={false}
                    onBackButtonPress={() => toggleModal()}
                    style={tw`items-center  justify-end flex-1  `}
                    animationOut={'zoomOut'}>
                    <>
                      {/* business name input */}
                      <View
                        style={tw`h-130 self-center w-100 bg-white rounded-lg `}>
                        {activetab === 'Other' && (
                          <>
                            <View
                              style={tw`h-30 mt-5  w-80 self-center items-center justify-center`}>
                              <View style={tw` w-80 self-center`}>
                                <Text
                                  style={tw`text-gray-500 font-medium text-lg mt-5`}>
                                  Business Name
                                </Text>
                              </View>
                              <View style={tw` items-center`}>
                                {/* Add more input fields as needed */}

                                <Field
                                  name="fieldName3"
                                  placeholder={activetab}
                                  component={InputWithColorChange}
                                />

                                <ErrorMessage
                                  name="fieldName3"
                                  component={Text}
                                  style={tw`mb-3 text-red-500`}
                                />
                              </View>
                            </View>
                          </>
                        )}
                        <View
                          style={tw`h-60 w-80 mt-5 self-center items-center justify-center  rounded-md shadow-sm shadow-gray-300`}>
                          <View style={tw`items-start w-70 self-center`}>
                            <Text
                              style={tw`text-gray-500 font-medium text-lg `}>
                              Business Type
                            </Text>
                            <Categories
                              activetab={activetab}
                              setactivetab={setactivetab}
                              navigation={navigation}
                            />
                          </View>
                        </View>

                        <View
                          style={tw`mt-5  justify-between self-center items-center w-80 `}>
                          <TouchableOpacity onPress={toggleModal}>
                            <View
                              style={tw` bg-blue-600 rounded-lg w-80 h-12 items-center self-center  justify-center`}>
                              <Text style={tw`font-bold text-white`}>
                                CONTINUE
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </>
                  </Modal>

               
                </View>

                <View
                  style={tw`flex-row justify-between h-15 w-80 mt-5 self-center `}>
                  <View style={tw`h-15 w-39 bg-slate-200`}>
                    <Text>Location</Text>
                  </View>

                  <View style={tw`h-15 w-39 bg-slate-200`}>
                    <Text>Location</Text>
                  </View>
                </View>

                <View style={tw`self-center mt-5 items-start`}>
                  <Field
                    name="fieldName2"
                    placeholder="Phone Number"
                    component={InputWithColorChange}
                  />

                  <ErrorMessage
                    name="fieldName2"
                    component={Text}
                    style={tw`mb-3 text-red-500`}
                  />
                </View>

                <View
                  style={tw`mt-5 self-center flex-row justify-between w-80 `}>
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
              </ScrollView>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Editbusiness;
