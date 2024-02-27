import { useState } from 'react';
import {View,Text,StyleSheet, TextInput} from 'react-native';
const User=(props)=>{
    
    const [a,set_a]=useState('yes');
    const [goal,set_goal]=useState('0');
    const kick=()=>{
    set_goal('1');
    }
return(
<View>
<Text style={styles.tittle}>{props.gol}</Text>
    <Text style={styles.tittle}>What do you think?</Text>
    <Text style={styles.tittle}>Is that's a {a}'s GOAL? </Text>
    <TextInput onChangeText={text=> set_a(text)} defaultValue='is that a goal?'></TextInput>
    
    <Text style={styles.tittle}>
      {a ==='yes'?
       (<Text  
        onPress={()=>set_goal("1")}>G.O.A.T</Text>)
       : ("not a goal")}  
    </Text>
    <Text style={styles.tittle}>
    {
      goal
    }
    </Text>
</View>

);
};
const styles =StyleSheet.create({
tittle:
{
    fontSize: 30,
    fontWidth: 'bold',
    color: "green",
    textAlignVertical: "center",
    padding: 10,
    textAlign: "center",
},
});
export default User;