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
        padding: '0.5%',
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
    foto:{
        width: 150,
        height: 200,
        alignContent: 'center',
        justifyContent: 'center',
        margin: 10,
        fontSize: 20,
    },
    img:{
        width: 100,
        height: 150,
        alignContent: 'center',
        justifyContent: 'center',
        margin: 10,
        fontSize: 20,
    }
})

export default styles