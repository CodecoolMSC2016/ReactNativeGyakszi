import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TabNaviagtor } from 'react-navigation';





export default class App extends React.Component {
    render() {
        let pic = {
            uri: 'http://rewrite.origos.hu/s/img/i/1302/20130220-kolbaszok-teszt-csomag.jpg'
        };

        return (
            
            <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
               
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <Button title='Webshop' onPress={this.myFunc}></Button>
                <Button title='Rolunk' onPress={this.aboutUs}></Button>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                <Image source={pic} style={{ width: 500, height: 200, margin:20 }}></Image>
                <Text style={{ fontSize: 40, padding: 10, fontWeight:'bold', color:'red'}}>Nemzeti Kolbaszbolt</Text>
                <Text style={{fontWeight: 'bold', fontSize:25}}>Minosegi kolbaszok minosegi termeloktol!</Text>
                <Text>A legtutibb kolbaszokat csak nalunk talalja</Text>
                <Text style={{margin:10}}>Lokolbasztol a csirkekolbaszon at egeszen a tevekolbaszig. Barmilyen kolbaszt keres, nalunk megtalalja!</Text>
            </View>
        </View>
    );
    }
    myFunc = () => {
        return (
            <View>
                <Text style={{ fontSize: 40, padding: 10, fontWeight: 'bold', color: 'red' }}>Nemzeti Kolbaszbolt</Text>
            </View>
        )
    };
    aboutUs = () => {
        alert("Folyamatban...")
    };
}


export class SecondScreen extends React.Component {
    
    render() {
        let pic1 = {
            uri: 'http://www.madaraszkolbasz.hu/kepek/hirkepek/vekony-kolbaszok_1-1.jpg'
        };
        return (
            <View>
                <Image source={pic1} style={{ width: 500, height: 200, margin: 20 }}></Image>
            </View>
            )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    //alignItems: 'center',
    //justifyContent: 'center',
    
  },
});
