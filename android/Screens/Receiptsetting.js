import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import React, {useEffect, useState, useReducer} from 'react';
import Collapsible from 'react-native-collapsible';
import CheckBox from '@react-native-community/checkbox';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import tw from 'twrnc';

import {Calendar, LocaleConfig} from 'react-native-calendars';
import Modal from 'react-native-modal';

const validationSchema = Yup.object().shape({
  fieldName1: Yup.string().required('Field is required'),
  fieldName2: Yup.string().required('Field is required'),
  fieldName3: Yup.string().required('Field is required'),
  tax: Yup.string().nonNullable().notRequired(),
  website: Yup.string().nonNullable().notRequired(),
  receipttitle: Yup.string().nonNullable().notRequired(),
  note: Yup.string().nonNullable().notRequired(),
  bill: Yup.string().nonNullable().notRequired(),
  // Add more fields and validation rules as needed
});

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
        tw`h-12 w-70 border-2 pl-3 bg-gray-100  rounded pt-3 `,
        {borderColor: inputBorderColor},
      ]}
      onChangeText={handleInputChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={field.value}
    />
  );
};

const Receiptsetting = () => {
  const [collapsed1, setcollapsed1] = useState(true);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  let today = new Date().getDate();
  let today1 = new Date().getMonth();
  let today2 = new Date().getFullYear();
  const [selected, setSelected] = useState(today2 + '/' + today1 + '/' + today);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [isModalVisible1, setModalVisible1] = useState(false);
  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1);
  };

  const toggles = {
    phone: false,
    address: false,
    tax: false,
    website: false,
    receipttitle: false,
    showrate: false,
    cashier: false,
    customerphone: false,
    customeraddress: false,
    changeamount: false,
    paymentdetail: false,
  };

  const collapese = {
    sellingprice: true,
    stock: true,
    autoupdate: true,
    barcode: true,
    trackex: true,
    addtax: true,
    notes: true,
    modifier: true,
    recipe: true,
    tags: true,
    mrp: true,
  };

  const [toggle, settoggle] = useReducer(
    //--> below line implies. that take old state & update the current state and return the `new state`  this is called a `Reducer` function.
    (student, newDetails) => ({...student, ...newDetails}),
    toggles,
  );

  const [collapsedd, setcollapsedd] = useReducer(
    //--> below line implies. that take old state & update the current state and return the `new state`  this is called a `Reducer` function.
    (student, newDetails) => ({...student, ...newDetails}),
    collapese,
  );

  return (
    <View style={tw`flex-1`}>
      <View style={tw`h-16 w-full bg-blue-600 items-center justify-center`}>
        <Text style={tw`text-center font-bold text-white text-xl`}>
          RECEIPT SETTING
        </Text>
      </View>
      <Formik
        initialValues={{
          fieldName1: '',
          fieldName2: '',
          fieldName3: '',
          tax: '',
          website: '',
          receipttitle: '',
          note: '',
          bill: '',
          // Add more initial field values as needed
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
        }}>
        {({handleSubmit}) => (
          <>
            <View style={[tw`flex `]}>
              <ScrollView
                vertical
                showsVerticalScrollIndicator={true}
                contentContainerStyle={{paddingBottom: 50}}>
                <View style={tw`mb-5 mt-5 `}>
                  <View
                    style={tw`flex items-center w-85 self-center bg-white h-20 pl-2 flex-row`}>
                    <View>
                      <Text style={tw`text-gray-500 mb-1`}>Business Name</Text>

                      <Field
                        name="fieldName1"
                        placeholder="Add Name"
                        component={InputWithColorChange}
                      />
                    </View>
                  </View>

                  {/* phone */}
                  <View style={tw` h-36 self-center bg-white mt-2  `}>
                    <View
                      style={tw`w-80 mt-2 flex-row items-center self-center justify-start`}>
                      <Text>Phone Number</Text>
                    </View>
                    <View
                      style={tw`flex flex-col   h-20 mt-3 justify-between  pl-2 pr-2  `}>
                      <View>
                        <Field
                          name="fieldName2"
                          placeholder="Phone"
                          component={InputWithColorChange}
                        />

                        <ErrorMessage
                          name="fieldName3"
                          component={Text}
                          style={tw`mb-3 text-red-500`}
                        />
                      </View>

                      <View style={tw`flex-row items-center justify-end mt-5 `}>
                        <CheckBox
                          disabled={false}
                          // onCheckColor="blue"
                          value={toggle.phone}
                          onValueChange={newValue => (
                            settoggle({phone: newValue}), console.log('press')
                          )}
                          tintColors={{
                            true: 'blue',
                            false: 'black',
                          }}
                        />
                        <Text>Show in Receipt</Text>
                      </View>
                    </View>

                    <Collapsible collapsed={collapsedd.sellingprice}>
                      <View
                        style={tw`w-85 bg-white  text-base font-mono mb-5 h-auto `}>
                        <View style={tw`flex flex-col items-center mt-2`}>
                          <View>
                            <Text style={tw`text-gray-500 mb-1`}>
                              Purchased Price
                            </Text>

                            <Field
                              name="fieldName1"
                              placeholder="0.00"
                              component={InputWithColorChange}
                            />
                          </View>

                          <View style={tw`mt-5`}>
                            <Text style={tw`text-gray-500 mb-1`}>
                              Margin (%)
                            </Text>

                            <Field
                              name="fieldName1"
                              placeholder="0"
                              component={InputWithColorChange}
                            />
                          </View>
                        </View>
                      </View>
                    </Collapsible>
                  </View>

                  {/* address */}
                  <View style={tw` h-36 self-center bg-white mt-2  `}>
                    <View
                      style={tw`w-80 mt-2 flex-row items-center self-center justify-start`}>
                      <Text>Address</Text>
                    </View>
                    <View
                      style={tw`flex flex-col   h-20 mt-3 justify-between  pl-2 pr-2  `}>
                      <View>
                        <Field
                          name="fieldName3"
                          placeholder="Address"
                          component={InputWithColorChange}
                        />

                        <ErrorMessage
                          name="fieldName3"
                          component={Text}
                          style={tw`mb-3 text-red-500`}
                        />
                      </View>

                      <View style={tw`flex-row items-center justify-end mt-5 `}>
                        <CheckBox
                          disabled={false}
                          // onCheckColor="blue"
                          value={toggle.address}
                          onValueChange={newValue => (
                            settoggle({address: newValue}), console.log('press')
                          )}
                          tintColors={{
                            true: 'blue',
                            false: 'black',
                          }}
                        />
                        <Text>Show in Receipt</Text>
                      </View>
                    </View>

                    <Collapsible collapsed={collapsedd.sellingprice}>
                      <View
                        style={tw`w-85 bg-white  text-base font-mono mb-5 h-auto `}>
                        <View style={tw`flex flex-col items-center mt-2`}>
                          <View>
                            <Text style={tw`text-gray-500 mb-1`}>
                              Purchased Price
                            </Text>

                            <Field
                              name="fieldName1"
                              placeholder="0.00"
                              component={InputWithColorChange}
                            />
                          </View>

                          <View style={tw`mt-5`}>
                            <Text style={tw`text-gray-500 mb-1`}>
                              Margin (%)
                            </Text>

                            <Field
                              name="fieldName1"
                              placeholder="0"
                              component={InputWithColorChange}
                            />
                          </View>
                        </View>
                      </View>
                    </Collapsible>
                  </View>

                  {/* Tax number */}
                  <View style={tw` h-36 self-center bg-white mt-2  `}>
                    <View
                      style={tw`w-80 mt-2 flex-row items-center self-center justify-start`}>
                      <Text>Tax Number</Text>
                    </View>
                    <View
                      style={tw`flex flex-col   h-20 mt-3 justify-between  pl-2 pr-2  `}>
                      <View>
                        <Field
                          name="tax"
                          placeholder="Tax No"
                          component={InputWithColorChange}
                        />

                        <ErrorMessage
                          name="fieldName3"
                          component={Text}
                          style={tw`mb-3 text-red-500`}
                        />
                      </View>

                      <View style={tw`flex-row items-center justify-end mt-5 `}>
                        <CheckBox
                          disabled={false}
                          // onCheckColor="blue"
                          value={toggle.tax}
                          onValueChange={newValue => (
                            settoggle({tax: newValue}), console.log('press')
                          )}
                          tintColors={{
                            true: 'blue',
                            false: 'black',
                          }}
                        />
                        <Text>Show in Receipt</Text>
                      </View>
                    </View>

                    <Collapsible collapsed={collapsedd.sellingprice}>
                      <View
                        style={tw`w-85 bg-white  text-base font-mono mb-5 h-auto `}>
                        <View style={tw`flex flex-col items-center mt-2`}>
                          <View>
                            <Text style={tw`text-gray-500 mb-1`}>
                              Purchased Price
                            </Text>

                            <Field
                              name="fieldName1"
                              placeholder="0.00"
                              component={InputWithColorChange}
                            />
                          </View>

                          <View style={tw`mt-5`}>
                            <Text style={tw`text-gray-500 mb-1`}>
                              Margin (%)
                            </Text>

                            <Field
                              name="fieldName1"
                              placeholder="0"
                              component={InputWithColorChange}
                            />
                          </View>
                        </View>
                      </View>
                    </Collapsible>
                  </View>

                  {/* Website */}
                  <View style={tw` h-36 self-center bg-white mt-2  `}>
                    <View
                      style={tw`w-80 mt-2 flex-row items-center self-center justify-start`}>
                      <Text>Website</Text>
                    </View>
                    <View
                      style={tw`flex flex-col   h-20 mt-3 justify-between  pl-2 pr-2  `}>
                      <View>
                        <Field
                          name="website"
                          placeholder="Website"
                          component={InputWithColorChange}
                        />

                        <ErrorMessage
                          name="fieldName3"
                          component={Text}
                          style={tw`mb-3 text-red-500`}
                        />
                      </View>

                      <View style={tw`flex-row items-center justify-end mt-5 `}>
                        <CheckBox
                          disabled={false}
                          // onCheckColor="blue"
                          value={toggle.website}
                          onValueChange={newValue => (
                            settoggle({website: newValue}), console.log('press')
                          )}
                          tintColors={{
                            true: 'blue',
                            false: 'black',
                          }}
                        />
                        <Text>Show in Receipt</Text>
                      </View>
                    </View>

                    <Collapsible collapsed={collapsedd.sellingprice}>
                      <View
                        style={tw`w-85 bg-white  text-base font-mono mb-5 h-auto `}>
                        <View style={tw`flex flex-col items-center mt-2`}>
                          <View>
                            <Text style={tw`text-gray-500 mb-1`}>
                              Purchased Price
                            </Text>

                            <Field
                              name="fieldName1"
                              placeholder="0.00"
                              component={InputWithColorChange}
                            />
                          </View>

                          <View style={tw`mt-5`}>
                            <Text style={tw`text-gray-500 mb-1`}>
                              Margin (%)
                            </Text>

                            <Field
                              name="fieldName1"
                              placeholder="0"
                              component={InputWithColorChange}
                            />
                          </View>
                        </View>
                      </View>
                    </Collapsible>
                  </View>

                  {/* Receipt Title */}
                  <View style={tw` h-36 self-center bg-white mt-2  `}>
                    <View
                      style={tw`w-80 mt-2 flex-row items-center self-center justify-start`}>
                      <Text>Receipt Title</Text>
                    </View>
                    <View
                      style={tw`flex flex-col   h-20 mt-3 justify-between  pl-2 pr-2  `}>
                      <View>
                        <Field
                          name="receipttitle"
                          placeholder="Receipt Title"
                          component={InputWithColorChange}
                        />

                        <ErrorMessage
                          name="fieldName3"
                          component={Text}
                          style={tw`mb-3 text-red-500`}
                        />
                      </View>

                      <View style={tw`flex-row items-center justify-end mt-5 `}>
                        <CheckBox
                          disabled={false}
                          // onCheckColor="blue"
                          value={toggle.receipttitle}
                          onValueChange={newValue => (
                            settoggle({receipttitle: newValue}),
                            console.log('press')
                          )}
                          tintColors={{
                            true: 'blue',
                            false: 'black',
                          }}
                        />
                        <Text>Show in Receipt</Text>
                      </View>
                    </View>

                    <Collapsible collapsed={collapsedd.sellingprice}>
                      <View
                        style={tw`w-85 bg-white  text-base font-mono mb-5 h-auto `}>
                        <View style={tw`flex flex-col items-center mt-2`}>
                          <View>
                            <Text style={tw`text-gray-500 mb-1`}>
                              Purchased Price
                            </Text>

                            <Field
                              name="fieldName1"
                              placeholder="0.00"
                              component={InputWithColorChange}
                            />
                          </View>

                          <View style={tw`mt-5`}>
                            <Text style={tw`text-gray-500 mb-1`}>
                              Margin (%)
                            </Text>

                            <Field
                              name="fieldName1"
                              placeholder="0"
                              component={InputWithColorChange}
                            />
                          </View>
                        </View>
                      </View>
                    </Collapsible>
                  </View>

                  {/* Receipt Setting */}
                  <View style={tw` h-70 w-85 self-center bg-white mt-2  `}>
                    <View style={tw`ml-5 mt-5`}>
                      <Text style={tw`text-blue-600 font-semibold text-2xl`}>
                        Receipt Options
                      </Text>
                      <Text style={tw`text-gray-400`}>
                        Business Logo (prefelable Black And White For Better
                        Printing)
                      </Text>
                    </View>
                    <View
                      style={tw`h-30 w-85 mt-5 justify-center items-center`}>
                      <Image
                        source={require('../Images/photo.png')}
                        style={tw`h-25 w-25`}
                      />
                    </View>
                  </View>

                  <View style={tw` h-130 w-85 self-center bg-white mt-2  `}>
                    <View style={tw`ml-5 mt-5`}>
                      <Text style={tw`text-blue-600 font-semibold text-2xl`}>
                        Receipt Options
                      </Text>
                    </View>

                    <View
                      style={tw`flex-row items-center self-center justify-between w-75 mt-5 `}>
                      <Text style={tw`font-semibold`}>
                        Show Rate in Receipt
                      </Text>
                      <CheckBox
                        disabled={false}
                        // onCheckColor="blue"
                        value={toggle.showrate}
                        onValueChange={newValue => (
                          settoggle({showrate: newValue}), console.log('press')
                        )}
                        tintColors={{
                          true: 'blue',
                          false: 'black',
                        }}
                      />
                    </View>

                    <View
                      style={tw`flex-row items-center self-center justify-between w-75 mt-5 `}>
                      <Text style={tw`font-semibold`}>
                        Show Cashier Name in Receipt
                      </Text>
                      <CheckBox
                        disabled={false}
                        // onCheckColor="blue"
                        value={toggle.cashier}
                        onValueChange={newValue => (
                          settoggle({cashier: newValue}), console.log('press')
                        )}
                        tintColors={{
                          true: 'blue',
                          false: 'black',
                        }}
                      />
                    </View>

                    <View
                      style={tw`flex-row items-center self-center justify-between w-75 mt-5 `}>
                      <Text style={tw`font-semibold`}>
                        Show Customer Phone On Receipt
                      </Text>
                      <CheckBox
                        disabled={false}
                        // onCheckColor="blue"
                        value={toggle.customerphone}
                        onValueChange={newValue => (
                          settoggle({customerphone: newValue}),
                          console.log('press')
                        )}
                        tintColors={{
                          true: 'blue',
                          false: 'black',
                        }}
                      />
                    </View>

                    <View
                      style={tw`flex-row items-center self-center justify-between w-75 mt-5 `}>
                      <Text style={tw`font-semibold`}>
                        Show Customer Address On Receipt
                      </Text>
                      <CheckBox
                        disabled={false}
                        // onCheckColor="blue"
                        value={toggle.customeraddress}
                        onValueChange={newValue => (
                          settoggle({customeraddress: newValue}),
                          console.log('press')
                        )}
                        tintColors={{
                          true: 'blue',
                          false: 'black',
                        }}
                      />
                    </View>

                    <View
                      style={tw`flex-row items-center self-center justify-between w-75 mt-5 `}>
                      <Text style={tw`font-semibold`}>
                        Show Change Amount On Receipt
                      </Text>
                      <CheckBox
                        disabled={false}
                        // onCheckColor="blue"
                        value={toggle.changeamount}
                        onValueChange={newValue => (
                          settoggle({changeamount: newValue}),
                          console.log('press')
                        )}
                        tintColors={{
                          true: 'blue',
                          false: 'black',
                        }}
                      />
                    </View>

                    <View
                      style={tw`flex-row items-center self-center justify-between w-75 mt-5 `}>
                      <Text style={tw`font-semibold`}>
                        Show Payment Detail On Receipt
                      </Text>
                      <CheckBox
                        disabled={false}
                        // onCheckColor="blue"
                        value={toggle.paymentdetail}
                        onValueChange={newValue => (
                          settoggle({paymentdetail: newValue}),
                          console.log('press')
                        )}
                        tintColors={{
                          true: 'blue',
                          false: 'black',
                        }}
                      />
                    </View>

                    <View
                      style={tw`flex items-center w-85 self-center bg-white h-20 pl-5 flex-row`}>
                      <View>
                        <Text style={tw`text-gray-500 mt-10 mb-1`}>
                          Thank You Note
                        </Text>

                        <Field
                          name="note"
                          placeholder="Add Note"
                          component={InputWithColorChange}
                        />
                      </View>
                    </View>
                  </View>

                  <View style={tw` h-40 w-85 self-center bg-white mt-2`}>
                    <View
                      style={tw`flex items-center w-85 self-center bg-white h-20 flex-col`}>
                      <Text style={tw`text-blue-600 text-xl `}>
                        SMS / Watsapp / Email / Template Subject
                      </Text>
                      <View style={tw`mt-5`}>
                        <Field
                          name="bill"
                          placeholder="Total Bill Amount #Total"
                          component={InputWithColorChange}
                        />
                      </View>
                    </View>
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
                </View>
              </ScrollView>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Receiptsetting;
