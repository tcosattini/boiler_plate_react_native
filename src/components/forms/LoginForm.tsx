import { Formik } from "formik";
import { useContext } from "react";
import { Button, GestureResponderEvent, TextInput, View } from "react-native";
import { AuthContext } from "../../contexts/authentication/AuthContext";
import { getLocaleLoginErrorMessage } from "../../locales/error/loginError/error.locale";
import { FormError } from "./formError/FormError";

export const LoginForm = () => {
  const { login, loginState } = useContext(AuthContext);

  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <Formik initialValues={initialValues} onSubmit={(values) => login(values)}>
      {({ handleChange, handleBlur, handleSubmit, values, dirty }) => (
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

          <FormError errorMessage={loginState?.error} />
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
