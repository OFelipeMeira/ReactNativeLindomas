import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ff0',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
    },
    mainTxt: {
        fontSize: 30,
    },
    input: {
        borderWidth: 2,
        borderRadius: '10px',
        padding: '1%',
        margin: '1%'
    },
    btn: {
        backgroundColor: "#00F",
        padding: "1%",
        borderRadius: '10px'
    },
    btnTxt: {
        color: '#FFF'
    },
})

export default styles