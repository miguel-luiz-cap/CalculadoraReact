import React,{useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [numero1, setNUMERO1] = useState('');
  const [numero2, setNUMERO2] = useState('');

  function soma() {
    const resultado = parseFloat(numero1) + parseFloat(numero2);
    alert('Soma: ' + resultado)
  }
  function subtrair() {
    const resultado = parseFloat(numero1) - parseFloat(numero2);
    alert('Subtração: ' + resultado)
  }

  function multiplicacao() {
    const resultado = parseFloat(numero1) * parseFloat(numero2);
    alert('Multiplicação: ' + resultado)
  }
  function divisao() {
    const resultado = parseFloat(numero1) / parseFloat(numero2);
    alert('Divisão: ' + resultado)
  }

  return (
    <View style={estilo.container}>
      <Image style={estilo.imagem} source={require('/assets/calculator.png')} />

      <Text style={estilo.titulo}>Somando Valores</Text>
      <TextInput style={estilo.input} value={numero1} keyboardType='numeric' onChangeText={(numero1) => setNUMERO1(numero1)} placeholder='Digite um número'/> 
      <TextInput style={estilo.input} value={numero2} keyboardType='numeric' onChangeText={(numero2) => setNUMERO2(numero2)} placeholder='Digite um número'/> 
      
      <Text style={estilo.alinhamento}><TouchableOpacity style={estilo.botao} onPress={soma}> 
        <Text style={estilo.textobotao}>Soma</Text>
      </TouchableOpacity><TouchableOpacity style={estilo.botao} onPress={subtrair}> 
        <Text style={estilo.textobotao}>Subtração</Text>
      </TouchableOpacity></Text>
      
      <Text style={estilo.alinhamento}><TouchableOpacity style={estilo.botao} onPress={multiplicacao}>
        <Text style={estilo.textobotao}>Multiplicação</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={estilo.botao} onPress={divisao}> 
        <Text style={estilo.textobotao}>Divisão</Text>
      </TouchableOpacity> </Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  input: {
    backgroundColor: '#FFFFFF',
    //color: '#FF0000',
    margin: 10,
    marginEnd: 15,
    marginStart: 15,
    padding: 10,
    paddingStart: 20,
    paddingEnd: 20,
    borderRadius: 15,
    fontSize: 20,
    fontFamily: 'monospace',

   // : '#FF0000'
  },
  titulo: {
    margin: 30,
    textAlign: 'center',
    fontSize: 30,
    //textDecoration: 'underline',
    color: '#BBBB00',
    fontFamily: 'monospace',
    //textDecorationColor: '#00AA00'

  },
  alinhamento: {
    textAlign: 'center',
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#00BB99',
    borderRadius: 30,
    padding: 10,
    margin: 5,
    marginEnd: 10,
    textAlign: 'center',
    width: 150,
 

  },
  textobotao: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  imagem: {
    height: 128,
    width: 128,
    tintColor: '#BB00FF',
    alignSelf: 'center',
  },
});
