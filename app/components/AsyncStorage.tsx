import AsyncStorage from '@react-native-community/async-storage';
export const TypeItemStorage = 'removeItem'

export const setAsyncStorage = async (key: any, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {}
};

export const getAsyncStorage = async (key: any) => {
  try {
    const value = AsyncStorage.getItem(key).then((res) => {
      return res;
    });
    return value;
  } catch (error) {}
};

export const removeItemValue = async (key: any) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }
};
