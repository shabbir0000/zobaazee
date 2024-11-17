import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Header from '../Ucomponents/Header';

const More = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />

      <ScrollView
        vertical
        ShowsVerticalScrollIndicator={true}
        contentContainerStyle={{flexGrow: 1}}
        style={tw`mt-5 h-160`}>
        <View style={tw` w-85 h-200  self-center mt-5 `}>
          <View
            style={tw`flex-row justify-between w-85 h-32 items-center self-center `}>
            <View
              style={tw`bg-white shadow-lg items-center justify-evenly  h-28 w-40`}>
              <Text style={tw`text-blue-700 text-xl font-medium`}>
                Attendence
              </Text>
              <Text style={tw`text-sm text-center`}>
                Attendence {'\n'} Management
              </Text>
            </View>

            <View
              style={tw`bg-white shadow-lg items-center justify-evenly  h-28 w-40`}>
              <Text style={tw`text-blue-700 text-xl font-medium`}>
                Manage Payroll
              </Text>
              <Text style={tw`text-sm text-center`}>Payments</Text>
            </View>
          </View>

          <View
            style={tw`flex-row justify-between w-85 h-32 items-center self-center `}>
            <View
              style={tw`bg-white shadow-lg items-center justify-evenly  h-28 w-40`}>
              <Text style={tw`text-xl font-medium`}>0</Text>
              <Text style={tw`text-sm text-center`}>Shopfront</Text>
            </View>

            <View
              style={tw`bg-white shadow-lg items-center justify-evenly  h-28 w-40`}>
              <Text style={tw`text-xl font-medium`}>0</Text>
              <Text style={tw`text-sm text-center`}>All Costumers</Text>
            </View>
          </View>

          <View
            style={tw`flex-row justify-between w-85 h-32 items-center self-center `}>
            <View
              style={tw`bg-white shadow-lg items-center justify-evenly  h-28 w-40`}>
              <Text style={tw`text-xl text-green-500 font-medium`}>0</Text>
              <Text style={tw`text-sm text-center`}>Due Costumers</Text>
            </View>

            <View
              style={tw`bg-white shadow-lg items-center justify-evenly  h-28 w-40`}>
              <Text style={tw`text-xl text-blue-600 font-medium`}>Rs 0.00</Text>
              <Text style={tw`text-sm text-center`}>Expense Income</Text>
            </View>
          </View>

          <View
            style={tw`flex-row justify-between w-85 h-32 items-center self-center `}>
            <View
              style={tw`bg-white shadow-lg items-center justify-evenly  h-28 w-40`}>
              <Text style={tw`text-xl text-red-600 font-medium`}>0</Text>
              <Text style={tw`text-sm text-center`}>Low Stocks</Text>
            </View>

            <View
              style={tw`bg-white shadow-lg items-center justify-evenly  h-28 w-40`}>
              <Text style={tw`text-xl text-blue-600 font-medium`}>0</Text>
              <Text style={tw`text-sm text-center`}>Staff And Partners</Text>
            </View>
          </View>

          <View
            style={tw`flex-row justify-between w-85 h-32 items-center self-center `}>
            <View
              style={tw`bg-white shadow-lg items-center justify-evenly  h-28 w-40`}>
              <Text style={tw`text-xl text-blue-600 font-medium`}>0</Text>
              <Text style={tw`text-sm text-center`}>Item And Subitem</Text>
            </View>

            <View
              style={tw`bg-white shadow-lg items-center justify-evenly  h-28 w-40`}>
              <Text style={tw`text-xl text-blue-600 font-medium`}>Rs 0.00</Text>
              <Text style={tw`text-sm text-center`}>Stock Value Cost Price</Text>
            </View>

          </View>

          <View
            style={tw`flex-row justify-between w-85 h-32 items-center self-center `}>
            <View
              style={tw`bg-white shadow-lg items-center justify-evenly  h-28 w-40`}>
              <Text style={tw`text-xl text-blue-600 font-medium`}>Rs 0.00</Text>
              <Text style={tw`text-sm text-center`}>Stock Value Selling Price</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default More;
