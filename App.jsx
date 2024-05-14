/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  StatusBar,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  const [cityname, setcityname] = useState('');
    
  const [temp,setresult]=useState('');
  const [humidity,sethumidity]=useState('');
  const [windspeed,setwindspeed]=useState('');


  let tempval=Math.floor(temp);
  let speedval=Math.floor(windspeed)
   async function weatherdata (){
    
    const key= 'f6074e2e43c73c77e29f39997177eca0&units=metric'
   const url='https://api.openweathermap.org/data/2.5/weather?q='
   let makeurl=`${url}+${cityname}+&appid=${key}`
    let response=await fetch(makeurl);
    response= await response.json();
    setresult(response.main.temp);
    sethumidity(response.main.humidity)
   
    setwindspeed(response.wind.speed);
    // console.warn(windspeed);


    
  }
 
  return (
    <LinearGradient
      colors={['#90EE90', 'skyblue']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}>
      <StatusBar backgroundColor={'#90EE90'} barStyle={'dark-content'} />
      <View style={{flex:1}}>
        <View style={styles.searchcontainer}>
          <TextInput
            style={{
              backgroundColor: 'white',
              borderColor: 'black',
              width: 360,
              margin: 10,
              borderRadius: 25,
              paddingLeft: 25,
              fontSize: 20,
            }}
            placeholder="enter the city name "
            onChangeText={(text)=>setcityname(text)}
          />

          <TouchableHighlight onPress={()=>weatherdata()}>
            <View style={styles.searchval}>
              <Image
                source={require('./images/search.png')}
                style={styles.img}
              />
            </View>
            </TouchableHighlight>
        </View>

        <View style={styles.weatherimgcontainer}>
          <Image
            source={require('./images/clouds.png')}
            style={styles.weatherimg}
          />
                    <Text style={{fontSize:80 , marginTop:20}}>{tempval} °C</Text>
          <Text style={styles.citynam}>{cityname}</Text>


        </View >
        <View style={styles.footerval}>
          <View style={styles.humiditycontianer}>
            <Image 
            source={require('./images/humidity.png')}
            style={{width:50,height:50,marginTop:5}}
            />
           <View style={{flexDirection:"column"}} >
            <Text style={{fontSize:20}}> {humidity}%</Text>
            <Text style={{fontSize:20}}> humidity</Text>
            </View>
          </View>
          <View style={styles.windcontianer}>
            <Image 
            source={require('./images/wind.png')}
            style={{width:50,height:50,marginTop:5}}
            />
            <View style={{flexDirection:"column"}}>
            <Text style={{fontSize:20}}> Wind speed</Text>
            <Text style={{fontSize:20}}> {speedval}kmp/h</Text>
           
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  searchcontainer: {
    flexDirection: 'row',
    marginTop:30,
    marginLeft:7
  },
  searchval: {
    backgroundColor: 'white',
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22.5,
    marginTop: 13,
  },
  img: {
    width: 25,
    height: 30,
  },
  weatherimgcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  weatherimg: {
    width: 350,
    height: 350,
  },
  citynam: {
    fontSize:35,
    fontFamily:"serif"
  },
  footerval:{
     flexDirection:"row",
     justifyContent:"space-between",
     top:100,
     margin:30
  },
  humiditycontianer:{
    flexDirection:"row"
  },
  windcontianer:{
    flexDirection:"row"
  }
});
