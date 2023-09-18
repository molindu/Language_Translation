import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Modal,
    View,
    FlatList

} from 'react-native';
import i18next, { languageResource } from './services/i18next';
import { useTranslation } from 'react-i18next';
import languagesList from './services/languagesList.json';

const App = () => {
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation();
    const changeLng = (lng) => {
        i18next.changeLanguage(lng);
        setVisible(false);
    };
    return (
        <SafeAreaView style={styles.container}>
            <Modal
                visible={visible}
                onRequestClose={() => setVisible(false)}>
                <View style={styles.languagesList}>
                    <FlatList
                        data={Object.keys(languageResource)}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                style={styles.languageButton}
                                onPress={() => changeLng(item)}
                            >
                                <Text
                                    style={styles.lngName}
                                >{languagesList[item].nativeName}</Text>
                            </TouchableOpacity>} />
                </View>
            </Modal>
            <Text style={styles.text}>{t('welcome')}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setVisible(true)}>
                <Text
                    style={styles.buttonText}
                >{t('change-language')}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#191266',
    },
    button: {
        backgroundColor: '#191',
        padding: 10,
        borderRadius: 10,

    },
    text: {
        fontSize: 20,
        marginBottom: 50,
    },
    languagesList: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#6258e8',
    },
    languageButton: {
        padding: 10,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
    },
    lngName: {
        fontSize: 16,
        color: 'white',
    },

})

export default App;