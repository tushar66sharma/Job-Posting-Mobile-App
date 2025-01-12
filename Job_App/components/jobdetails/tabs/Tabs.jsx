import React from 'react'
import { View, Text,TouchableOpacity,FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'


const TabButton=({name,activetab,onHandleSearchType})=>(
  <TouchableOpacity
    style={styles.btn(name,activetab)}
    onPress={onHandleSearchType}
  >
    <Text style={styles.btnText(name,activetab)}>
      {name}
    </Text>
  </TouchableOpacity>
)

const Tabs = ({tabs,activetab,setactivetab}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({item})=>(
          <TabButton
            name={item}
            activetab={activetab}
            onHandleSearchType={()=>setactivetab(item)}
          />
        )} 
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item=>item}
        contentContainerStyle={{columnGap:SIZES.small/2}}
      />
    </View>
  )
}

export default Tabs