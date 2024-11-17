import { View, TextInput,Text } from 'react-native'
import React ,{useState} from 'react'
import tw from 'twrnc'



export const Input = ({ placeholder, onchangetext, blur,focus, value, entry }) => (
    
    <>
        <View style={tw`flex-row justify-center  mt-3 `}>
            <TextInput
                placeholder={placeholder}
                onChangeText={onchangetext}
                onBlur={blur}
                onFocus={focus}
                value={value}
                secureTextEntry={entry}
                style={[tw`h-16  w-80 border rounded-md text-start pl-5   border-${focus || blur ? "red-300":"black"} `,{backgroundColor:"#ffffff"}]}
                
           >

            </TextInput>
            
        </View>
    </>
)


export const Input1 = ({ placeholder, onchangetext, onblur, value, entry }) => (
    <>
        <View style={tw`flex-row justify-center  mt-3 `}>
            <TextInput
                placeholder={placeholder}
                onChangeText={onchangetext}
                onBlur={onblur}
                value={value}
                secureTextEntry={entry}
                style={[tw`h-12  w-80 border rounded-md text-start pl-5 border-white `,{backgroundColor:"#EEEEEE"}]}
           
           ></TextInput>
        </View>
    </>
)



export const Error = ({ error, errors, touch }) => (
    <>

        {(errors && touch) &&
            <Text style={tw`ml-10  mt-3 text-red-500`}>
                {error}
            </Text>
        }

    </>
)