import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Alert, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import STRINGS from '../assets/strings';
import {CommonTextInput} from '../components/CommonTextInput';
import {TextCommon} from '../components/TextCommon';
import {TouchBtn} from '../components/TouchBtn';
import {TouchTxt} from '../components/TouchTxt';
import { clearData, saveRegisterData } from '../redux/actions/Action';
import {fontScale, heightScale, widthScale} from '../utils/Utils';

const Login = ({navigation}) => {
  //REDUX
  const {registerData}=useSelector (state=>state.RegisterReducer)
  console.log('jlijlkjlkj',registerData);
  // console.log('jlijlkjlkjn name',registerData[0].name);
  const dispatch = useDispatch();



  // STATES
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [emailerror, setemailerror] = useState('');
  const [passworderror, setpassworderror] = useState('');

//   let mycheck = [email, password];
// console.log('my check',mycheck);
// let result = mycheck.some(i => registerData.includes(i));
// console.log('result',result);

  //HOOKS
  // useEffect(() => {

  // }, []);

  //EMAIL_CHECK_FUNCTION
  const checkMail = mail => {
    let erjx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (mail == '') {
      setemailerror(STRINGS.THIS_FIELD_IS_REQUIRED);
    } else if (!erjx.test(mail)) {
      setemailerror('Enter valid email');
    } else {
      setemail(mail);
      setemailerror('');
    }
  };
  //PASSWORD_CHECK_FUNCTION
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

  //ONSUBMIT
  const onSubmit = () => {
    if(email ===''&&password ===''){
      setemailerror(STRINGS.THIS_FIELD_IS_REQUIRED)
      setpassworderror(STRINGS.THIS_FIELD_IS_REQUIRED)
    }else{
      // for (let i = 0; i < registerData.length; i++) {
      //   if (registerData[i].email !== email &&registerData[i].password !== password) {
      //     console.log('error not user');
      //   } else {
      //     console.log('navigated');
      //     break;
      //   }
      // let valuecheck=registerData.includes({email:email,password:password})
      let valuecheck=registerData.some((val)=>val.email == email && val.password==password)
      console.log('valuecheck.......',valuecheck);
      !valuecheck? Alert.alert('User Not allowed','wrong credential') : navigation.replace('Home')
      }
    // }
  };

  return (
    <View style={styles.mainview}>
      <Text style={styles.titletext}>Login</Text>
      <CommonTextInput titlename="Email :" onChangeText={checkMail} />
      <TextCommon text={emailerror} style={styles.error} />
      <CommonTextInput
        style={styles.textinput}
        titlename="Password :"
        onChangeText={checkPass}
      />
      <TextCommon text={passworderror} style={styles.error} />
      <TouchBtn
        title="Login"
        style={styles.btn}
        onPress={onSubmit}
      />
      <TouchBtn
        title="Clear data"
        style={styles.btn}
        onPress={()=>dispatch(clearData())}
      />
      <TouchTxt
        title="Register First>>>>>"
        style={styles.touchtxt}
        onPress={() => 
          navigation.navigate('Register')
        }
      />
    </View>
    // <END></END>
  );
};

export default Login;

export const styles = StyleSheet.create({
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
    marginTop: heightScale(10),
  },
  btn: {
    marginVertical: heightScale(20),
  },
  touchtxt: {
    alignItems: 'flex-end',
    marginRight: widthScale(20),
  },
  error: {
    color: 'red',
    marginLeft: widthScale(10),
  },
});
