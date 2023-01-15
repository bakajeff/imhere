import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./style";

export function Home() {
	const participants = [
		"Rodrigo",
		"Vini",
		"Diego",
		"Biro",
		"Luana",
		"Isa",
		"Jack",
		"Mayk",
		"João",
	];

	function handleParticipantAdd() {
		console.log("Você clicou no botão de Adicionar");
	}

	function handleParticipantRemove(name: string) {
		console.log(`Você clicou em remover o participante ${name}`);
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

			<ScrollView showsVerticalScrollIndicator={false}>
				{participants.map((participant) => (
					<Participant
						key={participant}
						name={participant}
						onRemove={() => handleParticipantRemove("Rodrigo")}
					/>
				))}
			</ScrollView>
		</View>
	);
}
