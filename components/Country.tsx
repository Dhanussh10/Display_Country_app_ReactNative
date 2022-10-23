import * as React from 'react'
import {Text,View,Image,StyleSheet} from 'react-native'



const Country=({countryData})=>{

type countryData={
  name:{
    common:string
  };
  flags:{
    png:string
  };
  capital:string;
  population:number;
  capitalInfo:{
    latlng:[]
  }
}

return(
  <View>
   <Text> Name: {countryData[0].name.common} </Text>
   
  <Image style={styles.ig} source={`${countryData[0].flags.png}`} />
  
   <Text> Capital: {countryData[0].capital}</Text>
   <Text> Population: {countryData[0].population}</Text>
   <Text> Latitude: {countryData[0].capitalInfo.latlng[0]} deg</Text>
   <Text> Longitude: {countryData[0].capitalInfo.latlng[1]} deg</Text>
   
  </View>
)


}

const styles=StyleSheet.create({
  ig:{
    width:200,
    height:150
  },
})


export default Country;