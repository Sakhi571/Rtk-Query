import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useAddPostMutation } from '../slice/Slice'

const Home = () => {
 const [addPost] = useAddPostMutation();
  const addNew= async ()=>{
    const res = await addPost({
        title:'Software Engineer',
         description: 'Mobile Developer'
    });
    console.log(res);
  }
  return (
    <View>
        <TouchableOpacity style={styles.btn} onPress={()=> addNew()}>
      <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

export const styles= StyleSheet.create({
    btn:{
        paddingVertical:300,
        marginLeft:170
    }
})