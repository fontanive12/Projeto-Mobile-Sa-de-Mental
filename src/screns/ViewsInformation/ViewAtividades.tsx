import { ScrollView, StyleSheet, Text } from "react-native"
import { View } from "react-native-animatable"
import { theme } from "../../components/styles/DefaultTheme"

export const ViewAtividades = () => {
    return (
                <ScrollView>
        <View style={theme.container}>
            <Text style={theme.title}>Lista de atividades calmantes</Text>
            <View style={styles.items}>
            <Text style={styles.text}>
                - Escovar os dentes
            </Text>
            <Text style={styles.text}>
            - Lixar as unhas
            </Text>
            <Text style={styles.text}>
            - Ler ou reler ou livro que goste
            </Text>
            <Text style={styles.text}>
            - Telefonar para um amigo 
            </Text>
            <Text style={styles.text}>
            - Conversar com um colega ou vizinho
            </Text>
            <Text style={styles.text}>
            - Ir a uma loja ou praça
            </Text>
            <Text style={styles.text}>
            - Brincar com uma criança ou animal de estimação
            </Text>
            <Text style={styles.text}>
            - Andar de bicicleta
            </Text>
            <Text style={styles.text}>
            - Caminhar ou praticar algum exercício
            </Text>
            <Text style={styles.text}>
            - Escrever pensamentos positivos
            </Text>
            <Text style={styles.text}>
            - Tomar banho
            </Text>
            <Text style={styles.text}>
            - Fazer uma atividade artística
            </Text>
            <Text style={styles.text}>
            - Montar um quebra-cabeça
            </Text>
            <Text style={styles.text}>
            - Tocar um instrumento musical
            </Text>
            <Text style={styles.text}>
            - Lavar o carro
            </Text>
            <Text style={styles.text}>
            - Trabalhar no jardim
            </Text>
            <Text style={styles.text}>
            - Fotografar a natureza
            </Text>
            <Text style={styles.text}>
            - Fazer uma tarefa doméstica
            </Text>
            <Text style={styles.text}>
            - Escutar alguma música
            </Text>
            <Text style={styles.text}>
            - Assistir um filme ou série
            </Text>
            <Text style={styles.text}>
            - Cozinhar algo que goste
            </Text>
            </View>
        </View>
            </ScrollView>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: "white",
        justifyContent: 'flex-start',
        paddingTop: 10
    },
    items: {
        marginTop: 10,
        marginBottom: 10,
        // height: '100%'
    },
})