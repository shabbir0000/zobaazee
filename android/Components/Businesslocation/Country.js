import React, {useState} from 'react';
import {View, Text, StyleSheet, PixelRatio, Switch} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { CountryCode, country } from './types'

const styles = StyleSheet.create({
  // ...
});



export default function Country(countryy) {
  const [countryCode, setCountryCode] = useState('FR');
 
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);
  const onSelect = (country)  => {
    setCountryCode(country.cca2);
    setCountry(country);
  };


  return (
             <>
          <CountryPicker
            {...{
              withFilter,
              withFlag,
              withCountryNameButton,
              withAlphaFilter,
              withCallingCode,
              withEmoji,
              onSelect,
            }}
            visible
          />
         {country !== null && (
                    <Text style={styles.data}>
                     {
                      country.name
                    
                     }
                    </Text>
                  )}
     </>
   
  );
}
