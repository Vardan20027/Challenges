import React, {useState} from 'react';
import {styles} from './style';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import SelectIcon from '../../assets/icons/selectIcon';
import {Sizes} from '../../assets/RootStyle';
import {DATA} from '../../assets/FakeData';

function Index(props) {
  const [selected, setSelected] = useState();
  const {container, image2, image} = styles();

  const renderItem = ({item}) => (
    <>
      <TouchableOpacity
        onPress={() => {
          setSelected(item.id);
        }}
        style={container}>
        {item.id === selected ? (
          <View
            style={{
              width: Sizes.size24,
              height: Sizes.size24,
              borderRadius: Sizes.size12,
              backgroundColor: '#FFFFFF',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              top: 0,
              right: 0,
              zIndex: 1,
            }}>
            <SelectIcon />
          </View>
        ) : null}
        <Image
          source={item.img}
          style={item.id === selected ? image2 : image}
        />
      </TouchableOpacity>
    </>
  );
  return (
    <View>
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Index;
