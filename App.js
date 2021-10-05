import * as React from 'react';
import { StyleSheet, Text, TextInput, View, Navigator,AppRegistry, 
          Image, Alert, Button, CheckBox, Picker, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import background from './img/back2.png'
import background2 from './img/signup.png'
import background3 from './img/patient.png'
import background4 from './img/General.png'
import background5 from './img/Special.png'
//import signup from './signup.js'



function loginsc({ navigation }) {
  return (
  <View style={styles.container}>
      <Image 
       source={background} style={styles.back}/>
      <Image 
       source={require('./img/icusername.png')} style={styles.back5}/>
      <Image 
       source={require('./img/icpass.png')} style={styles.back6}/>
      {/* <Image 
       source={require('./img/login.png')} style={styles.back2}
       /> */}
    <View>
      <Image 
       source={require('./img/google.png')} style={styles.backg}/>
       <Image 
       source={require('./img/fb.png')} style={styles.backf}/>
    </View>
      <TextInput style={styles.input}
        placeholder={'Username'}
        placeholderTextColor={'rgba(255,255,0.7)'}
        returnKeyType='next'
      />
      <TextInput style={styles.inputpass}
        placeholder={'Password'}
        placeholderTextColor={'rgba(255,255,0.7)'}
        returnKeyType='go'
        secureTextEntry
      />
      <Text style={styles.log3}>or Sign in With</Text>
      <CheckBox style={styles.check}/>
      <Text style={styles.log2}>Remember me</Text>
      <Text style={styles.log4}>Forgot Password?</Text>
      <Text style={styles.back2}
            onPress={() => navigation.navigate('Screen')}>GO</Text>
      <Text style={styles.log}
//          onPress={() => console.log(print())}
            >Login</Text>  
      <Text style={styles.log1}
   //       onPress={this.pressbutt}
            onPress={() => navigation.navigate('signupsc')}  
            >Sign Up</Text>
       
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2D9D9',
    alignItems: 'center',
  //  justifyContent: 'center',
  },

  log:{
    fontSize:27,
    fontWeight:"600",
    color:'#294A72',
    position:"absolute",
    bottom:"63%",
    left:'18%'
  },
  log1:{
    fontSize:27,
    fontWeight:"600",
    color:'#294A72',
    position:"absolute",
    bottom:"63%",
    right:'18%'
  },
  log2:{
    fontSize:10,
    color:'#B8C8DB',
    position:"absolute",
    bottom:'39.5%',
    left:72
  },
  log4:{
    fontSize:10,
    color:'#B8C8DB',
    position:"absolute",
    bottom:'39.5%',
    right:50
  },
  log3:{
    fontSize:10,
    color:'black',
    position:"absolute",
    bottom:100
  },
  back: {
    width: 450,
    height:620,
    resizeMode:'contain'
  },
 /*  back2: {
    position:'absolute',
    bottom:"27.5%",
    width:42,
    height:42,
    resizeMode:'contain'
  }, */
  back2: {
    position:'absolute',
    bottom:'27%',
    fontSize:30,
    width:42,
    height:41,
    color:'white',
    backgroundColor:'grey',
    borderRadius:40,
  },
  backg: {
    position:'absolute',
    bottom:"21%",
    left:41,
    resizeMode:'contain'
  },
  backf: {
    position:'absolute',
    bottom:'21%',
    right:41,
    
  }, 
  back5: {
    position:'absolute',
    bottom:'55.5%',
    left:57,
    resizeMode:'contain',
  },
  back6: {
    position:'absolute',
    bottom:'47.5%',
    left:57,
    resizeMode:'contain'
  },
  check: {
    position:'absolute',
    bottom:'38%',
    left:45,
    opacity:50,
  },
  input: {
    position:"absolute",
    bottom:"54%",
    width: 275,
    height: 45,
    borderRadius: 25,
    borderColor:'#1B4F8E',
    borderWidth:1,
    fontSize: 16,
    paddingLeft: 45,
    color: '#1855A1',
    //marginHorizontal: 25
  },
  inputpass: {
    position:"absolute",
    bottom:"46%",
    width: 275,
    height: 45,
    borderWidth:1,
    borderColor:'#1B4F8E',
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    color: '#1855A1',
    //marginHorizontal: 25
  }
});


function signupsc({ navigation }) {
  return (
    
    <View style={styles1.container}>
      <Image 
       source={background2} style={styles1.back}/>
      {/* <Image 
       source={require('./img/login.png')} style={styles1.back2}
       onPress={() => Alert.alert('Terms and condition')}/> */}
      <Image 
       source={require('./img/google.png')} style={styles1.back3}/>
       <Image 
       source={require('./img/fb.png')} style={styles1.back4}/>
      <Image 
       source={require('./img/icusername.png')} style={styles1.back5}/>
      <Image 
       source={require('./img/icpass.png')} style={styles1.back6}/>
      <Image 
       source={require('./img/icpass.png')} style={styles1.back7}/>
      <TextInput style={styles1.input}
        placeholder={'Username'}
        placeholderTextColor={'rgba(255,255,0.7)'}
        returnKeyType='next'
      />
      <TextInput style={styles1.inputpass}
        placeholder={'Password'}
        placeholderTextColor={'rgba(255,255,0.7)'}
        returnKeyType='next'
        secureTextEntry
      />
      <TextInput style={styles1.inputconpass}
        placeholder={'Confirm Password'}
        placeholderTextColor={'rgba(255,255,0.7)'}
        returnKeyType='go'
        secureTextEntry
      />
      <Text style={styles1.log4}>By clicking agree you agree to our</Text>
      <Text style={styles1.tnc}
      onPress={() => Alert.alert('Terms and condition')}>terms and condition</Text>
      <Text style={styles1.log3}>or Sign in With</Text>
      <Text style={styles1.female}>  Female</Text>
      <Text style={styles1.male}>    Male</Text>
      <Text style={styles1.log}
      onPress={() => navigation.navigate('AppName')} 
      >  Login</Text>
      <Text style={styles1.log1}>Sign Up</Text>
      <Text style={styles1.back2}
       onPress={() => navigation.navigate('Screen')}>GO
      </Text>
    </View>
  );
}
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2D9D9',
    alignItems: 'center',
  //  justifyContent: 'center',
  },
  male:{
    fontWeight:'700',
    fontSize:16,
    padding:5,position:'absolute',
    color:'white',
    width:77,
    left:'20%',
    bottom:'34.9%',
    borderRadius: 25,
    backgroundColor:'#5691DF'
  },
  female:{
    fontWeight:'700',
    fontSize:16,
    padding:5,position:'absolute',
    color:'white',
    width:80,
    right:"20%",
    bottom:'35%',
    borderRadius: 25,
    backgroundColor:'#5691DF'
  },
  log:{
    fontSize:27,
    fontWeight:"600",
    color:'#294A72',
    position:"absolute",
    bottom:"66%",
    left:'14.5%'
  },
  log1:{
    fontSize:27,
    fontWeight:"600",
    color:'#294A72',
    position:"absolute",
    bottom:"66%",
    right:'18%'
  },
  log3:{
    fontSize:10,
    color:'black',
    position:"absolute",
    bottom:100
  },
  log4:{
    fontSize:12,
    color:'black',
    position:"absolute",
    bottom:'31%'
  },
  tnc:{
    textDecorationLine:'underline',
    fontSize:12,
    color:'#FFBE00',
    position:"absolute",
    bottom:"28%"
  },
 
  back: {
    width: 450,
    height:620,
    resizeMode:'contain'
  },
  back2: {
    position:'absolute',
    bottom:'20.4%',
    fontSize:30,
    width:42,
    height:41,
    color:'white',
    backgroundColor:'grey',
    borderRadius:40,
  },
  back3: {
    position:'absolute',
    bottom:35,
    left:41,
    resizeMode:'contain'
  },
  back4: {
    position:'absolute',
    bottom:35,
    right:41,
    
  }, 
    back5: {
    position:'absolute',
    bottom:'58.5%',
    left:57,
    resizeMode:'contain',
  },
  back6: {
    position:'absolute',
    bottom:'50.5%',
    left:57,
    resizeMode:'contain'
  },
  back7: {
    position:'absolute',
    bottom:'42.5%',
    left:57,
    resizeMode:'contain'
  },
  input: {
    position:"absolute",
    bottom:"57%",
    width: 275,
    height: 45,
    borderRadius: 25,
    borderColor:'#1B4F8E',
    borderWidth:1,
    fontSize: 16,
    paddingLeft: 45,
    color: '#1855A1',
    //marginHorizontal: 25
  },
  inputpass: {
    position:"absolute",
    bottom:"49%",
    width: 275,
    height: 45,
    borderWidth:1,
    borderColor:'#1B4F8E',
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    color: '#1855A1',
    //marginHorizontal: 25
  },
  inputconpass: {
    position:"absolute",
    bottom:"41%",
    width: 275,
    height: 45,
    borderWidth:1,
    borderColor:'#1B4F8E',
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    color: '#1855A1',
    //marginHorizontal: 25
  }
});


function Screen({ navigation }) {
  return (
    <View style={styles4.container}>
      <Image 
       source={background3} style={styles2.back}/>
      <TextInput style={styles2.input}
        placeholder={'Enter your Keyword'}
        placeholderTextColor={'rgba(255,255,0.7)'}
      /> 
      <Text style={styles2.add} 
      onPress={() => navigation.navigate('General')}>ADD
      </Text>
     </View>

  );
}
  const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2D9D9',
    alignItems: 'center',
  //  justifyContent: 'center',
  },
  input: {
    position:"absolute",
    bottom:"70%",
    width: 275,
    height: 45,
    borderWidth:1,
    borderColor:'#707070',
    borderRadius: 5,
    fontSize: 16,
    paddingLeft: 45,
    color: '#1855A1',
    backgroundColor:'#EFECEC',
    //marginHorizontal: 25
  },
  add:{
    position:'absolute',
    bottom:'8%',
    right:'8%',
    borderWidth:2,
    borderRadius:50,
    borderColor:"#6BA6F3",
    height:67,
    width:67,
    backgroundColor:"#6BA6F3",
    color:'white',
    fontWeight:'bold',
    textAlignVertical:'center',
    textAlign:'center',
    fontSize:26
  }
});


function General({ navigation })
{

/*     constructor(){
     super();
     this.state={
       PickerSelectedVal : ''
     }
   } 
   getSelectedPickerValue=()=>{
    Alert.alert("Selected gender is : " +this.state.PickerSelectedVal);

   }
  render() { */
    return (
     
    <View style={styles3.container}>
      <Image style={styles3.back} source={background4}/>
      <TextInput style={styles3.input}
        placeholder={'Name'}
        placeholderTextColor={'rgba(255,255,0.7)'}
      />
      <TextInput style={styles3.inputpass}
        placeholder={'Number'}
        placeholderTextColor={'rgba(255,255,0.7)'}
      />
     
      <TextInput style={styles3.input1}
        placeholder={'Patient ID'}
        placeholderTextColor={'rgba(255,255,0.7)'}
      />
      <TextInput style={styles3.inputpass1}
        placeholder={'Age'}
        placeholderTextColor={'rgba(255,255,0.7)'}
      />
       {/* <Picker style3={styles3.pick1}
          selectedValue={this.state.PickerSelectedVal}
          onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})}  
          >
>
           <Picker.Item label="Select Gender" value="Gender" />
           <Picker.Item label="Male" value="Male" />
           <Picker.Item label="Female" value="Female" />


      </Picker>  */}
      <Text style={styles3.title}
            onPress={() => navigation.navigate('Screen')}>Go Back</Text>
      <Text style={styles3.title1}
            onPress={() => navigation.navigate('Special')}
           >Proceed</Text>
      </View>
    );
  }
const styles3 = StyleSheet.create({
   container: {
    backgroundColor:'#E2D9D9',
    alignItems: 'center',
    flex:1
  //  justifyContent: 'center',
  },
back: {
  width:400,
  height:580,
  resizeMode:'contain'
 },
 pick1: {
  marginTop:25,
  width: 275,
  height: 45,
  borderRadius: 25,
  borderColor:'#1B4F8E',
  borderWidth:1,
  fontSize: 16,
  paddingLeft: 45,
  color: '#1855A1',
  marginHorizontal: 25,
 },
 pick2: {
  marginTop:5,
  width: 275,
  height: 45,
  borderRadius: 25,
  borderColor:'#1B4F8E',
  borderWidth:1,
  fontSize: 16,
  paddingLeft: 45,
  color: '#1855A1',
  marginHorizontal: 25,

 },
 input: {
  position:"absolute",
  top:"25%",
  width: 275,
  height: 45,
  borderWidth:1,
  borderColor:'#707070',
  borderRadius: 5,
  fontSize: 16,
  paddingLeft: 45,
  color: '#1855A1',
  backgroundColor:'#EFECEC',
},
inputpass: {
  position:"absolute",
  top:"35%",
  width: 275,
    height: 45,
    borderWidth:1,
    borderColor:'#707070',
    borderRadius: 5,
    fontSize: 16,
    paddingLeft: 45,
    color: '#1855A1',
    backgroundColor:'#EFECEC',
},
input1: {
  position:"absolute",
  top:"45%",
  width: 275,
  height:45,
  borderWidth:1,
  borderColor:'#707070',
  borderRadius: 5,
  fontSize: 16,
  paddingLeft: 45,
  color: '#1855A1',
  backgroundColor:'#EFECEC',
},
inputpass1: {
  position:"absolute",
  top:"65%",
  width: 275,
  height: 45,
  borderWidth:1,
  borderColor:'#707070',
  borderRadius: 5,
  fontSize: 16,
  paddingLeft: 45,
  color: '#1855A1',
  backgroundColor:'#EFECEC',
},
inputpass2: {
  position:"absolute",
  top:"55%",
  width: 275,
  height: 45,
  borderWidth:1,
  borderColor:'#707070',
  borderRadius: 5,
  fontSize: 16,
  paddingLeft: 45,
  color: '#1855A1',
  backgroundColor:'#EFECEC',
},
title: {
  position:'absolute',
  bottom:'15%',
  left:'15%',
  borderWidth:2,
  borderRadius:5,
  borderColor:"#1273EC",
  height:33,
  width:99,
  backgroundColor:"#1273EC",
  color:'white',
  fontWeight:'bold',
  textAlignVertical:'center',
  textAlign:'center',
  fontSize:15
  },
title1: {
  position:'absolute',
  bottom:'15%',
  right:'15%',
  borderWidth:2,
  borderRadius:5,
  borderColor:"#1273EC",
  height:33,
  width:99,
  backgroundColor:"#1273EC",
  color:'white',
  fontWeight:'bold',
  textAlignVertical:'center',
  textAlign:'center',
  fontSize:15    
  }  
/* fixToText: {
  flexDirection: 'row',
  justifyContent: 'space-between',
}, */
});


function Special({ navigation }) {
  return (
    <View style={styles4.container}>
      <Image 
       source={background5} style={styles4.back}/>
      <TextInput style={styles3.input}
        placeholder={'Enter Locus'}
        placeholderTextColor={'rgba(255,255,0.7)'}
      />
      <TextInput style={styles3.inputpass}
        placeholder={'Select Gene'}
        placeholderTextColor={'rgba(255,255,0.7)'}
      />
     
      <TextInput style={styles3.input1}
        placeholder={'Enter Mutation/VAF'}
        placeholderTextColor={'rgba(255,255,0.7)'}
      />
      <TextInput style={styles3.inputpass2}
        placeholder={'Classification'}
        placeholderTextColor={'rgba(255,255,0.7)'}
      />
      <TextInput style={styles3.inputpass1}
        placeholder={'Biological Classification'}
        placeholderTextColor={'rgba(255,255,0.7)'}
      />
      <Text style={styles3.title}
            onPress={() => navigation.navigate('General')}>Go Back</Text>
      <Text style={styles4.title1}
            onPress={() => navigation.navigate('Special')}
           >Proceed to Drug Senstivity</Text>
     </View>

  );
}
const styles4 = StyleSheet.create({
  container: {
   backgroundColor:'#E2D9D9',
   alignItems: 'center',
   flex:1
 //  justifyContent: 'center',
 },
 back: {
  width:450,
  height:615,
  resizeMode:'contain'
 },
 title1: {
  position:'absolute',
  bottom:'12.5%',
  right:'15%',
  borderWidth:2,
  borderRadius:5,
  borderColor:"#1273EC",
  height:66,
  width:99,
  backgroundColor:"#1273EC",
  color:'white',
  fontWeight:'bold',
  textAlignVertical:'center',
  textAlign:'center',
  fontSize:15    
  }  
});


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppName" component={loginsc} />
        <Stack.Screen name="signupsc" component={signupsc} />
        <Stack.Screen name="Screen" component={Screen} /> 
        <Stack.Screen name="General" component={General} />
        <Stack.Screen name="Special" component={Special} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;