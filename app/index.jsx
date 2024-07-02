import { Text, StyleSheet, Image } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import ApiEmpresas from "../api/api.js"

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/hero.png')}
      />
      <Text style={styles.paragraph}>A Prefeitura do Recife proporciona a democratização do espaço público nas movimentadas vias do Centro com o projeto Faixa Azul. 
      As faixas azuis conectam as cidades e representam um alívio para passageiros e motoristas que reside no Grande Recife e precisa entrar e sair do Recife diariamente.</Text>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    margin: 16,
},
paragraph: {
    fontSize: 19,
    lineHeight: 24,
    color: '#333',
    textAlign: 'left',
    marginTop: 16,
  }
})
export default Home