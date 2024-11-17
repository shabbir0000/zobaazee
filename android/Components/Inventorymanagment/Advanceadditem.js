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
import Pendingsale from '../Counter/Pendingsale';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Modal from 'react-native-modal';

const validationSchema = Yup.object().shape({
  fieldName1: Yup.string().required('Field is required'),
  fieldName2: Yup.string().required('Field is required'),
  fieldName3: Yup.string().required('Field is required'),
  purchasedprice: Yup.string().nonNullable().notRequired(),
  margin: Yup.string().nonNullable().notRequired(),
  barcode: Yup.string().nonNullable().notRequired(),
  addtax: Yup.string().nonNullable().notRequired(),
  notes: Yup.string().nonNullable().notRequired(),
  category: Yup.string().nonNullable().notRequired(),
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
        tw`h-12 w-60 border-2 pl-3 bg-gray-100  rounded pt-3 `,
        {borderColor: inputBorderColor},
      ]}
      onChangeText={handleInputChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={field.value}
    />
  );
};

const Advanceadditem = () => {
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
    sellingprice: false,
    stock: false,
    autoupdate: false,
    barcode: false,
    trackex: false,
    addtax: false,
    notes: false,
    modifier: false,
    recipe: false,
    tags: false,
    mrp: false,
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
          ADD VERIANT'S
        </Text>
      </View>
      <Formik
        initialValues={{
          fieldName1: '',
          fieldName2: '',
          fieldName3: '',
          purchasedprice: '',
          margin: '',
          barcode: '',
          addtax: '',
          notes: '',
          category: '',
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
                    style={tw`flex items-center w-85 self-center bg-white h-20 flex-row`}>
                    <View style={tw`w-20 h-12 items-center justify-center `}>
                      <View style={tw`rounded-full bg-red-500 h-10 w-10`} />
                    </View>
                    <View>
                      <Text style={tw`text-gray-500 mb-1`}>Variant Name</Text>

                      <Field
                        name="fieldName1"
                        placeholder="Ex 500gram,1kg,1 litre"
                        component={InputWithColorChange}
                      />
                    </View>
                  </View>

                  {/* selling price */}
                  <View style={tw` h-auto self-center bg-white mt-2  `}>
                    <View
                      style={tw`w-80 mt-2 flex-row items-center self-center justify-between`}>
                      <Text>Selling price</Text>
                      <Text>Track Profit ?</Text>
                    </View>
                    <View
                      style={tw`flex flex-row   h-20 mt-3 justify-between  pl-2 pr-2  `}>
                      <View>
                        <Field
                          name="fieldName3"
                          placeholder="0.00"
                          component={InputWithColorChange}
                        />

                        <ErrorMessage
                          name="fieldName3"
                          component={Text}
                          style={tw`mb-3 text-red-500`}
                        />
                      </View>

                      <View>
                        <CheckBox
                          disabled={false}
                          // onCheckColor="blue"
                          value={toggle.sellingprice}
                          onValueChange={newValue => (
                            settoggle({sellingprice: newValue}),
                            setcollapsedd({
                              sellingprice: !collapsedd.sellingprice,
                            }),
                            console.log('press')
                          )}
                          tintColors={{
                            true: 'blue',
                            false: 'black',
                          }}
                        />
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

                  {/* stock price */}
                  <View style={tw` h-auto self-center bg-white mt-2  `}>
                    <View
                      style={tw`w-80 mt-2 flex-row items-center self-center justify-between`}>
                      <Text>Stock Available</Text>
                      <Text>Low Stock Alert?</Text>
                    </View>
                    <View
                      style={tw`flex flex-row  h-20 mt-3  justify-between pl-2 pr-2  `}>
                      <View>
                        <Field
                          name="fieldName3"
                          placeholder="0"
                          component={InputWithColorChange}
                        />
                        <ErrorMessage
                          name="fieldName3"
                          component={Text}
                          style={tw`mb-3 text-red-500`}
                        />
                      </View>
                      <View>
                        <CheckBox
                          disabled={false}
                          // onCheckColor="blue"
                          value={toggle.stock}
                          onValueChange={newValue => (
                            settoggle({stock: newValue}),
                            setcollapsedd({stock: !collapsedd.stock}),
                            console.log('press')
                          )}
                          tintColors={{
                            true: 'blue',
                            false: 'black',
                          }}
                        />
                      </View>
                    </View>

                    <Collapsible collapsed={collapsedd.stock}>
                      <View
                        style={tw`w-85 bg-white  text-base font-mono mb-5 h-auto `}>
                        <View style={tw`flex flex-col items-center mt-2`}>
                          <View>
                            <Text style={tw`text-gray-500 mb-1`}>
                              Low Stock Alert
                            </Text>

                            <Field
                              name="fieldName1"
                              placeholder="Below 5"
                              component={InputWithColorChange}
                            />
                          </View>
                        </View>
                      </View>
                    </Collapsible>
                  </View>

                  {/* auto update stock */}
                  <View style={tw` h-auto w-85 self-center bg-white  `}>
                    <View
                      style={tw`flex flex-row  items-center h-16 justify-between pl-2 pr-2  `}>
                      <Image
                        style={tw`h-7 w-7`}
                        source={require('../../Images/buy.png')}
                      />

                      <View style={tw`flex w-70 flex-row items-center`}>
                        <CheckBox
                          disabled={false}
                          // onCheckColor="blue"
                          value={toggle.autoupdate}
                          onValueChange={newValue => (
                            settoggle({autoupdate: newValue}),
                            setcollapsedd({autoupdate: !collapsedd.autoupdate}),
                            console.log('press')
                          )}
                          tintColors={{
                            true: 'blue',
                            false: 'black',
                          }}
                        />

                        <Text>Auto update stock on item sale</Text>
                      </View>
                    </View>

                    <Collapsible collapsed={collapsedd.autoupdate}>
                      <View
                        style={tw`flex flex-row  items-center h-16  justify-between pl-2 pr-2  `}>
                        <Image
                          style={tw`h-7 w-7`}
                          source={require('../../Images/lock.png')}
                        />

                        <View style={tw`flex w-70 flex-row items-center`}>
                          <CheckBox
                            disabled={false}
                            // onCheckColor="blue"
                            value={toggleCheckBox1}
                            onValueChange={newValue => (
                              setToggleCheckBox1(newValue),
                              setcollapsed1(!collapsed1),
                              console.log('press')
                            )}
                            tintColors={{
                              true: 'blue',
                              false: 'black',
                            }}
                          />

                          <Text>Prevent Item sale when out of stock?</Text>
                        </View>
                      </View>
                    </Collapsible>
                  </View>

                  {/* barcode */}
                  <View style={tw` h-auto w-85 self-center bg-white mt-2 `}>
                    <View
                      style={tw`flex flex-row  items-center h-16 justify-between pl-2 pr-2  `}>
                      <Image
                        style={tw`h-7 w-7`}
                        source={require('../../Images/qr-code.png')}
                      />

                      <View
                        style={tw`flex w-70 justify-between flex-row items-center`}>
                        <Text style={tw`font-semibold text-base`}>
                          Barcode?
                        </Text>

                        <CheckBox
                          disabled={false}
                          // onCheckColor="blue"
                          value={toggle.barcode}
                          onValueChange={newValue => (
                            settoggle({barcode: newValue}),
                            setcollapsedd({barcode: !collapsedd.barcode}),
                            console.log('press')
                          )}
                          tintColors={{
                            true: 'blue',
                            false: 'black',
                          }}
                        />
                      </View>
                    </View>

                    <Collapsible collapsed={collapsedd.barcode}>
                      <View
                        style={tw`flex flex-col  items-center h-auto pb-3  justify-between pl-2 pr-2  `}>
                        <View style={tw`flex w-70 flex-col items-center`}>
                          <Field
                            name="barcode"
                            placeholder="N/A"
                            component={InputWithColorChange}
                          />
                          <View
                            style={tw`flex-row mt-3 w-70 justify-between self-center`}>
                            <TouchableOpacity>
                              <View
                                style={tw`h-10 w-30 bg-green-500 justify-center rounded-md`}>
                                <Text style={tw`text-white text-center `}>
                                  GENERATE
                                </Text>
                              </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                              <View
                                style={tw`h-10 w-30 bg-blue-500 justify-center rounded-md`}>
                                <Text style={tw`text-white text-center `}>
                                  SCAN
                                </Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </Collapsible>
                  </View>

                  {/* expiry */}
                  <View
                    style={tw` h-auto w-85 self-center bg-${
                      toggle.trackex === true ? 'gray-300' : 'white'
                    } mt-2 `}>
                    <View
                      style={tw`flex flex-row  items-center h-16 justify-between pl-2 pr-2  `}>
                      <Image
                        style={tw`h-7 w-7`}
                        source={require('../../Images/calendar.png')}
                      />

                      <View
                        style={tw`flex w-70 justify-between flex-row items-center`}>
                        <Text style={tw`font-semibold text-base`}>
                          Track Expiry?
                        </Text>

                        <CheckBox
                          disabled={false}
                          // onCheckColor="blue"
                          value={toggle.trackex}
                          onValueChange={newValue => (
                            settoggle({trackex: newValue}),
                            setcollapsedd({trackex: !collapsedd.trackex}),
                            console.log('press')
                          )}
                          tintColors={{
                            true: 'blue',
                            false: 'black',
                          }}
                        />
                      </View>
                    </View>

                    <Collapsible
                      style={tw`bg-gray-300`}
                      collapsed={collapsedd.trackex}>
                      <View
                        style={tw`flex flex-row  items-center h-auto mb-5  justify-between pl-2 pr-2  `}>
                        <View style={tw`flex w-85 self-center  items-center`}>
                          <TouchableOpacity onPress={toggleModal}>
                            <View
                              style={tw`h-18 w-35 rounded-sm  bg-white items-center justify-center`}>
                              <Text style={tw`text-gray-300`}>
                                Select Expiry
                              </Text>
                              <Text
                                style={tw`text-gray-300 text-base font-semibold`}>
                                {selected}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </Collapsible>
                  </View>
                  <Modal
                    isVisible={isModalVisible}
                    animationIn={'bounceInUp'}
                    avoidKeyboard={false}
                    onBackButtonPress={() => toggleModal()}
                    style={tw`self-center items-center  flex-1  `}
                    animationOut={'zoomOut'}>
                    <View
                      style={tw`h-80 self-center w-85 bg-white rounded-lg `}>
                      <View
                        style={tw` w-80 h-70 items-center justify-center self-center mt-5 `}>
                        <Calendar
                          onDayPress={day => {
                            setSelected(day.dateString);
                            toggleModal();
                          }}
                          markedDates={{
                            [selected]: {
                              selected: true,
                              disableTouchEvent: true,
                              selectedDotColor: 'orange',
                            },
                          }}
                        />
                      </View>
                    </View>
                  </Modal>

                  {/* tax */}
                  <View
                    style={tw` h-auto w-85 self-center bg-${
                      toggle.addtax === true ? 'gray-300' : 'white'
                    } mt-2 `}>
                    <View
                      style={tw`flex flex-row  items-center h-16 justify-between pl-2 pr-2  `}>
                      <Image
                        style={tw`h-7 w-7`}
                        source={require('../../Images/tax.png')}
                      />

                      <View
                        style={tw`flex w-70 justify-between flex-row items-center`}>
                        <Text style={tw`font-semibold text-base`}>
                          Add Tax?
                        </Text>

                        <CheckBox
                          disabled={false}
                          // onCheckColor="blue"
                          value={toggle.addtax}
                          onValueChange={newValue => (
                            settoggle({addtax: newValue}),
                            setcollapsedd({addtax: !collapsedd.addtax}),
                            console.log('press')
                          )}
                          tintColors={{
                            true: 'blue',
                            false: 'black',
                          }}
                        />
                      </View>
                    </View>

                    <Collapsible
                      style={tw`bg-gray-300 `}
                      collapsed={collapsedd.addtax}>
                      <View
                        style={tw`flex flex-col   items-center h-auto mb-5  justify-between pl-2 pr-2  `}>
                        <View>
                          <Text style={tw`text-white mb-1`}>Add Tax (%)</Text>

                          <Field
                            name="fieldName1"
                            placeholder="Ex 500gram,1kg,1 litre"
                            component={InputWithColorChange}
                          />
                        </View>

                        <View style={tw`flex w-60 mt-3 flex-row items-center`}>
                          <CheckBox
                            disabled={false}
                            // onCheckColor="blue"
                            value={toggleCheckBox1}
                            onValueChange={newValue => (
                              setToggleCheckBox1(newValue),
                              setcollapsed1(!collapsed1),
                              console.log('press')
                            )}
                            tintColors={{
                              true: 'blue',
                              false: 'black',
                            }}
                          />

                          <Text style={tw`text-white`}>Inclusive</Text>
                        </View>
                      </View>
                    </Collapsible>
                  </View>

                  {/* internal notes */}

                  <View
                    style={tw` h-auto w-85 self-center bg-${
                      toggle.notes === true ? 'gray-300' : 'white'
                    } mt-2 `}>
                    <View
                      style={tw`flex flex-row  items-center h-16 justify-between pl-2 pr-2  `}>
                      <Image
                        style={tw`h-7 w-7`}
                        source={require('../../Images/notes.png')}
                      />

                      <View
                        style={tw`flex w-70 justify-between flex-row items-center`}>
                        <Text style={tw`font-semibold text-base`}>
                          Internal Notes
                        </Text>

                        <CheckBox
                          disabled={false}
                          // onCheckColor="blue"
                          value={toggle.notes}
                          onValueChange={newValue => (
                            settoggle({notes: newValue}),
                            setcollapsedd({notes: !collapsedd.notes}),
                            console.log('press')
                          )}
                          tintColors={{
                            true: 'blue',
                            false: 'black',
                          }}
                        />
                      </View>
                    </View>

                    <Collapsible
                      style={tw`bg-gray-300`}
                      collapsed={collapsedd.notes}>
                      <View
                        style={tw`flex flex-col  items-center h-auto mb-5 justify-between pl-2 pr-2  `}>
                        <View style={tw`flex w-70 flex-row items-center`}>
                          <View>
                            <Text style={tw`text-white mb-1`}>Add Notes</Text>

                            <Field
                              name="notes"
                              placeholder="Enter Notes"
                              component={InputWithColorChange}
                            />
                          </View>
                        </View>
                      </View>
                    </Collapsible>
                  </View>

                  {/* modifier */}
                  <View
                    style={tw` h-auto w-85 self-center bg-${
                      toggle.modifier === true ? 'gray-300' : 'white'
                    } mt-2 `}>
                    <View
                      style={tw`flex flex-row  items-center h-16 justify-between pl-2 pr-2  `}>
                      <Image
                        style={tw`h-7 w-7`}
                        source={require('../../Images/compose.png')}
                      />

                      <View
                        style={tw`flex w-70 justify-between flex-row items-center`}>
                        <Text style={tw`font-semibold text-base`}>
                          Modifiers
                        </Text>

                        <CheckBox
                          disabled={false}
                          // onCheckColor="blue"
                          value={toggle.modifier}
                          onValueChange={newValue => (
                            settoggle({modifier: newValue}),
                            setcollapsedd({modifier: !collapsedd.modifier}),
                            console.log('press')
                          )}
                          tintColors={{
                            true: 'blue',
                            false: 'black',
                          }}
                        />
                      </View>
                    </View>

                    <Collapsible
                      style={tw`bg-gray-300`}
                      collapsed={collapsedd.modifier}>
                      <View
                        style={tw`flex flex-col items-center h-auto mb-5 justify-between pl-2 pr-2  `}>
                        {/* <View style={tw`flex w-60 bg-white justify-between self-center flex-row items-center`}>
                          <View style={tw`left-3 `}>
                          <Text style={tw`text-blue-600 text-base`}>yup</Text>
                          <Text style={tw`text-gray-400 `}>up = 0.200</Text>
                          </View>
                          
                          <CheckBox
                            disabled={false}
                            // onCheckColor="blue"
                            style={tw`right-3`}
                            value={toggleCheckBox1}
                            onValueChange={newValue => (
                              setToggleCheckBox1(newValue),
                              setcollapsed1(!collapsed1),
                              console.log('press')
                            )}
                            tintColors={{
                              true: 'blue',
                              false: 'black',
                            }}
                          />

                         
                        </View> */}
                        <Text style={tw`text-white`}>
                          No Modifer Set Plzz Add Modifier First
                        </Text>
                      </View>
                    </Collapsible>
                  </View>

                  {/* recipe */}
                  <View
                    style={tw` h-auto w-85 self-center bg-${
                      toggle.recipe === true ? 'gray-300' : 'white'
                    } mt-2 `}>
                    <View
                      style={tw`flex flex-row  items-center h-16 justify-between pl-2 pr-2  `}>
                      <Image
                        style={tw`h-7 w-7`}
                        source={require('../../Images/recipe.png')}
                      />

                      <View
                        style={tw`flex w-70 justify-between flex-row items-center`}>
                        <Text style={tw`font-semibold text-base`}>Recipe</Text>

                        <CheckBox
                          disabled={false}
                          // onCheckColor="blue"
                          value={toggle.recipe}
                          onValueChange={newValue => (
                            settoggle({recipe: newValue}),
                            setcollapsedd({recipe: !collapsedd.recipe}),
                            console.log('press')
                          )}
                          tintColors={{
                            true: 'blue',
                            false: 'black',
                          }}
                        />
                      </View>
                    </View>

                    <Collapsible
                      style={tw`bg-gray-300`}
                      collapsed={collapsedd.recipe}>
                      <View
                        style={tw`flex flex-row items-center h-auto mb-5 justify-center pl-2 pr-2  `}>
                        <View
                          style={tw`flex bg-white rounded-md w-60 h-20  items-center`}>
                          <Text style={tw`text-xs text-gray-400`}>
                            No Recipe Set.Tap To Manage The Recipe
                          </Text>
                          <TouchableOpacity>
                            <View
                              style={tw`h-10 w-30 mt-3 bg-blue-500 justify-center rounded-md`}>
                              <Text style={tw`text-white text-center `}>
                                MANAGE
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </Collapsible>
                  </View>

                  {/* tags */}
                  <View
                    style={tw` h-auto w-85 self-center bg-${
                      toggle.tags === true ? 'gray-300' : 'white'
                    } mt-2 `}>
                    <View
                      style={tw`flex flex-row  items-center h-16 justify-between pl-2 pr-2  `}>
                      <Image
                        style={tw`h-7 w-7`}
                        source={require('../../Images/price-tag.png')}
                      />

                      <View
                        style={tw`flex w-70 justify-between flex-row items-center`}>
                        <Text style={tw`font-semibold text-base`}>Tags</Text>

                        <CheckBox
                          disabled={false}
                          // onCheckColor="blue"
                          value={toggle.tags}
                          onValueChange={newValue => (
                            settoggle({tags: newValue}),
                            setcollapsedd({tags: !collapsedd.tags}),
                            console.log('press')
                          )}
                          tintColors={{
                            true: 'blue',
                            false: 'black',
                          }}
                        />
                      </View>
                    </View>

                    <Collapsible
                      style={tw`bg-gray-300`}
                      collapsed={collapsedd.tags}>
                      <View
                        style={tw`flex items-center h-auto mb-5 justify-center   `}>
                        <View
                          style={tw`flex bg-white rounded-md w-60 h-20 justify-center items-center`}>
                          <Text style={tw`text-xs text-center text-gray-400`}>
                            No tAGS
                          </Text>
                          <TouchableOpacity onPress={toggleModal1}>
                            <View
                              style={tw`h-10 w-30 mt-3 bg-blue-500 justify-center rounded-md`}>
                              <Text style={tw`text-white text-center `}>
                                EDIT TAGS
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </Collapsible>
                  </View>

                  <Modal
                    isVisible={isModalVisible1}
                    animationIn={'bounceInUp'}
                    avoidKeyboard={false}
                    onBackButtonPress={() => toggleModal1()}
                    style={tw`self-center items-center justify-end flex-1  `}
                    animationOut={'zoomOut'}>
                    <View
                      style={tw`h-120 border  self-center w-100 bg-white rounded-lg `}>
                      <View
                        style={tw`h-12 w-full bg-slate-100 items-center justify-center`}>
                        <Text style={tw`text-center text-black`}>
                          SELECT TAGS
                        </Text>
                      </View>
                      <View style={tw`self-center mt-5`}>
                        <Text style={tw`text-gray-500 mb-1`}>ADD TAGS</Text>

                        <Field
                          name="fieldName1"
                          placeholder="Enter Tag"
                          component={InputWithColorChange}
                        />
                      </View>
                      <TouchableOpacity>
                        <View
                          style={tw`h-10 w-60 mt-5 bg-blue-600 rounded-md items-center justify-center self-center`}>
                          <Text style={tw`font-normal text-center text-white `}>
                            Add New TAGS
                          </Text>
                        </View>
                      </TouchableOpacity>
                      {/* <FlatList data={rows} renderItem={renderItem} /> */}
                    </View>
                  </Modal>
                  {/* MRP */}
                  <View
                    style={tw` h-auto w-85 self-center bg-${
                      toggle.mrp === true ? 'gray-300' : 'white'
                    } mt-2 `}>
                    <View
                      style={tw`flex flex-row  items-center h-16 justify-between pl-2 pr-2  `}>
                      <Image
                        style={tw`h-7 w-7`}
                        source={require('../../Images/price-tags.png')}
                      />

                      <View
                        style={tw`flex w-70 justify-between flex-row items-center`}>
                        <Text style={tw`font-semibold text-base`}>
                          Add Compare Price/MRP
                        </Text>

                        <CheckBox
                          disabled={false}
                          // onCheckColor="blue"
                          value={toggle.mrp}
                          onValueChange={newValue => (
                            settoggle({mrp: newValue}),
                            setcollapsedd({mrp: !collapsedd.mrp}),
                            console.log('press')
                          )}
                          tintColors={{
                            true: 'blue',
                            false: 'black',
                          }}
                        />
                      </View>
                    </View>

                    <Collapsible
                      style={tw`bg-gray-300`}
                      collapsed={collapsedd.mrp}>
                      <View
                        style={tw`flex flex-col items-center h-auto mb-5  justify-between pl-2 pr-2  `}>
                        <View style={tw`flex w-70 flex-row items-center`}>
                          <View>
                            <Text style={tw`text-white mb-1`}>
                              Add 0r Display Mrp
                            </Text>

                            <Field
                              name="fieldName1"
                              placeholder="0.00"
                              component={InputWithColorChange}
                            />
                          </View>
                        </View>
                      </View>
                    </Collapsible>
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

export default Advanceadditem;
