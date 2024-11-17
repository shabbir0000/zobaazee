import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import All from '../Components/Inventorymanagment/All';
import Category from '../Components/Inventorymanagment/Category';
import Modifier from '../Components/Inventorymanagment/Modifier';
import Ingridiant from '../Components/Inventorymanagment/Ingridiant';
import Screensheader from '../Components/Ucomponents/Screensheader';
import {FAB} from '@rneui/themed';
import Modal from 'react-native-modal';

const Tab = createMaterialTopTabNavigator();

const Inventorymanagment = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={tw`flex-1`}>
      <Screensheader
        name={'Inventory Managment'}
        left={10}
        onPress={() => navigation.goBack()}
      />
      <Tab.Navigator
        initialRouteName="All"
        screenOptions={{
          tabBarActiveTintColor: 'grey',
          tabBarLabelStyle: {fontSize: 12},
          tabBarStyle: {backgroundColor: 'white'},
        }}>
        <Tab.Screen name="All" component={All} options={{tabBarLabel: 'All'}} />
        <Tab.Screen
          name="Category"
          component={Category}
          options={{tabBarLabel: 'Category'}}
        />
        <Tab.Screen
          name="Modifier"
          component={Modifier}
          options={{tabBarLabel: 'Modifier'}}
        />
        <Tab.Screen
          name="Ingridiant"
          component={Ingridiant}
          options={{tabBarLabel: 'Ingridi..'}}
        />
      </Tab.Navigator>
      <FAB
        visible={visible}
        onPress={toggleModal}
        placement="right"
        title="Add"
        icon={{name: 'add', color: 'white'}}
        color="blue"
      />

      <Modal
        isVisible={isModalVisible}
        animationIn={'bounceInUp'}
        avoidKeyboard={false}
        onBackButtonPress={() => toggleModal()}
        style={tw`self-center items-center justify-end flex-1  `}
        animationOut={'zoomOut'}>
        <View style={tw`h-80 self-center w-85 bg-white rounded-lg `}>
          <View
            style={tw` w-80 h-70 items-center justify-center self-center mt-5 `}>
            <View
              style={tw`flex-row justify-between w-75 h-32 items-center self-center `}>
              <TouchableOpacity
              onPress={()=>{
                navigation.navigate("Additem")
                toggleModal()
              }}
              >
                <View
                  style={tw`bg-white shadow-lg items-center justify-evenly  h-28 w-35`}>
                  <Text style={tw`text-blue-700 text-lg font-medium`}>
                    Add Item
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={()=>{
                navigation.navigate("Addcategory")
                toggleModal()
              }}
              >
                <View
                  style={tw`bg-white shadow-lg items-center justify-evenly  h-28 w-35`}>
                  <Text style={tw`text-blue-700 text-lg font-medium`}>
                    Add Category
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={tw`flex-row justify-between w-75 h-32 items-center self-center `}>
              <TouchableOpacity
              onPress={()=>{
                navigation.navigate("Addmodifier")
                toggleModal()
              }}
              >
                <View
                  style={tw`bg-white shadow-lg items-center justify-evenly  h-28 w-35`}>
                  <Text style={tw`text-blue-700 text-lg font-medium`}>
                    Add Modifier
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={tw`bg-white shadow-lg items-center justify-evenly  h-28 w-35`}>
                  <Text style={tw`text-blue-700 text-lg font-medium`}>
                    Add Ingridiant
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Inventorymanagment;
