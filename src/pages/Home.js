import React, { useState } from 'react'; 
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
} from 'react-native'; 
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home(){
  const [newSkill, setNewSkill] = useState(''); 
  const [mySkills, setMySkills] = useState([]); 

  function handleAddNewSkills(){
    setMySkills(oldSkill => [...oldSkill, newSkill]) //o estado antigo (antigas skills) recebe o estado antigo + o newSkill
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Joyce</Text>

      <TextInput 
        style={styles.input} 
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkills} />

      <Text style={[styles.title, {marginVertical: 40} ]}>MySkills</Text>

      {
        mySkills.map( skill => (
          <SkillCard key={skill} skill={skill}/>
        ))
      }

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#121015',
        paddingVertical: 70, 
        paddingHorizontal: 30,
    },
    title: {
        color: '#FFF', 
        fontSize: 24, 
        fontWeight: 'bold'
    }, 
    input: {
        backgroundColor: '#1F1E25', 
        color: '#FFF', 
        fontSize: 18, 
        padding: 10, 
        marginTop: 30, 
        borderRadius: 7
    },
    buttonSkill:{
      backgroundColor: '#1F1E25',
      padding: 15, 
      borderRadius: 50,
      alignItems: 'center',
      marginVertical: 10
    }, 
    textSkill: {
        color: '#FFF',
        fontSize: 22, 
        fontWeight: 'bold', 
       
    }
})
