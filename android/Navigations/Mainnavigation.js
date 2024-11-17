import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Forget from '../Screens/Forget';
import Signup from '../Screens/Signup';
import Onboardscreen from '../Screens/Onboardscreen';
import Businessname from '../Screens/Businessname';
import Businesslocation from '../Screens/Businesslocation';
import Home from '../Screens/Home';
import Drawer1 from '../Components/Tabbar&Drawer/Drawer';
import MyTabs from '../Components/Tabbar&Drawer/Tabbar';
import Report from '../Components/Report/Report';
import Todaysale from '../Components/Todaysale/Todaysale';
import Counter from '../Components/Counter/Counter';
import Items from '../Components/Items/Items';
import More from '../Components/More/More';
import Helpchat from '../Screens/Helpchat';
import Receipts from '../Screens/Receipts';
import Inventorymanagment from '../Screens/Inventorymanagment';
import Customersmanagment from '../Screens/Customersmanagment';
import Staffmanagment from '../Screens/Staffmanagment';
import Shopfront from '../Screens/Shopfront';
import Share from '../Screens/Share';
import Archive from '../Screens/Archive';
import Feedback from '../Screens/Feedback';
import Receiptsetting from '../Screens/Receiptsetting';
import Businesssetting from '../Screens/Businesssetting';
import Generalsetting from '../Screens/Generalsetting';
import Header from '../Components/Ucomponents/Header';
import Additem from '../Components/Inventorymanagment/Additem';
import Addcategory from '../Components/Inventorymanagment/Addcategory';
import Addmodifier from '../Components/Inventorymanagment/Addmodifier';
import Advanceadditem from '../Components/Inventorymanagment/Advanceadditem';
import Editbusiness from '../Components/Businessinfo/Editbusiness';
import Editprofile from "../Components/Profile/Editprofile"
import AddDetails from '../Components/Businesssetting/Addbusinessdetails';

const Mainnavigation = () => {

  const Stack = createNativeStackNavigator();

  const screenoption = {
    headerShown: false,
  }

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboardscreen' screenOptions={screenoption}>


        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Forget' component={Forget}/>
        <Stack.Screen name='Signup' component={Signup}/>
        <Stack.Screen name='Drawer' component={Drawer1}/>
        <Stack.Screen name='Report' component={Report}/>    
        <Stack.Screen name='Todaysale' component={Todaysale}/>
        <Stack.Screen name='Helpchat' component={Helpchat}/>
        <Stack.Screen name='Header' component={Header}/>

        <Stack.Screen name='Receipts' component={Receipts}/>
        <Stack.Screen name='Inventorymanagment' component={Inventorymanagment}/>
        <Stack.Screen name='Additem' component={Additem}/>
        <Stack.Screen name='Addcategory' component={Addcategory}/>
        <Stack.Screen name='Addmodifier' component={Addmodifier}/>
        <Stack.Screen name='Advanceadditem' component={Advanceadditem}/>
        <Stack.Screen name='Editbusiness' component={Editbusiness}/>
        <Stack.Screen name='Editprofile' component={Editprofile}/>

        <Stack.Screen name='Customersmanagment' component={Customersmanagment}/>
        <Stack.Screen name='Staffmanagment' component={Staffmanagment}/>
        <Stack.Screen name='Shopfront' component={Shopfront}/>

        <Stack.Screen name='Share' component={Share}/>
        <Stack.Screen name='Archive' component={Archive}/>
        <Stack.Screen name='Feedback' component={Feedback}/>

        <Stack.Screen name='Receiptsetting' component={Receiptsetting}/>

        <Stack.Screen name='Businesssetting' component={Businesssetting}/>
        <Stack.Screen name='Addbusinessdetails' component={AddDetails}/>

        <Stack.Screen name='Generalsetting' component={Generalsetting}/>
        
        <Stack.Screen name='Counter' component={Counter}/>
        <Stack.Screen name='Items' component={Items}/>
        <Stack.Screen name='More' component={More}/>
        <Stack.Screen name='Tabs' component={MyTabs}/>
        <Stack.Screen name='Businessname' component={Businessname}/>
        <Stack.Screen name='Businesslocation' component={Businesslocation}/>
        <Stack.Screen name='Onboardscreen' component={Onboardscreen} />
      </Stack.Navigator>
    </NavigationContainer>







  );
}

export default Mainnavigation