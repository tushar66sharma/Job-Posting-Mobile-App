import React from "react";
import { View,Text,SafeAreaView,ScrollView,ActivityIndicator,RefreshControl, SwitchBase } from 'react-native';
import { Stack,useRouter,useLocalSearchParams } from "expo-router";
import { useCallback,useState } from "react";

import {Company,JobAbout,JobFooter,JobTabs,ScreenHeaderBtn,Specifics} from '../../components';
import { COLORS,icons,SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";

const tabs=["About","Qualifications","Responsibilities"];

const JobDetails=()=>{
    const params=useLocalSearchParams();
    const router=useRouter();
    const [refreshing,setRefreshing]=useState(false);
    const [ActiveTab,setActiveTab]=useState(tabs[0]);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch()
        setRefreshing(false)
      }, []);

    const displayTabContent = () => {
        if (!data || data.length === 0) {
          return <Text>No Data Available</Text>;
        }
    
        switch (ActiveTab) {
          case "Qualifications":
            return (
              <Specifics
                title="Qualifications"
                points={data[0]?.job_highlights?.Qualifications || ["N/A"]}
              />
            );
    
          case "About":
            return (
              <JobAbout
                info={data[0]?.job_description?? "No information available"}
              />
            );
    
          case "Responsibilities":
            return (
              <Specifics
                title="Responsibilities"
                points={data[0]?.job_highlights?.Responsibilities || ["N/A"]}
              />
            );
    
          default:
            return null;
        }
      };
    const {data,isLoading,error}=useFetch({
        endpoint:'job-details',
        query:{
          job_id:params.id
        },
    });
    // console.log("Hello testing:",data);


    return(
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle:{flex:1,backgroundColor:COLORS.lightWhite},
                    headerShadowVisible:false,
                    headerBackVisible:false,
                    headerLeft:()=>(
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={()=>router.back()}
                        />
                    ),
                    headerRight:()=>(
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension="60%"
                            
                        />
                    ),
                    headerTitle:''
                }}
            />
            <>
                <ScrollView showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing}
                onRefresh={onRefresh}/>}>
                    {isLoading?(
                        <ActivityIndicator size="large" color={COLORS.primary}/>
                    ):error?(
                        <Text>Something went WRONG</Text>
                    ): data.length===0?(
                        <Text>No data</Text>
                    ):(
                        <View style={{padding:SIZES.medium,paddingBottom:100}}>
                            <Company 
                                companyLogo={data[0].employer_logo}
                                jobTitle={data[0].job_title}
                                companyName={data[0].employer_name}
                                loaction={data[0].job_country}

                            
                            />
                            <JobTabs
                                tabs={tabs}
                                activeTab={ActiveTab}
                                setactivetab={setActiveTab}
                            />
                            {displayTabContent()}


                        </View>
                    )}

                </ScrollView>
                <JobFooter url={data[0]?.job_google_link?? 'https;//careers.google.com/jobs/results' }/>
            </>

            
        </SafeAreaView>
    )
}

export default JobDetails;