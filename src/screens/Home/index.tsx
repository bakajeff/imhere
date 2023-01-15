import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./style";

export function Home() {
	function handleParticipantAdd() {
		console.log("Você clicou no botão de Adicionar");
	}

	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Nome do evento</Text>

			<Text style={styles.eventDate}>Domingo, 15 de janeiro de 2023.</Text>

			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Nome do participante"
					placeholderTextColor="#6b6b6b"
				/>

				<TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>

			<Participant />
			<Participant />
			<Participant />
		</View>
	);
}
