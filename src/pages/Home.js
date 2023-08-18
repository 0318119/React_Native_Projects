import React from 'react'
import { SafeAreaView,View } from 'react-native-safe-area-context'
import SideBar from '../components/SideBar'

const Home = () => {
  return (
    <>
    <SafeAreaView>
        <View>
            <SideBar />
        </View>
    </SafeAreaView>
    </>
  )
}

export default Home