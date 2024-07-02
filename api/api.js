import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const ApiEmpresas = () => {
    const[empresas, setEmpresas] = useState([]);
    useEffect(() => {
        getEmpresas();
    }, []);
// http://dados.recife.pe.gov.br/dataset/99eea78a-1bd9-4b87-95b8-7e7bae8f64d4/resource/d4074db6-0ac6-4f5c-8e53-272711a84018/download/faixaazul.json
    const getEmpresas = () => {
        const URL = "http://dados.recife.pe.gov.br/dataset/99eea78a-1bd9-4b87-95b8-7e7bae8f64d4/resource/d4074db6-0ac6-4f5c-8e53-272711a84018/download/faixaazul.json";

        fetch(URL)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setEmpresas(data);
            console.log(data);
        });
    };
    return (
        <View>
            
            <FlatList data={empresas} renderItem={({ item }) => (
            <View>
                <Text style={{ fontSize: 18, 
                            textAlign:"left",
                            backgroundColor: '#fff',
                            padding: 16,
                            marginVertical: 8,
                            marginHorizontal: 10,
                            borderRadius: 50,
                            shadowColor: '#00566B', // Cor da sombra azul
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.2,
                            shadowRadius: 4

                        } }>
                    {item.equipamento_Descricao}</Text>
                
            
            </View> 
        )} />
        </View>
    )
}



export default ApiEmpresas;
