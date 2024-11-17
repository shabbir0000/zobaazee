import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import tw from 'twrnc';
import AnimatedLottieView from 'lottie-react-native';

const Onboardscreen = ({navigation}) => {
  return (
    <View style={[tw`flex flex-col flex-1`, {backgroundColor: '#ffffff'}]}>
      <View style={tw`h-150 -mt-20 `}>
        <Onboarding
          bottomBarColor="#ffffff"
          showSkip={false}
          showNext={false}
          showDone={false}
          pages={[
            {
              backgroundColor: '#ffffff',
              image: (
                <AnimatedLottieView
                  style={tw` h-60 -top-20 absolute `}
                  source={require('../Animation/39387-business-team.json')}
                  autoPlay
                  loop={true}
                  speed={2}
                />
              ),

              title: <Text style={tw`font-bold text-2xl mt-20`}>SALES COUNTER</Text>,
              subtitle: <Text style={tw`w-80 text-center text-base mt-5`}>Easy To Use Sales Counter, Add Tax Give Discount And Much More</Text>,
           
            },
            {
              backgroundColor: '#ffffff',
              image: 
              <AnimatedLottieView
              style={tw` h-60 -top-20 absolute `}
              source={require('../Animation/109276-truck-leaving-merch.json')}
              autoPlay
              loop={true}
              speed={2}
            />
              ,
              title: <Text style={tw`font-bold text-2xl mt-20`}>INVENTORY MANAGMENT</Text>,
              subtitle: <Text style={tw`w-80 text-center text-base mt-5`}>Manage All YOur Inventory At Single Place With Advance History Tracker</Text>,
           
            },
            {
              backgroundColor: '#ffffff',
              image: 
              <AnimatedLottieView
              style={tw` h-60 -top-20 absolute `}
              source={require('../Animation/30826-online-shopping.json')}
              autoPlay
              loop={true}
              speed={2}
            />
              ,
              title: <Text style={tw`font-bold text-2xl mt-20`}>YOUR ONLINE STOREFRONT</Text>,
              subtitle: 
              <Text style={tw`w-80 text-center text-base mt-5`}>
              Get Your Fully Loaded E-COmmerse Site Which Can Be Share With Your Costumer And Start Taking Online Order
              </Text>,
           
            },
            {
              backgroundColor: '#ffffff',
              image: 
              <AnimatedLottieView
              style={tw` h-60 -top-20 absolute `}
              source={require('../Animation/70522-data-inform-illustration-animation-json.json')}
              autoPlay
              loop={true}
              speed={2}
            />
              ,
              title: <Text style={tw`font-bold text-2xl mt-20`}>ADVANCE REPORT</Text>,
              subtitle: 
              <Text style={tw`w-80 text-center text-base mt-5`}>
                Know Your Low Stock, Total Revenue,Net Profit,Expense And More
                </Text>,
           
            },
          ]}
        />
      </View>

      <View style={tw`self-center items-center mt-5`}>
        <TouchableOpacity 
        onPress={()=>{
          navigation.navigate("Drawer")
        }}
        >
          <View style={tw`border w-70 flex-row h-10 items-center justify-center self-center`}>
            
            <Text>Signin With Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={tw`border mt-5 w-70 flex-row h-10 items-center justify-center self-center`}>
            
            <Text>Signin With Email</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={tw`mt-5`}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboardscreen;
