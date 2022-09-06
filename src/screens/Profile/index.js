import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Sizes} from '../../assets/RootStyle';
import LocatIcon from '../../assets/icons/locatIcon';
import ClockIcon from '../../assets/icons/clockIcon';
import {Challenges} from '../../assets/FakeData';

function ProfileScreen(props) {
  const {
    container,
    image,
    name,
    desc,
    challengeView,
    title,
    flatContainer,
    flatContent,
    flatImage,
    flatMembers,
    flatTime,
  } = styles();
  const renderItem = ({item}) => (
    <>
      <TouchableOpacity style={flatContainer}>
        <View style={flatImage}>
          <Image
            source={item.img}
            style={{
              maxWidth: Sizes.size100,
              maxHeight: Sizes.size100,
              borderRadius: Sizes.size8,
            }}
          />
        </View>
        <View style={flatContent}>
          <Text
            style={{
              fontFamily: 'BaiJamjuree-Bold',
              fontSize: Sizes.size16,
              color: '#2e2e2e',
            }}>
            {item.title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: Sizes.size20,
            }}>
            <View style={{position: 'absolute', left: 0}}>
              <LocatIcon
                iconWidth={Sizes.size18}
                iconHeight={Sizes.size18}
                iconColor1={'#7a7a7a'}
                iconColor2={'#7a7a7a'}
              />
            </View>

            <Text style={flatTime}>{item.location}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: Sizes.size35,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{position: 'absolute', left: 0}}>
                <ClockIcon iconWidth={Sizes.size18} iconHeight={Sizes.size18} />
              </View>

              <Text style={flatTime}>{item.time}</Text>
            </View>

            <View style={flatMembers}>
              <Image
                source={item.membImg}
                style={{
                  maxHeight: Sizes.size18,
                  maxWidth: Sizes.size18,
                  borderRadius: Sizes.size4,
                }}
              />
              <Text
                style={{
                  fontFamily: 'BaiJamjuree-Bold',
                  color: '#2e2e2e',
                  marginLeft: Sizes.size5,
                }}>
                {item.members}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
  return (
    <View style={container}>
      <Image
        source={require('../../assets/images/profile_pic.jpg')}
        style={image}
      />
      <Text style={name}> John Smith</Text>
      <Text style={desc}>Lorem ipsum dolor sit amet, consectetur elit</Text>

      <View style={challengeView}>
        <Text style={title}> Challenges</Text>
        <FlatList
          horizontal
          data={Challenges}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

export default ProfileScreen;
