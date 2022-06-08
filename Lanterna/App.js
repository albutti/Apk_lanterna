import React, {useState, useEffect} from "react";
import {View, StyleSheet, Image, TouchableOpacity} from "react-native";
import Torch from "react-native-torch";
import RNShake from "react-native-shake";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const troca_on_de_off = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    Torch.switchState(toggle);
  },[toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });
    return () => subscription.remove();
  },[]);

  return <View style={toggle ? style.container_claro : style.container}>
    <TouchableOpacity onPress={troca_on_de_off}>
      <Image style={toggle ? style.lanterna_on : style.lanterna_off}
        source={
          toggle
            ? require('./assets/icons/eco-light.png')
            : require('./assets/icons/eco-light-off.png')}
      />
      <Image style={toggle ? style.logo_on : style.logo_off}
        source={
          toggle
            ? require('./assets/icons/logo-dio.png')
            : require('./assets/icons/logo-dio-white.png')}
      />
    </TouchableOpacity>
  </View>
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_claro: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lanterna_on: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
  lanterna_off: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 250,
    height: 250,
  },
  logo_on: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
  logo_off: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height:250,
  },
});