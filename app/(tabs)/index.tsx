import { Platform, RefreshControl, SafeAreaView, StyleSheet } from 'react-native';


import { Text, View } from '../../components/Themed';
import { ScrollView } from 'react-native-gesture-handler';
import Lottie from "lottie-react-native";
import React, { useRef } from 'react';

import { ThreadContext } from '../../context/thread-context';

import ThreadsItem from '../../components/ThreadsItem';




export default function TabOneScreen() {
  const animationRef = React.useRef <Lottie>(null)
  const threads = React.useContext(ThreadContext)
  return (
   <SafeAreaView >
    <ScrollView 
     
     contentContainerStyle={
      {
       
        paddingHorizontal:10,
        paddingTop: Platform.select({ android:30}),
      }
     }
     refreshControl={
      <RefreshControl 
        refreshing={false}
        tintColor={"transparent"}
        onRefresh={()=>{animationRef.current?.play()}}
      />
     }
    >
      
       <Lottie
         ref={animationRef}
          source={require("../../lottie-animations/threads.json")}
          loop={false}
          autoPlay
          style={{
            width: 90,
            height: 90,
            alignSelf: "center",
            
          }}

          // onAnimationFinish={()=>{
          //   alert("finished")
          // }}
        />
        {threads.map((thread) =>(
          <ThreadsItem  key={thread.id} {...thread} /> 
        ))}
    </ScrollView>
   </SafeAreaView>
  );
}

