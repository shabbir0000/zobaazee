import 'react-native-gesture-handler';
import { View, Text ,TouchableOpacity } from 'react-native'
import React ,{useEffect,useState} from 'react'
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import Mainnavigation from './android/Navigations/Mainnavigation';
import Businessname from './android/Screens/Businessname';

const App = () => {
//   const [user, setuser] = useState()

// useEffect(() => {
//   GoogleSignin.configure({
//      webClientId: "28146702569-2bq1jqkt59o6ubhj7k385ohh68v2qojt.apps.googleusercontent.com",
//       });
// }, [])

//   signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       setuser(userInfo);
//       console.log(userInfo);
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         // user cancelled the login flow
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         // operation (e.g. sign in) is in progress already
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         // play services not available or outdated
//       } else {
//         // some other error happened
//       }
//     }
//   };

//   signOut = async () => {
//     try {
//       await GoogleSignin.signOut();
//       setuser(null); // Remember to remove the user from your app's state as well
//       console.log("user signout");
//     } catch (error) {
//       console.error(error);
//     }
//   };

  return (
    <Mainnavigation/>
    // <Businessname/>
//     <View style={{alignItems:'center',marginTop:50}}>
//         <TouchableOpacity 
//         onPress={()=>{
//           signIn()
//         }}
//         >
//         <Text style={{color:'black',fontSize:20}}>Sign-in</Text>
       
//         </TouchableOpacity>

//         <TouchableOpacity 
//         onPress={()=>{
//           signOut()
//         }}
//         >
//         <Text style={{color:'black',fontSize:20,marginTop:50}}>Sign-out</Text>
       
//         </TouchableOpacity>
    
//     </View>
  )
}

export default App