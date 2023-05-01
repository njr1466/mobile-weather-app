
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 0,
        padding: 9,
        width: 110,
        height: 140,
        paddingTop: 30,
        alignItems: "center",
        marginLeft: 0
    },
    description: {
        fontSize: 17,
        color: '#ffffff',
    },
    image: {
        width: 60,
        height: 60
    },
});

export default styles;