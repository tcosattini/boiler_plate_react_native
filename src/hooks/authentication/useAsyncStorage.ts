import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAsyncStorage = () => {
  const [value, setValue] = useState<string | null>(null);

  const setStorageItem = (key: string, value: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      AsyncStorage.setItem(key, jsonValue);
      setValue(value);
    } catch (e) {
      throw new Error("Async set storage item error");
    }
  };

  const getStorageItem = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      setValue(value);
      return value;
    } catch (e) {
      throw new Error("Async get storage item error");
    }
  };

  const removeStorageItem = (key: string) => {
    try {
      AsyncStorage.removeItem(key);
      setValue(null);
    } catch (e) {
      throw new Error("Async remove storage item error");
    }
  };

  return {
    value,
    setStorageItem,
    getStorageItem,
    removeStorageItem,
  };
};
