import { Text, View } from "react-native"
import React from "react"
import {Tabs} from 'expo-router'
import TabBar from "../components/TabBar"

const _layout = () => {
  return (
    <Tabs
        tabBar={props=> <TabBar {...props} />}
>
      <Tabs.Screen
      name="index"
      options={{
        title:"Início"
      }}
      />

      <Tabs.Screen
      name="create"
      options={{
        title:"Proximos de você"
      }}
      />

      <Tabs.Screen
      name="profile"
      options={{
        title:"Mapa"
      }}
      />

    </Tabs>
  )

}

export default _layout