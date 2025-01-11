import React,{useState} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  } from 'react-native'
import { useRouter } from 'expo-router'
import {COLORS,SIZES} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch'

import styles from './popularjobs.style'

const Popularjobs = () => {
  const router=useRouter();
  const {data,isLoading,error}=useFetch({
    endpoint:'search',
    query:{
      query:'React Developer',
      num_pages:1,
    },
  });
  // console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Popular Jobs</Text> 
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity> 
      </View>
      <View style={styles.cardsContainer}>
          {isLoading ? (
            <ActivityIndicator sie="large" color={COLORS.primary}/>
          ): error ? (
            <Text>Something Went Wrong</Text>
          ):(
            <FlatList
              data={[1,2,3,4,5,6,7 ]}
              renderItem={({item})=>(
                <PopularJobCard
                  item={item}
                />
            )}
            keyExtractor={item=>item?.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
            showsHorizontalScrollIndicator={false}
            />
            
          )}

        </View>
    </View>
  )
}

export default Popularjobs