import React from 'react';
import { Text, View } from 'react-native';

const Detay = ({ data }) => {
  const { containerStyle, subContainerStyle } = styles;
  return (
    <View style={containerStyle}>
      <View style={subContainerStyle}>
        <Text> {data.title} </Text>
      </View>

      <View style={subContainerStyle}>

      </View>

      <View style={subContainerStyle}>

      </View>

    </View>
  );
};
const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height:2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,

  },
  subContainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flextDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }

};
export default Detay;
