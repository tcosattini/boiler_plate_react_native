import { useState } from "react";
import { View, Text } from "react-native";

type Props = {
  errorMessage: string | null;
  errorCode?: string | null;
};

export const FormError = (error: Props) => {
  return (
    <>
      <View>
        <Text>{error.errorMessage}</Text>
      </View>
    </>
  );
};
