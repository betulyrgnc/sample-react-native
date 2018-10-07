import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import Detay from './Detay';
class Liste extends Component {
    state = { data: [] };
    componentWillMount() {
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ data: response.data }));
      console.log('betul');
    }
    componentDidMount() {
      console.log('componentDidMount');
    }

    renderData() {
      return this.state.data.map((responseData, Id) =>
      <Detay key={Id} data={responseData} />
      );
      }

    render() {
      console.log('gelen data ' + this.state);
      console.log('render');
      return (
        <View style={{ marginTop: 5 }}>
          {this.renderData()}
        </View>
    );
  }
}
export default Liste;
