import React,{useState} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  } from 'react-native'
import { useRouter } from 'expo-router'
import {COLORS} from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch'
import styles from './nearbyjobs.style'

const Nearbyjobs = () => {
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
        <Text style={styles.headerTitle}> NearBy Jobs</Text> 
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
           data?.map((job)=>(
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={()=> router.push(`/job-details/${job.job_id}`)}
            />
           ))
            
          )}

        </View>
    </View>
  )
}

export default Nearbyjobs