import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class CardInput extends Component {
  constructor() {
    super();
    this.state = {
      number: '',
      mm: '',
      yy: '',
      cvc: '',
    };
  }

  handleNumberChange = prop => newNumber => {
    this.setState({
      [prop]: newNumber,
    })
  }

  handlePayPress = () => {
    const { onCardChange } = this.props;
    onCardChange && onCardChange(this.state);
  }

  render() {
    return (
      <View style={styles.outerMost}>
        <View style={styles.container}>
          <TextInput
            placeholder="Card number"
            placeholderTextColor="rgba(0, 0, 0, .7)"
            style={[styles.input, styles.number]}
            underlineColorAndroid='transparent'
            onChangeText={this.handleNumberChange('number')}
            keyboardType='numeric'
            />
          <TextInput
            placeholder="MM"
            placeholderTextColor="rgba(0, 0, 0, .7)"
            style={[styles.input, styles.mm]}
            underlineColorAndroid='transparent'
            onChangeText={this.handleNumberChange('mm')}
            keyboardType='numeric'
            />
          <TextInput
            placeholder="YY"
            placeholderTextColor="rgba(0, 0, 0, .7)"
            style={[styles.input, styles.yy]}
            underlineColorAndroid='transparent'
            onChangeText={this.handleNumberChange('yy')}
            keyboardType='numeric'
            />
          <TextInput
            placeholder="CVC"
            placeholderTextColor="rgba(0, 0, 0, .7)"
            style={[styles.input, styles.cvc]}
            underlineColorAndroid='transparent'
            onChangeText={this.handleNumberChange('cvc')}
            keyboardType='numeric'
            />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={this.handlePayPress}>
          <Text>Pay!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// <Text>{this.state.number}/{this.state.mm}/{this.state.yy}/{this.state.cvc}</Text>

const styles = StyleSheet.create({
  outerMost: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.3)',
    borderRadius: 5,
  },
  input: {
    fontSize: 18,
  },
  number: {
    flex: 1,
  },
  mm: {
    width: 40
  },
  yy: {
    width: 40
  },
  cvc: {
    width: 60
  },
  button: {
    backgroundColor: 'rgb(66, 134, 244)',
    padding: 10,
    borderRadius: 10,
  }
});
