import {Button, Input} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import i18next from 'i18next';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';
import loginStyles from './style';

const LoginScreen: React.FC = () => {
  const {t} = useTranslation([], {keyPrefix: 'loginScreen'});
  const styles = loginStyles();
  const navigation = useNavigation();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required(t("Email can't be empty")),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required("Password can't be empty"),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const {
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    validationSchema: validationSchema,
    initialValues: initialValues,
    onSubmit: values => {
      console.log('values', values);
    },
  });

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'handled'}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.appName}>Bookworm</Text>
        <Text style={styles.title}>Login</Text>
        <Input
          placeholder="Email"
          value={values.email}
          onChangeText={text => {
            setFieldValue('email', text);
            setFieldTouched('email', true, false);
          }}
          onBlur={handleBlur('email')}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
          error={touched.email && errors.email ? errors.email : undefined}
          style={styles.inputSpacing}
        />
        <Input
          type={'password'}
          placeholder="Password"
          value={values.password}
          onChangeText={text => {
            setFieldValue('password', text);
            setFieldTouched('password', true, false);
          }}
          onBlur={handleBlur('password')}
          autoCapitalize={'none'}
          error={
            touched.password && errors.password ? errors.password : undefined
          }
          style={styles.inputSpacing}
        />
        <TouchableOpacity style={styles.buttonForgot}>
          <Text style={styles.forgotPassword}>Forgot password</Text>
        </TouchableOpacity>
        <Button
          block
          title="Login"
          onPress={handleSubmit}
          style={styles.loginButton}
        />
        <View style={styles.viewSignUp}>
          <Text style={styles.noAccount}>Don't have account?</Text>
          {/* <TouchableOpacity onPress={onSignUp}> */}
          <TouchableOpacity>
            <Text style={styles.signUp}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
