import {View, Text, Image, Switch} from 'react-native';
import React, {useState} from 'react';
import tw, {useAppColorScheme} from 'twrnc';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tabbar from './Tabbar';
import Customdrawer from './Customdrawer';
import Ionicons1 from 'react-native-vector-icons/SimpleLineIcons';
import Report from '../Report/Report';
import Todaysale from '../Todaysale/Todaysale';
import Counter from '../Counter/Counter';
import Items from '../Items/Items';
import Helpchat from '../../Screens/Helpchat';
import Receipts from '../../Screens/Receipts';
import Customersmanagment from '../../Screens/Customersmanagment';
import Share from '../../Screens/Share';
import Shopfront from '../../Screens/Shopfront';
import Staffmanagment from '../../Screens/Staffmanagment';
import Inventorymanagment from '../../Screens/Inventorymanagment';
import Feedback from '../../Screens/Feedback';
import Generalsetting from '../../Screens/Generalsetting';
import Businesssetting from '../../Screens/Businesssetting';
import Receiptsetting from '../../Screens/Receiptsetting';
import Logout from '../../Screens/Logout';

const Drawer = createDrawerNavigator();

const screenoption = {
  headerShown: false,
};

const Drawer1 = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const {colorScheme, toggleColorScheme} = useAppColorScheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <Customdrawer {...props} />}>
        
      <Drawer.Screen
        name="Home"
        component={Tabbar}
        options={{
          drawerStyle: {
            width: '85%',
          },

          drawerLabel: () => (
            <>
              <View
                style={[
                  tw`flex-row h-12 justify-between items-center w-70 left-4 self-center`,
                ]}>
                <View
                  style={tw`w-24 justify-between flex-row items-center h-12`}>
                  <Image
                    source={require('../../Images/house.png')}
                    style={tw`h-8 w-8`}
                  />

                  <Text style={tw`font-semibold text-base`}>Home</Text>
                </View>
              </View>
            </>
          ),

          drawerLabelStyle: {
            color: 'black',
            fontSize: 17,
            marginLeft: -40,
          },

          drawerActiveBackgroundColor: 'white',
        }}
      />

      <Drawer.Screen
        name="Help Chat"
        component={Helpchat}
        options={{
          drawerLabel: () => (
            <>
              <View
                style={[
                  tw`flex-row h-10 -top-3 justify-between items-center w-70 left-4 self-center`,
                ]}>
                <View
                  style={tw`w-30 justify-between flex-row items-center h-12`}>
                  <Image
                    source={require('../../Images/technical-support.png')}
                    style={tw`h-10 w-10`}
                  />

                  <Text style={tw`font-semibold text-base`}>Help Chat</Text>
                </View>
              </View>
            </>
          ),

          drawerLabelStyle: {
            color: 'black',
            fontSize: 17,
            marginLeft: 10,
          },
          drawerActiveBackgroundColor: 'white',
        }}
      />

      <Drawer.Screen
        name="Receipts"
        component={Receipts}
        options={{
          drawerLabel: () => (
            <>
              <View
                style={[
                  tw`flex-row h-10 -top-3 justify-between items-center w-70 left-4 self-center`,
                ]}>
                <View
                  style={tw`w-30 justify-between flex-row items-center h-12`}>
                  <Image
                    source={require('../../Images/bill.png')}
                    style={tw`h-10 w-10`}
                  />

                  <Text style={tw`font-semibold text-base`}>Receipts</Text>
                </View>
              </View>
            </>
          ),

          drawerLabelStyle: {
            color: 'black',
            fontSize: 17,
            marginLeft: -40,
          },

          drawerActiveBackgroundColor: 'white',
        }}
      />

      <Drawer.Screen
        name="Inventory Management"
        component={Inventorymanagment}
        options={{
          drawerLabel: () => (
            <>
              <View
                style={[
                  tw`flex-row h-10 -top-3 justify-between items-center w-70 left-4 self-center`,
                ]}>
                <View
                  style={tw`w-55 justify-between flex-row items-center h-12`}>
                  <Image
                    source={require('../../Images/management.png')}
                    style={tw`h-10 w-10`}
                  />

                  <Text style={tw`font-semibold text-base`}>
                    Inventory Management
                  </Text>
                </View>
                <View
                  style={tw`h-8 w-8 items-center justify-center bg-blue-700 rounded-full`}>
                  <Text style={tw`font-bold text-white`}>1</Text>
                </View>
              </View>
            </>
          ),

          drawerActiveBackgroundColor: 'white',
        }}
      />

      <Drawer.Screen
        name="Customer Management"
        component={Customersmanagment}
        options={{
          drawerLabel: () => (
            <>
              <View
                style={[
                  tw`flex-row h-10 -top-2 justify-between items-center w-70 left-4 self-center`,
                ]}>
                <View
                  style={tw`w-55 justify-between flex-row items-center h-12`}>
                  <Image
                    source={require('../../Images/customer-service.png')}
                    style={tw`h-10 w-10`}
                  />

                  <Text style={tw`font-semibold text-base`}>
                    Customer Management
                  </Text>
                </View>
                <View
                  style={tw`h-8 w-8 items-center justify-center bg-blue-700 rounded-full`}>
                  <Text style={tw`font-bold text-white`}>1</Text>
                </View>
              </View>
            </>
          ),

          drawerActiveBackgroundColor: 'white',
        }}
      />

      <Drawer.Screen
        name="Staff Management"
        component={Staffmanagment}
        options={{
          drawerLabel: () => (
            <>
              <View
                style={[
                  tw`flex-row h-10 -top-3 justify-between items-center w-70 left-4 self-center`,
                ]}>
                <View
                  style={tw`w-47 justify-between flex-row items-center h-12`}>
                  <Image
                    source={require('../../Images/management-customer.png')}
                    style={tw`h-10 w-10`}
                  />

                  <Text style={tw`font-semibold text-base`}>
                    Staff Management
                  </Text>
                </View>
                <View
                  style={tw`h-8 w-8 items-center justify-center bg-blue-700 rounded-full`}>
                  <Text style={tw`font-bold text-white`}>1</Text>
                </View>
              </View>
            </>
          ),

          drawerActiveBackgroundColor: 'white',
        }}
      />

      <Drawer.Screen
        name="Shop Front"
        component={Shopfront}
        options={{
          drawerLabel: () => (
            <>
              <View
                style={[
                  tw`flex-row h-10 -top-3 justify-between items-center w-70 left-4 self-center`,
                ]}>
                <View
                  style={tw`w-34 justify-between flex-row items-center h-12`}>
                  <Image
                    source={require('../../Images/management-customer.png')}
                    style={tw`h-10 w-10`}
                  />

                  <Text style={tw`font-semibold text-base`}>Shop Front</Text>
                </View>
                <View
                  style={tw`h-8 w-8 items-center justify-center bg-blue-700 rounded-full`}>
                  <Text style={tw`font-bold text-white`}>1</Text>
                </View>
              </View>
            </>
          ),

          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderBottomColor: 'gray',
          },
          drawerActiveBackgroundColor: 'white',
        }}
      />

      <Drawer.Screen
        name="Share"
        component={Share}
        options={{
          drawerLabel: () => (
            <>
              <View
                style={[
                  tw`flex-row h-10  justify-between items-center w-70 left-4 self-center`,
                ]}>
                <View
                  style={tw`w-25 justify-between flex-row items-center h-12`}>
                  <Image
                    source={require('../../Images/share.png')}
                    style={tw`h-10 w-10`}
                  />

                  <Text style={tw`font-semibold text-base`}>Share</Text>
                </View>
              </View>
            </>
          ),

          drawerActiveBackgroundColor: 'white',
        }}
      />

      <Drawer.Screen
        name="Archives"
        component={Items}
        options={{
          drawerLabel: () => (
            <>
              <View
                style={[
                  tw`flex-row h-10 -top-3 justify-between items-center w-70 left-4 self-center`,
                ]}>
                <View
                  style={tw`w-30 justify-between flex-row items-center h-12`}>
                  <Image
                    source={require('../../Images/archive.png')}
                    style={tw`h-10 w-10`}
                  />

                  <Text style={tw`font-semibold text-base`}>Archives</Text>
                </View>
              </View>
            </>
          ),

          drawerActiveBackgroundColor: 'white',
        }}
      />

      <Drawer.Screen
        name="Feedback"
        component={Items}
        options={{
          drawerLabel: () => (
            <>
              <View
                style={[
                  tw`flex-row h-10 -top-3 justify-between items-center w-70 left-4 self-center`,
                ]}>
                <View
                  style={tw`w-30 justify-between flex-row items-center h-12`}>
                  <Image
                    source={require('../../Images/chat.png')}
                    style={tw`h-10 w-10`}
                  />

                  <Text style={tw`font-semibold text-base`}>Feedback</Text>
                </View>
              </View>
            </>
          ),

          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderBottomColor: 'gray',
          },
          drawerActiveBackgroundColor: 'white',
        }}
      />

      <Drawer.Screen
        name="Receipt Setting"
        component={Receiptsetting}
        options={{
          drawerLabel: () => (
            <>
              <View
                style={[
                  tw`flex-row h-10  justify-between items-center w-70 left-4 self-center`,
                ]}>
                <View
                  style={tw`w-40 justify-between flex-row items-center h-12`}>
                  <Image
                    source={require('../../Images/bill.png')}
                    style={tw`h-10 w-10`}
                  />

                  <Text style={tw`font-semibold text-base`}>
                    Receipt Setting
                  </Text>
                </View>
              </View>
            </>
          ),

          drawerActiveBackgroundColor: 'white',
        }}
      />

      <Drawer.Screen
        name="Business Setting"
        component={Businesssetting}
        options={{
          drawerLabel: () => (
            <>
              <View
                style={[
                  tw`flex-row h-10  justify-between items-center w-70 left-4 self-center`,
                ]}>
                <View
                  style={tw`w-43 justify-between flex-row items-center h-12`}>
                  <Image
                    source={require('../../Images/briefcase.png')}
                    style={tw`h-10 w-10`}
                  />

                  <Text style={tw`font-semibold text-base`}>
                    Business Setting
                  </Text>
                </View>
              </View>
            </>
          ),

          drawerActiveBackgroundColor: 'white',
        }}
      />

      <Drawer.Screen
        name="General Setting"
        component={Generalsetting}
        options={{
          drawerLabel: () => (
            <>
              <View
                style={[
                  tw`flex-row h-10 -top-3 justify-between items-center w-70 left-4 self-center`,
                ]}>
                <View
                  style={tw`w-40 justify-between flex-row items-center h-12`}>
                  <Image
                    source={require('../../Images/settings.png')}
                    style={tw`h-10 w-10`}
                  />

                  <Text style={tw`font-semibold text-base`}>
                    General Setting
                  </Text>
                </View>
              </View>
            </>
          ),

          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderBottomColor: 'gray',
          },
          drawerActiveBackgroundColor: 'white',
        }}
      />

      <Drawer.Screen
        name="Dark Mode"
        component={Counter}
        options={{
          drawerLabel: () => (
            <>
              <View
                style={[
                  tw`flex-row h-12 justify-between items-center w-70 left-4 self-center`,
                ]}>
                <View
                  style={tw`w-35 justify-between flex-row items-center h-12`}>
                  <Image
                    source={require('../../Images/dark-mode.png')}
                    style={tw`h-10 w-10`}
                  />
                  <Text style={tw`font-bold text-base`}>Dark Mode</Text>
                </View>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  // style={tw`left-50 `}
                />
              </View>
            </>
          ),

          swipeEnabled: false,

          drawerLabelStyle: {
            color: 'black',
            fontSize: 17,
            // marginLeft: -65,
          },

          drawerActiveBackgroundColor: 'white',
        }}
      />

      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerLabel: () => (
            <>
              <View
                style={[
                  tw`flex-row h-10 -top-3 justify-between items-center w-70 left-4 self-center`,
                ]}>
                <View
                  style={tw`w-28 justify-between flex-row items-center h-12`}>
                  <Image
                    source={require('../../Images/shutdown.png')}
                    style={tw`h-8 w-8`}
                  />

                  <Text style={tw`font-semibold text-base`}>Logout</Text>
                </View>
              </View>
            </>
          ),

          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderBottomColor: 'gray',
          },
          drawerActiveBackgroundColor: 'white',
        }}
      />
    </Drawer.Navigator>
  );
};

export default Drawer1;
