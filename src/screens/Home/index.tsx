import { View, Text } from "react-native";
import { styles } from "./style";

export function Home() {
	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Nome do evento</Text>
			<Text style={styles.eventDate}>Domingo, 15 de janeiro de 2023.</Text>
		</View>
	);
}
