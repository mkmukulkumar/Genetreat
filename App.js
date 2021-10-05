import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Navigator,AppRegistry,StatusBar,
          Image, Alert, Button, CheckBox, Picker, TouchableOpacity,FlatList,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
// import background from './img/back2.png'
// import background2 from './img/signup.png'
function loginsc({ navigation }) {
  
  return (
  <View style={styles.container}>
      <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#093874" translucent={true} />
      <View style={styles.SquareShapeView}>
          <Text style={styles2.heading}>WELCOME</Text>
          <Text style={styles2.heading2}>Login to continue</Text>
      </View>
      {/* <Image 
        source={background} style={styles.back}/> */}
      <View style={styles.rectShapeView}> 
      <ScrollView>
      <View style={styles3.margn}></View>
          <View style={styles.btnsview}>
          <View>
                <Text style={styles.log}
            //          onPress={() => console.log(print())}
                      >Login</Text>
                       <View style={styles.lineview}></View>
                      </View>  
                <Text style={styles.log}
              //       onPress={this.pressbutt}
                      onPress={() => navigation.navigate('signupsc')}  
                      >Sign Up</Text>
          </View>
        
        <View style={styles3.margn1}></View>
        <View style={styles.SectionStyle}>
          <Image 
          source={require('./img/icusername.png')} style={styles.back5}/>
          <TextInput style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'#837E7E'}
            returnKeyType='next'
          />
          </View>
          <View style={styles.SectionStyle}>
          <Image 
            source={require('./img/icpass.png')} style={styles.back5}/>
          <TextInput style={styles.input}
            placeholder={'Password'}
            placeholderTextColor={'#837E7E'}
            returnKeyType='go'
            secureTextEntry
          />
          </View>
          
          {/* <CheckBox style={styles.check}/>
          <Text style={styles.log2}>Remember me</Text> */}
          <Text style={styles.log2}>Forgot Password?</Text>   
          </ScrollView> 
      </View>
      <View style={styles.circleview}>
              <TouchableOpacity style={styles.back2} onPress={() => navigation.navigate('Screen')}>
                      <Image 
                      source={require('./img/login.png')} style={styles.back2}
                      /> 
              </TouchableOpacity>
              {/* <Text style={styles.back2}
              onPress={() => navigation.navigate('Screen')}>GO</Text> */}
          </View>
          <View style={styles.lowerprt}>
          <Text style={styles.log3}>or Sign in With</Text>
      <View style={styles.btnsview} >
            
          <Image 
            source={require('./img/google.png')} style={styles.backg}/>
          <Image 
            source={require('./img/fb.png')} style={styles.backg}/>
      </View> 
      </View>   
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
  btnsview: { 
    alignItems:"center",
    alignSelf:"stretch",
    flexDirection:"row",
    justifyContent:"space-evenly",
  },
  lowerprt: { 
    alignItems:"flex-end",
    alignSelf:"stretch",
    flexGrow:1,
    justifyContent:"space-evenly",
    // backgroundColor:"yellow"
  },
  lineview: {
    height:5,
    backgroundColor: '#F4CD24',
  },
  circleview: {
    marginTop:-25,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:100,
    width:50,
    height:50,
    backgroundColor: 'white',
  },
  SquareShapeView: {
    alignSelf:"stretch",
    height:"35%",
    backgroundColor: '#0C4C9C',
  },
  rectShapeView: {
    marginTop:-100,
    alignSelf:"stretch",
    marginHorizontal:15,
    backgroundColor: 'white',
    borderRadius:20,
    flexShrink:1
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
    height: 45,
    marginHorizontal:40,
    borderRadius: 25,
    borderColor:'#1B4F8E',
    borderWidth:1,
    fontSize: 16,
    color: '#1855A1',
  },
  input: {
    flexGrow:1,
    height:45 ,
    borderRadius: 25,
    fontSize: 16,
    color: '#1855A1',
    //marginHorizontal: 25
  },
  log:{
    fontSize:27,
    fontWeight:"600",
    color:'#294A72',
    // position:"absolute",
    // bottom:"63%",
    // left:'18%'
  },
  log2:{
    alignSelf:"flex-end",
    fontSize:10,
    color:'#B8C8DB',
    marginTop:10,
    marginBottom:50,
    marginHorizontal:50
  },

  log3:{
     
    justifyContent:"center",
    alignSelf:"center",
    fontSize:10,
    color:'black',
  },
  back2: {
    alignSelf:"center",
    width:42,
    height:42,
  },
  backg: {
    width:123,
    height:35,
    resizeMode:'contain' ,  
  }, 
  back5: {
  margin:10,
  width:24,
  height:24,
  padding:10,
  resizeMode:'contain',
  },
  // log4:{
  //   fontSize:10,
  //   color:'#B8C8DB',
  //   position:"absolute",
  //   bottom:'39.5%',
  //   right:50
  // },
  
  // back: {
  //   width: 450,
  //   height:620,
  //   resizeMode:'contain'
  // },
 /*  back2: {
    position:'absolute',
    bottom:"27.5%",
    width:42,
    height:42,
    resizeMode:'contain'
  }, */
 
  // back6: {
  //   position:'absolute',
  //   bottom:'47.5%',
  //   left:57,
  //   resizeMode:'contain'
  // },

  // inputpass: {
  //   position:"absolute",
  //   bottom:"46%",
  //   width: 275,
  //   height: 45,
  //   borderWidth:1,
  //   borderColor:'#1B4F8E',
  //   borderRadius: 25,
  //   fontSize: 16,
  //   paddingLeft: 45,
  //   color: '#1855A1',
  //   //marginHorizontal: 25
  // }
});


function signupsc({ navigation }) {
  return (
    
    <View style={styles.container}>
      <View style={styles.SquareShapeView}>
          <Text style={styles2.heading}>WELCOME</Text>
          <Text style={styles2.heading2}>SignUp to continue</Text>
      </View>
        {/* <Image 
       source={background2} style={styles1.back}/> */}
      <View style={styles.rectShapeView}>
      <ScrollView>
      <View style={styles3.margn}></View>
          <View style={styles.btnsview}>
                <Text style={styles.log} onPress={() => navigation.navigate('AppName')}  > 
                 Login</Text>
                 <View>
                <Text style={styles.log}>Sign Up</Text>
                <View style={styles.lineview}></View>
                </View>
          </View>  
          <View style={styles3.margn1}></View>
          <View style={styles.SectionStyle}>
                <Image 
                source={require('./img/icusername.png')} style={styles.back5}/>
                <TextInput style={styles.input}
                  placeholder={'Username'}
                  placeholderTextColor={'#837E7E'}
                  returnKeyType='next'
                />
          </View>
                
          <View style={styles.SectionStyle}>
                <Image 
                  source={require('./img/icpass.png')} style={styles.back5}/>
                <TextInput style={styles.input}
                  placeholder={'Password'}
                  placeholderTextColor={'#837E7E'}
                  returnKeyType='next'
                  secureTextEntry
                />
          </View>
          <View style={styles.SectionStyle}>
                <Image 
                  source={require('./img/icpass.png')} style={styles.back5}/>
                <TextInput style={styles.input}
                  placeholder={'Confirm Password'}
                  placeholderTextColor={'#837E7E'}
                  returnKeyType='go'
                  secureTextEntry
                />
          </View>
          <View style={styles.btnsview}>
                <Text style={styles1.male}>Male</Text>  
                <Text style={styles1.male}>Female</Text>
          </View>
          <Text style={styles1.log4}>By clicking agree you agree to our</Text>
          <Text style={styles1.tnc}
          onPress={() => Alert.alert('Terms and condition')}>terms and condition</Text>
      </ScrollView>
      </View>     
      <View style={styles.circleview}>
              <TouchableOpacity style={styles.back2} onPress={() => navigation.navigate('Screen')}>
                      <Image 
                      source={require('./img/login.png')} style={styles.back2}
                      /> 
              </TouchableOpacity>
              {/* <Text style={styles.back2}
              onPress={() => navigation.navigate('Screen')}>GO</Text> */}
          </View>
          <View style={styles.lowerprt}>
          <Text style={styles.log3}>or Sign in With</Text>
      <View style={styles.btnsview} >
            
          <Image 
            source={require('./img/google.png')} style={styles.backg}/>
          <Image 
            source={require('./img/fb.png')} style={styles.backg}/>
      </View> 
      </View>  
  </View>
  );
}
const styles1 = StyleSheet.create({
male:{
    fontWeight:'400',
    textAlign:"center",
    fontSize:16,
    padding:5,
    color:'white',
    marginTop:10,
    width:77,
    borderRadius: 25,
    backgroundColor:'#5691DF'
  },  
  log4:{
    marginTop:10,
    alignSelf:"center",
    fontSize:12,
    color:'black',
  },
  tnc:{
    alignSelf:"center",
    textDecorationLine:'underline',
    fontSize:12,
    color:'#FFBE00',
    marginBottom:50
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: '#E2D9D9',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  
  // female:{
  //   fontWeight:'700',
  //   fontSize:16,
  //   padding:5,position:'absolute',
  //   color:'white',
  //   width:80,
  //   right:"20%",
  //   bottom:'35%',
  //   borderRadius: 25,
  //   backgroundColor:'#5691DF'
  // },
  // log:{
  //   fontSize:27,
  //   fontWeight:"600",
  //   color:'#294A72',
  //   position:"absolute",
  //   bottom:"66%",
  //   left:'14.5%'
  // },
  // log1:{
  //   fontSize:27,
  //   fontWeight:"600",
  //   color:'#294A72',
  //   position:"absolute",
  //   bottom:"66%",
  //   right:'18%'
  // },
  // log3:{
  //   fontSize:10,
  //   color:'black',
  //   position:"absolute",
  //   bottom:100
  // }, 
  // back: {
  //   width: 450,
  //   height:620,
  //   resizeMode:'contain'
  // },
  // back2: {
  //   position:'absolute',
  //   bottom:'19.5%',
  //   left:"44.5%",
  //   width:44,
  //   height:41,
  //   borderRadius:40,
  // },
  // back3: {
  //   position:'absolute',
  //   bottom:35,
  //   left:41,
  //   resizeMode:'contain'
  // },
  // back4: {
  //   position:'absolute',
  //   bottom:35,
  //   right:41,
    
  // }, 
  //   back5: {
  //   position:'absolute',
  //   bottom:'58.5%',
  //   left:57,
  //   resizeMode:'contain',
  // },
  // back6: {
  //   position:'absolute',
  //   bottom:'50.5%',
  //   left:57,
  //   resizeMode:'contain'
  // },
  // back7: {
  //   position:'absolute',
  //   bottom:'42.5%',
  //   left:57,
  //   resizeMode:'contain'
  // },
  // input: {
  //   position:"absolute",
  //   bottom:"57%",
  //   width: 275,
  //   height: 45,
  //   borderRadius: 25,
  //   borderColor:'#1B4F8E',
  //   borderWidth:1,
  //   fontSize: 16,
  //   paddingLeft: 45,
  //   color: '#1855A1',
  //   //marginHorizontal: 25
  // },
  // inputpass: {
  //   position:"absolute",
  //   bottom:"49%",
  //   width: 275,
  //   height: 45,
  //   borderWidth:1,
  //   borderColor:'#1B4F8E',
  //   borderRadius: 25,
  //   fontSize: 16,
  //   paddingLeft: 45,
  //   color: '#1855A1',
  //   //marginHorizontal: 25
  // },
  // inputconpass: {
  //   position:"absolute",
  //   bottom:"41%",
  //   width: 275,
  //   height: 45,
  //   borderWidth:1,
  //   borderColor:'#1B4F8E',
  //   borderRadius: 25,
  //   fontSize: 16,
  //   paddingLeft: 45,
  //   color: '#1855A1',
  //   //marginHorizontal: 25
  // }
});

// function Item({ name,number,patid }) {
//   return (
//     <View style={styles2.item}>
   
//     <View style={styles2.delbutt}>
//       <Text style={{fontSize:20, fontWeight:'bold'}}>{name}</Text>
//       <Button title="delete"/>
//     </View>
//     <Text style={{fontSize:15}}>{patid}</Text>
//     <Text style={{fontSize:12 , alignSelf:'flex-end',marginHorizontal:20}}>{number}</Text>
//     </View>
//   );
// }

function Screen({ route,navigation }) {
  React.useEffect(() => {
    if (route.params?.name && route.params?.number && route.params?.patid) {
      //***    Effect is executed at the end of function ****//
      //***** unshift,push are not working inside effect if array is empty and unshift push pop shift all change the state or refresh the function ****/
      DATA.push({name:route.params?.name,number:route.params?.number,patid:route.params?.patid})
      // const newlyAddedValue = { id: "id_" + this.index, text: this.index + 1 };
      // setDATA(...DATA, newlyAddedValue)
      // console.log("effect",DATA)
    }
  }, [route.params?.name,route.params?.number,route.params?.patid]);
  // const{text}=route.params;
  const array=[{ name: '[Patient Name1]', number:"[Mobile no.]", patid:"[Patient ID]"},]  
  const [DATA, setDATA] = useState([...array]);

  // if (route.params?.name && route.params?.number && route.params?.patid) {
  //    DATA.unshift({name:route.params?.name,number:route.params?.number,patid:route.params?.patid})
  //    console.log("screenadd",DATA)
  // }
  // console.log("screen")
  const deleteItemById = (id) => {
  // index= DATA.find({ name: '[Patient Name1]', number:"[Mobile no.]", patid:"[Patient ID]"})
  // const found = array.findIndex(elemen =>elemen === name: '[Patient Name2]');
  //  const found = array.findIndex(({ name }) => name === id);
  // const result = inventory.find( ({ name }) => name === 'cherries' );
   const found= DATA.filter(({ name }) =>( name !== id || name === '[Patient Name1]' ))
  //  if (found.length==0)
  //  { found.unshift({ name: '[Patient Name1]', number:"[Mobile no.]", patid:"[Patient ID]"})}
  // const filteredData =  DATA.splice(found,2);
  // const filteredData =  DATA.splice(1,2);
    // // const newArray = [...DATA];
  //DATA.filter(item => item.id !== id)
  // //  DATA.filter(item => item.id !== id);
  //  console.log("Delete")
   setDATA(found);
 
  }
  

  // const joinData = () => { 
  
  // setDATA([...DATA]);

  // //whenever you use setdata or use the code will be refresh for that function or class and code of use state will
  // // change  like  const [DATA, setDATA] = useState([...array] to  const [DATA, setDATA] = useState([setDATA]
  // //so this won't work as array will again take its starting value
  // // array.push({title:"hiiii"})
  // // setDATA(array)  

  // }
  return (
    
    <View style={styles.container}>
      {/* <Image 
       source={background3} style={styles2.back}/> */}
      <View style={styles.SquareShapeView}> 
              <Text style={styles2.heading}>Patients</Text>
              <Text style={styles2.heading2}>This is the list of your clients. Filter the list 
              using the clients name , phonenumber or Id.</Text>
              <TextInput style={styles3.input}
              placeholder={'Enter your Keyword'}
              placeholderTextColor={'#837E7E'}
              />
      </View>
      {/* <Text style={styles2.add} 
      onPress={() => navigation.navigate('General')}>ADD
      </Text> */}
      <ScrollView style={styles2.itemfl}>
            <FlatList
              data={DATA}
              extraData={DATA}
              renderItem={({ item }) =>(<View style={styles2.item}>
                                        <View style={styles2.delbutt}>
                                          <View>
                                            <Text style={{fontSize:20, fontWeight:'700'}}>{item.name}</Text>
                                            <Text style={{fontSize:15,marginBottom:13}}>Diagnosed with blood cancer</Text>
                                            </View>
                                            <Text  style={{fontSize:20,height:30,width:30,borderRadius:20,fontWeight:'700',marginTop:15,
                                                             borderColor:"#c20003",borderWidth:1.5, textAlign:"center",textAlignVertical:"center",color:"#c20003"}}
                                                             onPress={() => deleteItemById(item.name)}>X</Text>
                                        </View>
                                        <View style={styles2.delbutt}>
                                        <Text style={{fontSize:12}}>{item.patid}</Text>
                                        <Text style={{fontSize:12}}>{item.number}</Text>   
                                        </View>
                                        </View>)
                                        // <Item name={item.name} number={item.number} patid={item.patid}  />
                          }
            /> 
      </ScrollView>
      {/* <Button title="push" onPress={()=> joinData()}/> */}
      <TouchableOpacity style={styles2.add} 
     //  onPress={()=> joinData()
      onPress={() => navigation.navigate('General')
    }>
          <Image 
          source={require('./img/add.png')} style={styles2.add}
          /> 
      </TouchableOpacity>
      {/* <Button title="add flatlist" onPress={this.updateState} />       */}
     
     </View>

  );
}
  const styles2 = StyleSheet.create({
  delbutt:{
    alignSelf:'flex-end',
    alignSelf:"stretch",
    justifyContent:"space-between",
    marginRight: 20,
    flexDirection:"row"
  },
  item: {
    justifyContent:"center",
    height:90,
    borderRadius:10,
    backgroundColor: 'white',
    marginTop:10 ,
    paddingLeft:20
  },
  itemfl: {
    flexGrow:1,
    alignSelf:'stretch',
    marginTop:-50 ,
    marginHorizontal: 10,
  },
  heading:{
    marginTop:50,
    color:'white',
    fontWeight:'bold',
    fontSize:26,
    marginHorizontal: 25
  },
  heading2:{
    color:'white',
    fontSize:12,
    marginHorizontal: 25
  },
  add:{
    position:'absolute',
    bottom:'8%',
    right:'8%',
    height:60,
    width:60,   
    resizeMode:"contain"
    // borderWidth:2,
    // borderRadius:50,
    // borderColor:"#6BA6F3",
    // backgroundColor:"#6BA6F3",
    // color:'white',
    // fontWeight:'bold',
    // textAlignVertical:'center',
    // textAlign:'center',
    // fontSize:26
  }  
});


function General({ navigation,route })
{ const [name, setname] = React.useState('');
const [number, setnumber] = React.useState('');
const [patid, setpatid] = React.useState('');
const [selectedValue, setSelectedValue] = useState("Gender");
{/*     constructor(){
     super();
     this.state={
       PickerSelectedVal : ''
     }
   } 
   getSelectedPickerValue=()=>{
    Alert.alert("Selected gender is : " +this.state.PickerSelectedVal);

   }
  render() { */}
    return (
      
    <View style={styles.container}>
       <View style={styles.SquareShapeView}>
       <Text style={styles2.heading}>General Details</Text>
       <Text style={styles2.heading2}>Enter the general details of your patient.</Text>
       </View>
       <View style={styles.rectShapeView}>
      {/* <Image style={styles3.back} source={background4}/> */}
      <ScrollView>
      <View style={styles3.margn}>
      <TextInput style={styles3.input}
        placeholder={'Name'}
        placeholderTextColor={'#837E7E'}
        // value={name}
        clearButtonMode="always"
        onChangeText={setname}
      />
      <TextInput style={styles3.input}
        placeholder={'Mobile Number'}
        placeholderTextColor={'#837E7E'}
        keyboardType='number-pad'
        onChangeText={setnumber}
        clearButtonMode="always"
      />
      <TextInput style={styles3.input}
        placeholder={'Patient ID'}
        placeholderTextColor={'#837E7E'}
        onChangeText={setpatid}
        clearTextOnFocus="always"
      />
       <TouchableOpacity style={styles3.picktch}> 
       <Picker
        selectedValue={selectedValue}
        style={styles3.pick1}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="        Gender" value="0"color="#837E7E"/>
        <Picker.Item label="        Male" value="male"color="#1855A1" />
        <Picker.Item label="        Female" value="female"color="#1855A1" />
      </Picker> 
       </TouchableOpacity> 
      <TextInput style={styles3.input}
        placeholder={'Age'}
        keyboardType='number-pad'
        placeholderTextColor={'#837E7E'}
      />
      </View>
      <View style={styles3.margn}></View>
      <View style={styles.btnsview}>
      <Text style={styles3.title}
             onPress={() =>{ navigation.navigate('Screen',{name:name,number:number,patid:patid})}}>
                  {/*   onPress={()=> screen().joinData()}> */}
              Go Back</Text>
      <Text style={styles3.title}
            onPress={() => navigation.navigate('Special')}
           >Proceed</Text> 
      </View>
     </ScrollView>
      <View style={styles3.margn}></View>
      </View>
      </View>
    );
  }
const styles3 = StyleSheet.create({
margn: {marginTop:25},
margn1: {marginTop:12},
rectShapeView: {
  marginTop:-100,
  alignSelf:"stretch",
  marginHorizontal:15,
  flexShrink:1,
  backgroundColor: 'white',
  borderRadius:20,
},
 pick1: {
  height: 40,
  margin:1.4,
  fontSize: 16,
  backgroundColor:'#EFECEC' 
  },
picktch: {
  height: 45,
  borderColor:'#707070',
  borderRadius:5,
  borderWidth:1,
  marginTop:15,
  backgroundColor:'#EFECEC',
  marginHorizontal:25
  },
  
 input: {
  height: 45,
  borderWidth:1,
  borderColor:'#707070',
  borderRadius: 5,
  fontSize: 16,
  paddingLeft: 45,
  color: '#1855A1',
  backgroundColor:'#EFECEC',
  marginHorizontal: 25,
  marginTop:15,  
},
 title: {
  // position:'absolute',
  // bottom:'15%',
  // left:'15%',
  marginTop:10,
  borderWidth:10,
  borderRadius:5,
  borderColor:"#1273EC",
  backgroundColor:"#1273EC",
  color:'white',
  fontWeight:'bold',
  textAlignVertical:'center',
  textAlign:'center',
  fontSize:15,
  width:100
  // height:66,
   
  },
// pick3: {
//   width: 273 ,
//   height: 44,
//   position:"absolute",
//   top:"35%",
//   left:'12%',
//   borderRadius:5,
//   borderWidth:1,
//   backgroundColor:'#EFECEC',
//   },

// back: {
//   width:400,
//   height:580,
//   resizeMode:'contain'
//  },
// inputpass: {
//   position:"absolute",
//   top:"35%",
//   width: 275,
//   height: 45,
//   borderWidth:1,
//   borderColor:'#707070',
//   borderRadius: 5,
//   fontSize: 16,
//   paddingLeft: 45,
//   color: '#1855A1',
//   backgroundColor:'#EFECEC',
// },    
// input1: {
//   position:"absolute",
//   top:"45%",
//   width: 275,
//   height:45,
//   borderWidth:1,
//   borderColor:'#707070',
//   borderRadius: 5,
//   fontSize: 16,
//   paddingLeft: 45,
//   color: '#1855A1',
//   backgroundColor:'#EFECEC',
// },
// inputpass1: {
//   position:"absolute",
//   top:"65%",
//   width: 275,
//   height: 45,
//   borderWidth:1,
//   borderColor:'#707070',
//   borderRadius: 5,
//   fontSize: 16,
//   paddingLeft: 45,
//   color: '#1855A1',
//   backgroundColor:'#EFECEC',
// },

// title1: {
//   position:'absolute',
//   bottom:'15%',
//   right:'15%',
//   borderWidth:2,
//   borderRadius:5,
//   borderColor:"#1273EC",
//   height:33,
//   width:99,
//   backgroundColor:"#1273EC",
//   color:'white',
//   fontWeight:'bold',
//   textAlignVertical:'center',
//   textAlign:'center',
//   fontSize:15    
//   }  
/* fixToText: {
  flexDirection: 'row',
  justifyContent: 'space-between',
}, */
});


function Special({ navigation }) {
  const [selectedValue1, setSelectedValue1] = useState("Select Gene");
  const [selectedValue, setSelectedValue] = useState("Clssification");
  return (
    <View style={styles.container}>
    <View style={styles.SquareShapeView}>
    <Text style={styles2.heading}>Special Details</Text>
    <Text style={styles2.heading2}>Enter the special details of your patient.</Text>
    </View>
    <View style={styles.rectShapeView}>
    <ScrollView>
    <View style={styles3.margn}>
      {/* <Image source={background5} style={styles4.back}/> */}
      <TextInput style={styles3.input}
        placeholder={'Enter Locus'}
        placeholderTextColor={'#837E7E'}
        clearButtonMode="always"
      />
      <TouchableOpacity style={styles3.picktch}>
       <Picker
        selectedValue1={selectedValue1}
        style={styles3.pick1}
        onValueChange={(itemValue) => setSelectedValue1(itemValue)}
      >
        <Picker.Item label="        Select Gene" value="0"color="#837E7E"/>
        <Picker.Item label="        Male" value="male"color="#1855A1" />
        <Picker.Item label="        Female" value="female"color="#1855A1" />
      </Picker> 
      </TouchableOpacity> 
      <TextInput style={styles3.input}
        placeholder={'Enter Mutation/VAF'}
        placeholderTextColor={'#837E7E'}
        clearButtonMode="always"
      />
      <TouchableOpacity style={styles3.picktch}>
       <Picker
        selectedValue={selectedValue}
        style={styles3.pick1}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="        Classification" value="0"color="#837E7E"/>
        <Picker.Item label="        Male" value="male"color="#1855A1" />
        <Picker.Item label="        Female" value="female"color="#1855A1" />
      </Picker> 
      </TouchableOpacity> 
      <TextInput style={styles3.input}
        placeholder={'Biological Classification'}
        placeholderTextColor={'#837E7E'}
        clearButtonMode="always"
      />
      </View>
      <View style={styles3.margn}></View>
       <View style={styles.btnsview}>
      <Text style={styles3.title}
            onPress={() => navigation.navigate('General')}>Go Back</Text>
      <Text style={styles3.title}
  
           >Proceed to Drug Senstivity</Text>
       </View>
       <View style={styles3.margn}></View>
       </ScrollView>
      </View>
     </View>

  );
}
{// const styles4 = StyleSheet.create({
//   container: {
//    backgroundColor:'#E2D9D9',
//    alignItems: 'center',
//    flex:1
//   justifyContent: 'center',
//  },
//  title1: {
//   position:'absolute',
//   bottom:'12.5%',
//   right:'15%',
//   borderWidth:2,
//   borderRadius:5,
//   borderColor:"#1273EC",
//   height:66,
//   width:99,
//   backgroundColor:"#1273EC",
//   color:'white',
//   fontWeight:'bold',
//   textAlignVertical:'center',
//   textAlign:'center',
//   fontSize:15    
//   }  
// });
}

const Stack = createStackNavigator(
//   First: {
//     screen: HomeActivity,
//   },
// },{
  // defaultNavigationOptions: {
  //   header: null
  // }
);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
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