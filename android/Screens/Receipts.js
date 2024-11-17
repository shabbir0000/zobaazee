import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Calendar} from 'react-native-calendars';
import Modal from 'react-native-modal';
import tw from 'twrnc';
import {FAB} from '@rneui/themed';

const Receipts = () => {
  let today = new Date().getDate();
  let today1 = new Date().getMonth();
  let today3 = new Date().getMonth();
  console.log(today3);
  let today2 = new Date().getFullYear();
  const [selected, setSelected] = useState(today2 + '/' + today1 + '/' + today);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [selected1, setSelected1] = useState(
    today2 + '/' + today1 + '/' + today,
  );
  const [isModalVisible1, setModalVisible1] = useState(false);
  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1);
  };

  const [isModalVisible2, setModalVisible2] = useState(false);
  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };

  return (
    <View style={tw`flex-1`}>
      <View style={tw`h-16 w-full bg-blue-600 items-center justify-center`}>
        <Text style={tw`text-center font-bold text-white text-xl`}>
          RECIEPT'S
        </Text>
      </View>

      <View
        style={tw` w-85  h-20 justify-between flex-row self-center items-center`}>
        <View style={tw`flex w-40 items-center`}>
          <TouchableOpacity onPress={toggleModal}>
            <View
              style={tw`h-16 w-35 rounded-lg  bg-blue-700 items-center justify-center`}>
              <Text style={tw`text-white`}>From</Text>
              <Text style={tw`text-white text-base font-semibold`}>
                {selected}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={tw`flex w-40 items-center`}>
          <TouchableOpacity onPress={toggleModal}>
            <View
              style={tw`h-16 w-35 rounded-lg  bg-blue-700 items-center justify-center`}>
              <Text style={tw`text-white`}>To</Text>
              <Text style={tw`text-white text-base font-semibold`}>
                {selected}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        isVisible={isModalVisible}
        animationIn={'bounceInUp'}
        avoidKeyboard={false}
        onBackButtonPress={() => toggleModal()}
        style={tw`self-center items-center  flex-1  `}
        animationOut={'zoomOut'}>
        <View
          style={tw`h-110 self-center items-center justify-center w-85 bg-white rounded-lg `}>
          <View
            style={tw` w-80 h-70 items-center justify-center self-center  `}>
            <Calendar
              initialDate=""
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

      <Modal
        isVisible={isModalVisible1}
        animationIn={'bounceInUp'}
        avoidKeyboard={false}
        onBackButtonPress={() => toggleModal1()}
        style={tw`self-center items-center  flex-1  `}
        animationOut={'zoomOut'}>
        <View
          style={tw`h-110 justify-center items-center self-center w-85 bg-white rounded-lg `}>
          <View
            style={tw` w-80 h-70 items-center justify-center self-center mt-5 `}>
            <Calendar
              onDayPress={day => {
                setSelected1(day.dateString);
                toggleModal1();
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

      <Modal
        isVisible={isModalVisible2}
        animationIn={'bounceInUp'}
        avoidKeyboard={false}
        onBackButtonPress={() => toggleModal2()}
        style={tw`self-center items-center  flex-1  `}
        animationOut={'zoomOut'}>
        <View style={tw`h-40 self-center justify-center w-80 bg-white rounded-lg `}>
          <TouchableOpacity>
            <View style={tw` ml-5`}>
              <Text style={tw`text-xl font-semibold `}>All</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={tw`mt-5 ml-5`}>
              <Text style={tw`text-xl mt-5 font-semibold `}>CASH</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={tw`items-center justify-center mt-40 `}>
        <Image
          source={require('../Images/noitem.png')}
          style={tw`h-28 w-28 `}
        />

        <Text style={tw`text-gray-400 mt-2`}>
          No Receipts Please Add Receipts
        </Text>
      </View>

      <FAB
        visible={true}
        onPress={toggleModal2}
        placement="right"
        title="filter"
        icon={{name: 'filter', color: 'white'}}
        color="blue"
      />
    </View>
  );
};

export default Receipts;
