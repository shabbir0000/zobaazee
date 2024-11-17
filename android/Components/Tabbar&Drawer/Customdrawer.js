import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import {
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import Categories from '../Businessname/Categories';
// import Edit from "../Images/edit.svg"

const Customdrawer = props => {
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [activetab, setactivetab] = useState();
  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1);
  };
  const navigation = useNavigation();
  const navigateToScreen = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={tw`flex flex-1`}>
        {/* top title */}
        <View
          style={tw`flex -top-1 bg-blue-800  h-20 w-full self-center justify-around items-center `}>
          <Text style={tw`text-2xl font-extrabold text-white`}>
            ZOBAZEE POS
          </Text>
          <Text style={tw`text-xs  text-white`}>v-2.5.54</Text>
        </View>

        {/* profile box */}
        <View style={tw`flex mt-5 items-center  justify-around flex-row `}>
          <View style={tw`items-center justify-center`}>
            <Image
              source={{
                uri: 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png',
              }}
              style={tw`h-16 w-16`}
            />
            <Text
              style={tw`text-center font-extrabold text-lg mt-2 text-black`}>
              Name
            </Text>
          </View>

          <View style={tw`flex  flex-col `}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Editbusiness');
                }}>
                <Text style={tw`underline text-blue-700`}>Edit Business</Text>
              </TouchableOpacity>
            </View>
            <View style={tw`mt-5`}>
              <TouchableOpacity>
                <Text style={tw`underline text-blue-700`}>Add Business</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* profile */}
        <View
          style={tw`bg-gray-300 items-center justify-around mt-5 h-15 flex flex-row`}>
          <View>
            <Text>Name</Text>
            <Text>name23@gmail.com</Text>
          </View>
           
           <TouchableOpacity
           onPress={()=>{
            navigation.navigate("Editprofile")
           }}
           >
          <View>
            <Image
              source={require('../../Images/edit.png')}
              style={tw`h-8 w-8`}
            />
          </View>
          </TouchableOpacity>
        </View>

        {/* switch account */}
        <View>
          <View
            style={tw`w-40 h-10 bg-blue-700  mt-2 justify-center rounded-md items-center self-center`}>
            <TouchableOpacity onPress={toggleModal1}>
              <Text style={tw`text-white`}>SWITCH BUSINESS</Text>
            </TouchableOpacity>
          </View>

          <Modal
            isVisible={isModalVisible1}
            animationIn={'bounceInUp'}
            avoidKeyboard={false}
            onBackButtonPress={() => toggleModal1()}
            style={tw`items-center  justify-end flex-1  `}
            animationOut={'zoomOut'}>
            <>
              {/* business name input */}
              <View style={tw`h-130 self-center w-100 bg-slate-100 rounded-lg `}>
                <View
                  style={tw`h-16 w-full bg-blue-600 items-center justify-center`}>
                  <Text style={tw`text-center font-bold text-white text-xl`}>
                    SWITCH ACCOUNT
                  </Text>
                </View>
                <>
                  <View
                    style={tw`h-30 mt-5 border rounded-lg bg-blue-600 w-30 self-center items-center justify-center`}>
                    <View style={tw` w-30 items-center self-center`}>
                      <Image
                      source={require("../../Images/photo.png")}
                      style={tw`h-12 w-12`}
                      />
                      <Text style={tw`text-white font-medium text-lg`}>
                        Baniya
                      </Text>
                      <Text style={tw`text-gray-200 font-medium text-lg`}>
                        Owner
                      </Text>
                    </View>
                    <View style={tw` items-center`}>
                      {/* Add more input fields as needed */}
                    </View>
                  </View>
                </>

                <View
                  style={tw`mt-5  justify-between self-center items-center w-80 `}>
                  <TouchableOpacity onPress={toggleModal1}>
                    <View
                      style={tw` bg-blue-600 rounded-lg w-80 h-12 items-center self-center  justify-center`}>
                      <Text style={tw`font-bold text-white`}>CONTINUE</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          </Modal>
        </View>

        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default Customdrawer;
