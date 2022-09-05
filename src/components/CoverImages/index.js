import React, {useState} from 'react';
import {styles} from './style';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';

function Index(props) {
  const [selected, setSelected] = useState();
  const {container, image2, image} = styles();
  const DATA = [
    {
      id: 0,
      img: require('../../assets/images/friends-toasting-with-beer-glasses-in-the-royalty-free-image-1637621142.jpg'),
    },
    {
      id: 1,
      img: require('../../assets/images/beer&pizzza.jpg'),
    },
    {
      id: 2,
      img: require('../../assets/images/when-is-beer-and-pizza-day-celebrated.jpg'),
    },
    {
      id: 3,
      img: require('../../assets/images/beer.png'),
    },
    {
      id: 4,
      img: require('../../assets/images/beer&pizzza.jpg'),
    },
    {
      id: 5,
      img: require('../../assets/images/friends-toasting-with-beer-glasses-in-the-royalty-free-image-1637621142.jpg'),
    },
    {
      id: 6,
      img: require('../../assets/images/when-is-beer-and-pizza-day-celebrated.jpg'),
    },
    {
      id: 7,
      img: require('../../assets/images/beer&pizzza.jpg'),
    },
    {
      id: 8,
      img: require('../../assets/images/beer.png'),
    },
    {
      id: 9,
      img: require('../../assets/images/friends-toasting-with-beer-glasses-in-the-royalty-free-image-1637621142.jpg'),
    },
  ];
  const renderItem = ({item}) => (
    <>
      <TouchableOpacity
        onPress={() => {
          setSelected(!selected);
        }}
        style={container}>
        <Image source={item.img} style={selected ? image : image2} />
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
