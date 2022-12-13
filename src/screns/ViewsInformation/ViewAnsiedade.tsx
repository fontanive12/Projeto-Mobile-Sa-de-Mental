import { ScrollView, StyleSheet, Text } from "react-native"
import { View } from "react-native-animatable"
import { theme } from "../../components/styles/DefaultTheme"

export const ViewAnsiedade = () => {
    return (
        <ScrollView>
        <View style={theme.container}>
        <Text style={theme.title}>O que é Ansiedade e como controlar?</Text>
        <View style={{padding: 8}}>
            <Text style={styles.text}>
                    A ansiedade é uma emoção normal que todos nós temos, 
                mas quando ela fica mais sensível e sentimos ela em níveis mais elevados ela pode se tornar patológica.
            </Text>

            <Text style={styles.text}>
                Para regular a ansiedade precisamos deixar nossa mente menos preocupada, pois quanto mais medos e mais preocupações sentirmos mais ficamos ansiosos.
            </Text>

            <Text style={styles.text}>
                Para organizar nossa mente e deixar ela mais tranquila e calma, temos algumas dicas como:
            </Text> 

        <View style={styles.items}>
            <Text style={styles.item}>
                • meditar;
            </Text>
            <Text style={styles.item}>
                • esperar;
            </Text>
            <Text style={styles.item}>
            • cuidar da nossa higiene do sono
            </Text>
            <Text style={styles.item}>
            • fazer atividade física
            </Text>
            <Text style={styles.item}>
            • ter alguns momentos de auto cuidado ou descanso
            </Text>
            <Text style={styles.item}>
            • gerenciar nossos problemas (pois as vezes tem coisas que não podemos e não depende só de nós resolvermos)
            </Text>
        </View>
            <Text style={styles.text}>
            E uma dica de ouro: procure se conhecer melhor, entender quem você é de verdade e o que você gosta, 
            parar de brigar tanto com seus pontos fracos e olhar mais para as coisas que já venceu e é capaz de fazer. 
            Uma das maiores viradas de chame contra a ansiedade patológica é a auto confiança e isso só depende de você e da sua relação com seu verdadeiro EU.
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
        paddingTop: 4
    },
    items: {
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 20,
        justifyContent: 'flex-start'
    },
    item: {
        fontSize: 18,
        color: "white",
        alignItems: 'flex-start'
    }
})