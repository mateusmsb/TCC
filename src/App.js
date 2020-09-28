

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,

} from 'react-native';
import { LineChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import AppStyles from "./Styles"

const vertical = Dimensions.get('window').height / 3
const data = [1, 2, 5, 3, 3, 4, 3, 2, 2, 2, -3, -4, 0, 2, 3, 4, 2]
const styles = AppStyles;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 1,
    };
  }


  render() {
    return (
      <View style={{
        flexDirection: 'column',
        flex: 1,

      }}>
        <View style={{
          width: '100%',
          height: 50,
          backgroundColor: '#056EAE',
          justifyContent: "center",
          paddingLeft: 20
        }} >
          <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Cardio</Text>
        </View>

        <View style={{
          height: 180,
          width: 300,
          paddingLeft: 40,
          paddingTop: 15

        }}>
          <Text>Built by Mateus Siqueira</Text>
          <Text>Medical use only</Text>

          <TouchableOpacity style={{
            height: 35,
            width: 140,
            backgroundColor: '#05C4C1',
            marginLeft: 170,
            borderRadius: 10,
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center'

          }}>

            <Text>Bluetooth config</Text>

          </TouchableOpacity>

          <TouchableOpacity style={{
            height: 35,
            width: 60,
            backgroundColor: '#05C4C1',
            marginLeft: 250,
            borderRadius: 10,
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center'

          }}>

            <Text>Render</Text>

          </TouchableOpacity>

        </View>

        <ScrollView >


          <View style={{
            height: 150,
            width: 350,
            justifyContent: 'center',
            marginLeft: '10%',

            marginTop: 25

          }}>
            <Text>V1</Text>
            <LineChart
              style={{
                flex: 1
              }}
              data={data}
              svg={{ stroke: 'red' }}
              contentInset={{ top: 10, bottom: 20 }}
            >
              <Grid />
            </LineChart>
          </View>

          <View style={{
            height: 150,
            width: 350,
            justifyContent: 'center',
            marginLeft: '10%',

            marginTop: 25


          }}>
            <Text>V2</Text>
            <LineChart
              style={{
                flex: 1
              }}
              data={data}
              svg={{ stroke: 'red' }}
              contentInset={{ top: 10, bottom: 20 }}
            >
              <Grid />
            </LineChart>
          </View>

          <View style={{
            height: 150,
            width: 350,
            justifyContent: 'center',
            marginLeft: '10%',

            marginTop: 25

          }}>
            <Text>V3</Text>
            <LineChart
              style={{
                flex: 1
              }}
              data={data}
              svg={{ stroke: 'red' }}
              contentInset={{ top: 10, bottom: 20 }}
            >
              <Grid />
            </LineChart>
          </View>

          <View style={{
            height: 150,
            width: 350,
            justifyContent: 'center',
            marginLeft: '10%',

            marginTop: 25

          }}>
            <Text>dVR</Text>
            <LineChart
              style={{
                flex: 1
              }}
              data={data}
              svg={{ stroke: 'red' }}
              contentInset={{ top: 10, bottom: 20 }}
            >
              <Grid />
            </LineChart>
          </View>


        </ScrollView>
      </View>
    );
  };
}



export default App;
