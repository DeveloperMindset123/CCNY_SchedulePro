// ! Back and Skip Button is virtually the same structure
// Abstracted it out for reusabillity
import {
  DimensionValue,
  Pressable,
  //Text
} from 'react-native';
//import { AntDesign } from "@expo/vector-icons";
import { Href } from 'expo-router';

// TODO : Remove if needed
/**
 * @purpose understanding the difference between undefined and null
 * @undefined a variable that has been declared but has not been assigned a value is of type undefined
 * @null represents the intentional absence of a value, indicating that a variable has been explicitly set to have no value.
 *
 * @see https://stackoverflow.com/questions/69603212/how-to-declare-typescript-type-as-variable-for-repeated-use
 * @purpose Above link helpful for type manipulation
 */

type DimensionTypes = DimensionValue | undefined;
interface OnboardingButtonProps {
  width: DimensionTypes;
  height: DimensionTypes;
  route: Href<string>;
  buttonText: string;
  handleOnPress: () => void;
}

export const OnboardingButton = ({
  width,
  height,
  // ? the route prop may be unneccessary
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  buttonText,
  handleOnPress,
}: OnboardingButtonProps) => {
  return (
    <Pressable
      style={{
        width: width,
        height: height,
      }}
      className="bg-white w-full h-12 justify-center rounded-full items-center mx-auto mt-2 active:bg-gray-100 active:opacity-30"
      onPress={handleOnPress}
    >
      {buttonText}
      {'\b'}
    </Pressable>
  );
};
