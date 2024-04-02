import { StyleSheet } from "react-native";

export const estilo= StyleSheet.create({
    root: {
        padding: 30,
        backgroundColor: '#d0efb1',
        height: '75%',
        gap: 30
    },
     cabecalho: {
        backgroundColor: '#7CA982',
        marginTop: 35
        
     },

     Principal: {
        backgroundColor: '#7CA982',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around',
        height: '10%'
     }, 

     ImagemPrincipal: {
        height: 100,
        
    
     },
     Pesquisa: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: 280,
        height: 40,
        
     },
    Usuarios: {
        height: 60,
        width: 60
    },
    section: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20
    },
    Butao: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8  
    },
    imagebotao: {
        height: 20,
        width:20,
       
    },
    input: {
        width: 200,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff'
    }

})