/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TextInput, ScrollView, Image, Button, FlatList, TouchableHighlight } from 'react-native';
import User from './component/components/user';
import Videos from './component/components/videos';

const Form_application = () => {
  const [namem, set_name] = useState('');
  const [Password, set_password] = useState('');
  const [Email, set_email] = useState('');
  const [display, set_display] = useState(false);
  const [switchw, set_switch] = useState(false);
  const [switchw_hide, set_switch_hide] = useState(true);
  const [tag, set_tag] = useState(252)
  const [sym, set_sym] = useState("*");

  const users = [
    {
      name: 'Menu',
      percentage: 90,
      id: 9
    },
    {
      name: "View ",
      percentage: 9,
      id: 2
    },
    {
      name: "Videos",
      percentage: 98,
      id: 3
    },
    {
      name: "Settings",
      percentage: 30,
      id: 4
    },
    {    
      name: "Saved",
      percentage: 30,
      id: 5
    }
  ]

  const disply = () => {
    set_display(false)
    set_name("")
    set_password("")
    set_tag(252);
    set_email("")
  }

  const setup = () => {
    set_display(true);
    set_tag(199-23);
  }

  return (

    <ScrollView >

      <Text style={[styles.coontent]}>{"\n"}Personal Information</Text>
      <ScrollView horizontal={true}
        contentContainerStyle={{ flexDirection: "row" }} >
        <FlatList
          data={users}
          horizontal={true}
          renderItem={({ item }) =>
            <TouchableOpacity style={[styles.button,]} onPress={() => { console.warn(item.name);console.error(item.percentage)}}>
              <Text style={styles.buttonText}>{item.name}</Text>
            </TouchableOpacity>
          } />

      </ScrollView>
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", marginTop: 20 }}>

        <Text style={styles.tittle} >  Name:    </Text>
        <TextInput style={[styles.inputstyle, { width: 263 }]}
          onChangeText={(text) => set_name(text)}
          value={namem}></TextInput>
      </View>
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", marginTop: 20 }}>
        <Text style={styles.tittle}>Password: </Text>

        <TextInput style={[styles.inputstyle, { width: 241 }]}
          secureTextEntry={switchw_hide}
          onChangeText={(text) => set_password(text)}
          value={Password}></TextInput>


        <TouchableHighlight onPress={() => { }}
          onHideUnderlay={() => { set_switch(false); set_switch_hide(true); set_sym("*") }}
          onShowUnderlay={() => { set_switch_hide(false); set_switch(true); set_sym("_") }}

          underlayColor={"lightgreen"}
          style={{ backgroundColor: "green", padding: 1, width: 25 }}
        >
          <Text style={styles.buttonText}>{sym}</Text>
        </TouchableHighlight>
      </View>

      <View>

      </View>
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", marginTop: 20 }}>
        <Text style={styles.tittle}>  Email:     </Text>
        <TextInput style={[styles.inputstyle, { width: 263 }]}
          onChangeText={(text) => set_email(text)}
          value={Email}></TextInput>

      </View >
      {
        display ?
          <View >
            <Text style={{ marginLeft: 256, marginTop: 50, flexWrap: "wrap" }}>
              <Button title='clear Screen' color={"pink"} onPress={disply}></Button></Text>
            <View style={styles.description_box}>

              <Text  >Name is:{namem}{'\n'}
                PASSWORD is:{Password}{'\n'}
                Email is: {Email}</Text>
            </View>

          </View>
          :
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", paddingLeft: 246, marginTop: 50 }}>
            <Button title='Creat Acount' color={"green"} onPress={() => setup()}></Button>

          </View>
      }
      <View style={[styles.footer, { marginTop: tag }]}>
        <Text style={styles.footerText}> © Copyright 2024</Text>
      </View>

    </ScrollView>
  );
};
const styles = StyleSheet.create({
  butt: {
    backgroundColor: 'cyan',
    borderColor: 'blue',
    height: 35,
    width: 90,
  },
  button: {
   
    width: 90,
    backgroundColor: 'green', // Example background color
    padding: 10,
    borderRadius: 30, // Adjust this value to control the roundness
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
  },
  itemstyl: {
    width: 90,
    backgroundColor: "green",
    color: "white",
    padding: 10,

    fontSize: 22,
  },

  inputstyle: {

    height: 35,
    width: 150,
    borderColor: "lightblue",
    backgroundColor: "white",
    borderWidth: 1,
  },

  tittle:
  {
    fontSize: 21,
    fontWidth: 'bold',
    color: "black",
    textAlignVertical: "center",
    padding: 3,
    textAlign: "center",
  },

  coontent: {
    backgroundColor: "lightgreen",
    color: "#ffff",
    fontSize: 55,
    borderRadius: 30,
    marginBottom:15,
    marginVertical:-56,
    textAlign: 'center',
    textAlignVertical: "center",

  },
  description_box: {


    borderWidth: 5,
    borderColor: "gray",
    backgroundColor: "lightgray",
    color: 'black',
    marginTop: 15,
  },
  footer: {

    backgroundColor: 'lightgreen',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  footerText: {
    textAlign: 'center',
  },
});

export default Form_application;