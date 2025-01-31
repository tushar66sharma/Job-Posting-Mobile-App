import React, { useState } from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { useRouter } from 'expo-router';
import styles from './welcome.style';
import {icons,SIZES} from '../../../constants';
  
const jobTypes=["Full-time","Part-time","Contractor"];
const Welcome = ({searchTerm,setSearchTerm,handleClick}) => {
  const router=useRouter();
  const [ActiveJobType,setActiveJobType]=useState('Full-time');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your prefact job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}> 
        <TextInput
            style={styles.searchInput}
            value={searchTerm}
            
            placeholder="what are you looking for?"
            onChangeText={(text)=>setSearchTerm(text)}

          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizemode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({item})=>(
            <TouchableOpacity
              style={styles.tab(ActiveJobType,item)}
              onPress={()=>{
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(ActiveJobType,item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item=>item}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
          showsHorizontalScrollIndicator={false}
        />



      </View>
    </View>
    
  )
}
export default Welcome