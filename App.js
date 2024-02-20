import React, { Component } from 'react';
import { View, Text, Switch, StyleSheet, Image } from 'react-native';

export default class App extends Component {
  state = {
    switchValue: false
  }

  render() {
    const { switchValue } = this.state;
    return (
      <View style={[styles.container, { backgroundColor: switchValue ? 'yellow' : 'black' }]}>
        <Text style={[styles.textStyle, { color: switchValue ? 'black' : 'white' }]}></Text>
        <Switch
          style={{ marginBottom: 10 }}
          value={switchValue}
          onValueChange={(switchValue) => this.setState({ switchValue })}
        />
        <Image
          source={require('./lightbul.png')} 
        />
        <Text style={[styles.textStyle, { color: switchValue ? 'black' : 'white' }]}>
          {switchValue ? 'ON' : 'OFF'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Lightbulb: {
    width: 50,
    height: 50,
    size: 50,
    resizeMode: 'contain',
  },
});






