import {Button, Input} from '../../components';
import {useLoading} from '../../hooks';
import {useNavigation} from '@react-navigation/native';
// import {message} from '@utils';
import {useFormik} from 'formik';
import React from 'react';
import {Keyboard, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';
import signUpStyles from './styles';

const SignUpScreen: React.FC = () => {
  const styles = signUpStyles();
  const {showLoading, hideLoading} = useLoading();
  const navigation = useNavigation();

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().trim().required('Vui lòng nhập tên của bạn'),
    email: Yup.string()
      .email('Email không hợp lệ')
      .required('Vui lòng nhập email'),
    password: Yup.string()
      .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
      .required('Vui lòng nhập mật khẩu'),
  });

  const initialValues = {
    fullname: '',
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
    onSubmit: (values, actions) => {
      Keyboard.dismiss();
      showLoading();
      setTimeout(() => {
        hideLoading();
        navigation.navigate('Login');
      }, 1000);
    },
  });

  const onLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'handled'}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.appName}></Text>
        <Text style={styles.title}>Đăng ký để tham gia đọc truyện!</Text>
        <Input
          placeholder="Tên của bạn"
          value={values.fullname}
          onChangeText={text => {
            setFieldValue('fullname', text);
            setFieldTouched('fullname', true, false);
          }}
          onBlur={handleBlur('fullname')}
          autoCapitalize={'words'}
          error={
            touched.fullname && errors.fullname ? errors.fullname : undefined
          }
          style={styles.inputSpacing}
        />
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
          placeholder="Mật khẩu"
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
        <Button
          block
          title="Đăng ký"
          onPress={handleSubmit}
          style={styles.signInButton}
        />
        <View style={styles.viewSignIn}>
          <Text style={styles.haveAnAccount}>Bạn đã có tài khoản?</Text>
          <TouchableOpacity onPress={onLogin}>
            <Text style={styles.login}> Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreen;
