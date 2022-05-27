import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Alert, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import STRINGS from '../assets/strings';
import {CommonTextInput} from '../components/CommonTextInput';
import {TextCommon} from '../components/TextCommon';
import {TouchBtn} from '../components/TouchBtn';
import {TouchTxt} from '../components/TouchTxt';
import {saveRegisterData} from '../redux/actions/Action';
import {fontScale, heightScale, widthScale} from '../utils/Utils';

const Register = ({navigation}) => {
  const {registerData} = useSelector(state => state.RegisterReducer);
  console.log('register data on register', registerData);
  const dispatch = useDispatch();

  // STATES
  const [name, setName] = useState('');
  const [nameerror, setNameerror] = useState('');
  const [email, setemail] = useState('');
  const [emailerror, setemailerror] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [phoneNumbererror, setphoneNumbererror] = useState('');
  const [password, setpassword] = useState('');
  const [passworderror, setpassworderror] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [confirmpassworderror, setconfirmpassworderror] = useState('');
  const [pan, setPan] = useState('');
  const [panerror, setPanerror] = useState('');

  // NAME FUNCTION
  const checkName = name => {
    if (name == '') {
      setNameerror(STRINGS.THIS_FIELD_IS_REQUIRED);
    } else {
      setName(name);
      setNameerror('');
    }
  };

  // EMAIL FUNCTION
  const checkMail = mail => {
    let erjx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (mail == '') {
      setemailerror(STRINGS.THIS_FIELD_IS_REQUIRED);
    } else if (!erjx.test(mail)) {
      setemailerror(STRINGS.ENTER_VALID_EMAIL);
    } else {
      setemail(mail);
      setemailerror('');
    }
  };

  // CHECK_PHONE_NUMBER_FUNCTION
  const checkMobile = num => {
    if (num == '') {
      setphoneNumbererror(STRINGS.THIS_FIELD_IS_REQUIRED);
    } else {
      setphoneNumber(num);
      setphoneNumbererror('');
    }
  };

  // CHECK_PASSWORD_FUNCTION
  const checkPass = pass => {
    let prjx =
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,10}$/;
    if (pass == '') {
      setpassworderror(STRINGS.THIS_FIELD_IS_REQUIRED);
    } else if (!prjx.test(pass)) {
      setpassworderror(
        'password must contain Min 8 & Max 10 characters & At least one uppercase, one lowercase character, one digit, one special character',
      );
    } else {
      setpassword(pass);
      setpassworderror('');
    }
  };

  // CHECK_CONFIRM_PASSWORD_FUNCTION
  const checkConfirmPass = rpass => {
    if (rpass == '') {
      setconfirmpassworderror(STRINGS.THIS_FIELD_IS_REQUIRED);
    } else if (rpass !== password) {
      setconfirmpassworderror(STRINGS.PASSWORD_MUST_MATCH);
    } else {
      setconfirmpassword(rpass);
      setconfirmpassworderror('');
    }
  };

  const checkPan = pan => {
    let panrjx = /^([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
    if (pan == '') {
      setPanerror(STRINGS.THIS_FIELD_IS_REQUIRED);
    } else if (!panrjx.test(pan)) {
      setPanerror(
        'Must contain 1-5 letter UpperCase, 6-9 digit & last alphabet capital',
      );
    } else {
      setPan(pan);
      setPanerror('');
    }
  };

  //ONSUBMIT
  const onSubmit = () => {
    if (
      name !== '' &&
      email !== '' &&
      pan !== '' &&
      phoneNumber !== '' &&
      password !== '' &&
      confirmpassword !== ''
    ) {
      let valuecheck = registerData.some(
        val =>
          val.email == email || val.pan == pan || val.phonenum == phoneNumber,
      );
      console.log('valuecheck on register.......', valuecheck);
      if (valuecheck) {
        Alert.alert(
          'Not allowed',
          'mobile no. or email or pan no. already exist',
        );
      } else {
        let data = {
          email: email,
          name: name,
          pan: pan,
          password: password,
          phonenum: phoneNumber,
        };
        dispatch(saveRegisterData(data));
        navigation.replace('Login');
      }
    } else {
      setNameerror(STRINGS.THIS_FIELD_IS_REQUIRED);
      setPanerror(STRINGS.THIS_FIELD_IS_REQUIRED);
      setconfirmpassworderror(STRINGS.THIS_FIELD_IS_REQUIRED);
      setpassworderror(STRINGS.THIS_FIELD_IS_REQUIRED);
      setPanerror(STRINGS.THIS_FIELD_IS_REQUIRED);
      setphoneNumbererror(STRINGS.THIS_FIELD_IS_REQUIRED);
      setemailerror(STRINGS.THIS_FIELD_IS_REQUIRED);
    }
  };

  return (
    // <MAINVIEW></MAINVIEW>

    <View style={styles.mainview}>
      <Text style={styles.titletext}>Register your self</Text>
      <ScrollView>
        <CommonTextInput
          style={styles.textinput}
          titlename="Name :"
          onChangeText={checkName}
        />
        <TextCommon text={nameerror} style={styles.error} />
        <CommonTextInput
          titlename="Email :"
          onChangeText={checkMail}
          keyboardType="email-address"
        />
        <TextCommon text={emailerror} style={styles.error} />
        <CommonTextInput
          style={styles.textinput}
          titlename="Mobile No. :"
          onChangeText={checkMobile}
          maxLength={10}
          keyboardType="phone-pad"
        />
        <TextCommon text={phoneNumbererror} style={styles.error} />
        <CommonTextInput titlename="Password :" onChangeText={checkPass} />
        <TextCommon text={passworderror} style={styles.error} />
        <CommonTextInput
          titlename="Confirm Password :"
          onChangeText={checkConfirmPass}
        />
        <TextCommon text={confirmpassworderror} style={styles.error} />
        <CommonTextInput
          style={styles.textinput}
          titlename="Pancard No. :"
          onChangeText={checkPan}
        />
        <TextCommon text={panerror} style={styles.error} />
        <TouchBtn style={styles.btn} title="Register" onPress={onSubmit} />
        <TouchTxt
          style={styles.touchttxt}
          title="Direct Login>>>>>"
          onPress={() => navigation.navigate('Login')}
        />
      </ScrollView>
    </View>
    // <END></END>
  );
};

export default Register;

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
  },
  titletext: {
    color: 'black',
    fontSize: fontScale(40),
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: heightScale(20),
  },
  textinput: {
    // marginVertical:heightScale(10),
  },
  btn: {
    marginTop: heightScale(20),
    marginBottom: heightScale(10),
  },
  touchttxt: {
    alignItems: 'flex-end',
    marginRight: widthScale(20),
    marginBottom: heightScale(10),
  },
  error: {
    color: 'red',
    marginLeft: widthScale(10),
  },
});
