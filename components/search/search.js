
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';

const Search = (props) => {

    const [search, setSearch] = useState();


    return (

        <View style={{ width: '100%' }}>
            <SearchBar
                placeholder="Procure uma cidade..."
                value={search}
                onChangeText={text => setSearch(text)}
                containerStyle={{ backgroundColor: 'transparent', borderBottomColor: 'transparent', borderTopColor: 'transparent', padding: 40 }}
                inputContainerStyle={{ backgroundColor: '#fff' }}
                searchIcon={{ color: '#000' }}
                clearIcon={{ color: '#000', onPress: handleCancel }}
                onSubmitEditing={handleSearch}
            />
        </View>
    );
};


export default Search;