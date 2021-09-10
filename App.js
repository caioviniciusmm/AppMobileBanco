import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity } from 'react-native';
import { colors } from './utils/colors';
import { sizes } from './utils/sizes';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider'

export default function App() {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [genero, setGenero] = useState("Homem")
  const [limite, setLimite] = useState(0)
  const [estudante, setEstudante] = useState(false)
  const [floorlimite, setFloor] = useState(0)

  const abrirConta = () => {
      if(nome && idade && limite > 0) {
        let est = (estudante)?"Ativo":"Desativo"
        alert("Conta Aberta com Sucesso!! \n Nome: " +nome+ " \n Idade: " +idade+ "\n Genero: " +genero+ "\n Limite: " +limite+ "\n Estudante: " +est )
      }else {
        alert("Preencha corretamente os campos!")
      }
     }

  const resetarCampos = () => {
    setNome("");
    setIdade("");
    setGenero("Homem");
    setLimite(0);
    setEstudante(false)   
  }

  useEffect(() => {
    setFloor(Math.floor(limite))
  },[limite]);


  return (
    <View style={styles.container}>
     <View style={styles.viewbutton}>
     <Text style={{fontSize:sizes.medium, color:colors.white}}>Cadastro do Banco</Text>
     </View>
     <View>
      <Text style={styles.text}>Nome:</Text>
     <TextInput
        placeholderTextColor= 'black'
        style={styles.input}
        onChangeText={setNome}
        value={nome}
        placeholder="Insira Seu Nome!"
        />
       </View>
       <View>
        <Text style={styles.text} >Idade:</Text>
        <TextInput
        placeholderTextColor= 'black'
        style={styles.input}
        onChangeText={setIdade}
        value={idade}
        placeholder="Sua idade!"
        keyboardType="numeric"
        />
        </View>
        <Text style={styles.text}>Genero:</Text>
        <Picker style= {styles.input}
        selectedValue={genero}
        onValueChange={setGenero}>
        <Picker.Item label="Homem" value="Homem" />
        <Picker.Item label="Mulher" value="Mulher" />
      </Picker>
      <Text style={styles.text} >Seu Limite: {floorlimite}</Text>
      <View style={{height: sizes.medium}}>
      <Slider
        value={limite}
        onValueChange={setLimite}
        style={styles.slider}
        minimumValue={0}
        maximumValue={10000}
        minimumTrackTintColor= {colors.cyan}
        maximumTrackTintColor= {colors.white}
      />
      </View>
      <View style={{flexDirection:'row'}}>
      <Text style={styles.text}>Estudante:</Text>
      <Switch style={styles.switch} value={estudante} onValueChange={setEstudante}/>
      </View>
      <View style={styles.viewbutton}>
      <TouchableOpacity style={styles.button}
      onPress={abrirConta}><Text>Abrir a Conta</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={resetarCampos}>Resetar</TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,  
    backgroundColor: colors.brown,
    alignItems: 'left',
    justifyContent: 'center',
  },  input: {
      width: '90%',
      backgroundColor: colors.white,
      height: sizes.big,
      margin: sizes.small,
      borderWidth: 1,
      paddingHorizontal: sizes.small,
  }, slider: {
    width: '90%', 
    height: sizes.big,
    alignSelf: 'center'
  }, button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.cyan,
    borderRadius: sizes.medium,
    width: 150,
    marginTop: 20,
    height: 40
  }, text: {
    alignSelf: 'flex-start',
    color: colors.white
  }, viewbutton: {
    alignItems: 'center',
    marginBottom: sizes.small
  }, switch: {
      marginLeft: 10
  }
});
