import React from 'react'
import { View, Text,TouchableOpacity,Image } from 'react-native'

import styles from './nearbyjobcard.style'
import { checkImageURL } from '../../../../utils'

const NearbyJobCard = ({job,handleNavigate}) => {
  // console.log("Employer Logo URL:", job?.employer_logo);
  // console.log("Is Valid URL:", checkImageURL(job?.employer_logo));
  return (
    <TouchableOpacity style={styles.container}
      onPress={handleNavigate}
    > 
    <View>
      
    </View>
    
    <TouchableOpacity style={styles.logoContainer}>
      
      <Image 
        source={{
          uri: checkImageURL(job?.employer_logo)
            ? job.employer_logo
            : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
        }}
        resizeMode='contain'
        style={styles.logoImage}
        
        />
    </TouchableOpacity>
    <View style={styles.textContainer}>
      <Text style={styles.jobName} numberOfLines={1}>{job.job_title}</Text>
      <Text style={styles.jobType}>{job.job_job_employment_type}</Text>
    </View>
    </TouchableOpacity>
    
  )
}

export default NearbyJobCard