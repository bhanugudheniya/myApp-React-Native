import React, { Component } from 'react'
import { Text, View, StyleSheet, Button,Alert, TextInput, ImageBackground,} from 'react-native'


export class Home extends Component {
    constructor(props) {  
        super(props)
        this.state = {text: '', intro:'Hello'}
    }

    onTextShow(text){
        let s = this.state;
        s.text = text;
        this.setState(s);
    }

    onPress=()=>{
        this.setState({
            intro:'Hello Universe'
        })
    }
    render() {
        return (
            /////////////////////////////////////// HeadTitle ////////////////////////////////////////////////
            <View style={styles.container}>
              <Text style={styles.title}>
               Naveen, Ashish, Bhanu
              </Text>
              {/* ///////////////////////////////////////////////////////////////////////////////////////// */}

            {/*//////////////////////////////////// Text Input Field /////////////////////////////////////  */}
            <View style={{padding: 10}}>  
                <TextInput editable={true}
                    style={{height: 40,backgroundColor: 'azure', fontSize: 20}}  
                    placeholder="Type AnyThing!"  
                    value={this.state.text}
                    onChangeText={(text)=>this.setState({text})}  
                />  
            </View>  
            {/* /////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* ////////////////////////////////////// onClick Show /////////////////////////////////////// */}
            <View style={{padding: 10}}>  
                <Text>{this.state.intro}</Text>
                <Button title="Shake ME!" onPress={this.onPress}></Button>
            </View> 
            {/*///////////////////////////////////////////////////////////////////////////////////////////  */}
              
            {/*/////////////////////////////////// Heading ///////////////////////////////////////////////  */}
              <View style={styles.topBox}>
                    <Text style={styles.headline}>Hello UNIVERSE!</Text>
                </View>
            {/* /////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* //////////////////////////////////////////// Image //////////////////////////////////////// */}
                <View style={styles.imageDiv}>
                <ImageBackground source={require('../android/app/src/image/brown.jpg')} style={styles.image}>
                </ImageBackground>
                </View>
            {/* /////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* ///////////////////////////////////////// Button ////////////////////////////////////////// */}
            <Button
        onPress={()=>Alert.alert(this.state.text)}
        title="Press Me"
        color="#2168C6"
      />
            </View> 
        );
}};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },

    imageDiv:{
        height: '60%',
        width: '100%',
    }, 

    title: {
      textAlign: 'center',
      marginVertical: 8,
    },

    topBox: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headline: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        width: 156,
        height: 30,
        // backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: '100%', 
        height: '100%',
    }

});
export default Home