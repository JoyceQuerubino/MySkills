import React, { useEffect, useState } from 'react'; 
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput,
  FlatList
} from 'react-native'; 

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData{
  id: string;
  name: string;
}

export function Home(){
  const [newSkill, setNewSkill] = useState(''); 
  const [mySkills, setMySkills] = useState<SkillData[]>([]); 
  const [greeting, setGreeting] = useState(''); 

  function handleAddNewSkills(){

    const data ={
      id: String(new Date().getTime()), 
      name: newSkill
    }

    setMySkills(oldSkill => [...oldSkill, data]) //o estado antigo (antigas skills) recebe o estado antigo + o newSkill
  }

  useEffect(() => {
    const currentHour = new Date().getHours(); 

    if(currentHour < 12){
      setGreeting('Good morning');
    }
    else if(currentHour >= 12 && currentHour < 18){
      setGreeting('Good afternoon');
    }
    else {
      setGreeting('Good night');
    }

  }, [mySkills])

  return(
    <View style={styles.container}>

      <Text style={styles.title}>Welcome, Joyce</Text>

      <Text style={styles.greeting}> {greeting} </Text>

      <TextInput 
        style={styles.input} 
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button 
        onPress={handleAddNewSkills} 
        title="Add"
      />

      <Text style={[styles.title, {marginVertical: 40} ]}>MySkills</Text>

      <FlatList 
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard skill={item.name}/>  
        )}
        showsVerticalScrollIndicator={false}
      />

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
       
    }, 
    greeting:{
      color:'#FEE'
    }
})
