import { View, Image, TextInput, TouchableOpacity } from "react-native";
import { estilo } from "./style";


export default function Card(){
    return(
        <View>
            <View style={estilo.cabecalho}>
                <Image style={estilo.ImagemPrincipal}
                source={require('../../assets/Minecraft.jpg')}/>
            </View>
            <View style={estilo.Principal}>
                <TextInput style={estilo.Pesquisa}/>      
                
                <TouchableOpacity style={estilo.Butao}>
                    <Image style={estilo.imagebotao}
                    source={require('../../assets/SearchIcon.png')}/>
                </TouchableOpacity>

            </View>
            <View style={estilo.root}>
                <View style={estilo.section}>
                    <Image style={estilo.Usuarios}
                    source={require('../../assets/User.png')}/>
                    <TextInput style={estilo.input}>Nome usuário</TextInput>
                </View>
                <View style={estilo.section}>
                    <Image style={estilo.Usuarios}
                    source={require('../../assets/User.png')}/>
                    <TextInput style={estilo.input}>Nome usuário</TextInput>
                </View>
                <View style={estilo.section}>
                    <Image style={estilo.Usuarios}
                    source={require('../../assets/User.png')}/>
                    <TextInput style={estilo.input}>Nome usuário</TextInput>
                </View>
                <View style={estilo.section}>
                    <Image style={estilo.Usuarios}
                    source={require('../../assets/User.png')}/>
                    <TextInput style={estilo.input}>Nome usuário</TextInput>
                </View>
            </View>
        </View>
    )
}