import React, { useEffect, useState } from 'react';
import { TextInputChangeEventData } from 'react-native';
import { View, TextInput, DimensionValue, NativeSyntheticEvent, Keyboard } from 'react-native';
import getWindowDimensions from '@/lib/utils/getWindowDimension';
import { getSignupStyles } from './getSignupStyles';

// ! useRef can be used to store the session cookie for logged in users
export const TextInputComponent = () => {
  const { width, height } = getWindowDimensions();
  const currentStyles = getSignupStyles();
  // TODO : remove later
  //console.log(JSON.stringify(currentStyles));

  const dimensions = {
    // likely where the error was occuring
    width: width * 0.9,
    height: height * 0.07,
  };
  const [emailInput, setEmailInput] = useState<any>();
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState<string>('');

  // @see https://www.ifelsething.com/post/get-value-react-native-text-input/
  // proper input handling
  const handleEmailInput = (e: any) => {
    setEmailInput(e.nativeEvent.text);
  };

  const handlePasswordInput = (e: any) => {
    setPasswordInput(e.nativeEvent.text);
    console.log(passwordInput);
  };

  const handleConfirmPasswordInput = (e: any) => {
    setConfirmPasswordInput(e.nativeEvent.text);
    console.log(confirmPasswordInput);
  };
  console.log(`Current Email Input : ${emailInput}`);
  console.log(`Current password input : ${passwordInput}`);
  console.log(`Current confirm password input : ${confirmPasswordInput}`);

  // TODO : remove later
  useEffect(() => {
    // test to see if the inputs are being picked up as intended
  }, [emailInput]);
  // array of objects
  const TextInputArray = [
    {
      id: 1,
      dimensions: dimensions,
      tailwindStyling: currentStyles.emailInputStyling,
      placeholderText: 'Enter Your Email',
      //static value for all 3
      //placeholderTextColor : "gray-500",
      onChangeFunction: (e: any) => handleEmailInput(e),
      value: emailInput,
      isPassword: false,
      blur: true,
    },
    {
      id: 2,
      dimensions: dimensions,
      tailwindStyling: currentStyles.passwordInputStyling,
      placeholderText: 'Enter your password',
      // TODO : Define them seperately
      onChangeFunction: (e: any) => handlePasswordInput(e),
      value: passwordInput,
      isPassword: true,
      blur: false,
    },
    {
      id: 3,
      dimensions: dimensions,
      tailwindStyling: currentStyles.passwordInputStyling,
      placeholderText: 'Retype your password',
      onChangeFunction: (e: any) => handleConfirmPasswordInput(e),
      value: confirmPasswordInput,
      isPassword: true,
      blur: false,
    },
  ];
  return (
    <View className="flex-1 items-center justify-center m-auto">
      {TextInputArray.map((TextInputIter) => (
        <TextInput
          key={TextInputIter.id}
          style={TextInputIter.dimensions}
          className={TextInputIter.tailwindStyling}
          // TODO : May require fixing
          onChange={TextInputIter.onChangeFunction}
          value={TextInputIter.value}
          autoCapitalize="none"
          keyboardType="default"
          placeholder={TextInputIter.placeholderText}
          onSubmitEditing={Keyboard.dismiss}
          secureTextEntry={TextInputIter.isPassword}
          blurOnSubmit={TextInputIter.blur}
          placeholderTextColor="grey-500"
        />
      ))}
    </View>
  );
};
