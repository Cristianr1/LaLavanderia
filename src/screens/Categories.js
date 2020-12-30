/* eslint-disable react/prop-types */
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from '../stylesheets/stylesCategories';
import {useSelector} from 'react-redux';

function Categories({navigation}) {
  const categories = useSelector((state) => state.categories.categoriesData);
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      style={styles.categorie}
      onPress={() =>
        navigation.navigate('Products', {
          index,
          title: item.categoria_nombre,
        })
      }>
      <ImageBackground
        source={{uri: item.categoria_imagen_ruta}}
        style={styles.ImageBackground}
        imageStyle={{borderRadius: 15}}>
        <Text style={styles.text}>{item.categoria_nombre}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default Categories;
