import { Formik } from "formik";
import { useContext, useState } from "react";
import { Button, GestureResponderEvent, TextInput, View } from "react-native";
import { AuthContext } from "../../contexts/authentication/AuthContext";
import { FormError } from "./formError/FormError";

export const LoginForm = () => {
  const { login, loginState, resetLoginState } = useContext(AuthContext);

  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <Formik initialValues={initialValues} onSubmit={(values) => login(values)}>
      {({ handleChange, handleBlur, handleSubmit, values, dirty, status }) => (
        <View>
          <TextInput
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
            autoCapitalize="none"
            value={values.username}
          />
          <TextInput
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            secureTextEntry={true}
          />
          {dirty && <FormError errorMessage={loginState?.error} />}

          <Button
            onPress={
              handleSubmit as (
                values:
                  | GestureResponderEvent
                  | React.FormEvent<HTMLFormElement>
                  | undefined
              ) => void
            }
            title="Submit"
          />
        </View>
      )}
    </Formik>
  );
};
