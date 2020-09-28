import {StyleSheet, Dimensions} from 'react-native';

const vertical = Dimensions.get('window').height / 3

const AppStyles = StyleSheet.create({
    graph: {
        height: 100,
        borderWidth: 1,
        borderColor: 'red'

    }
})

export default AppStyles