import React from 'react';
import { Text, View, Switch, StyleSheet, Image } from 'react-native';

export default class App extends React.Component {
  state = {
    switchValue: false,
    backgroundColor: '#000000',
    color: 'lightColor',
    bulbImage: require('./lightbulbOff.jpg')
  };

  handleSwitchToggle = (switchValue) => {
    const backgroundColor = switchValue ? '#FFFF00' : '#000000';
    const color = switchValue ? 'darkColor' : 'lightColor';
    const bulbImage = switchValue ? require('./lightbulbOn.png') : require('./lightbulbOff.jpg');
    this.setState({ switchValue, backgroundColor, color, bulbImage });
  };

  render(){
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <Text style={[styles.textTitle, styles[this.state.color]]}>Light bulb with switch</Text>
        <Text style={[styles.textSubTitle, styles[this.state.color]]}>AMC MP1</Text>
        <Image source={this.state.bulbImage} style={styles.bulbImage} />
        <Switch value={this.state.switchValue} onValueChange={this.handleSwitchToggle}/>
        <Text style={[styles.switchStateText, styles[this.state.color]]}>{this.state.switchValue ? 'ON' : 'OFF'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bulbImage: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  textTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textSubTitle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 50,
  },
  lightColor: {
    color: '#ffffff',
  },
  darkColor: {
    color: '#000000',
  },
  switchStateText: {
    fontSize: 20,
    marginTop: 10,
  },
});