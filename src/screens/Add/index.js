import React, {useState} from 'react';
import {Switch, Text, TextInput, TouchableOpacity, View} from 'react-native';
import ArrowBack from '../../assets/icons/arrowBack';
import {Sizes} from '../../assets/RootStyle';
import LocatIcon from '../../assets/icons/locatIcon';
import ArrowRight from '../../assets/icons/arrowRight';
import ClockIcon from '../../assets/icons/clockIcon';
import DatePicker from 'react-native-date-picker';
import moment from 'moment/moment';
import {styles} from './style';
import PlusIcon from '../../assets/icons/plusIcon';
import CoverImages from '../../components/CoverImages';

function AddScreen({navigation}) {
  const {
    container,
    createTouch,
    createText,
    title,
    input,
    locatText,
    location,
    arrow,
    content,
    text,
    dateView,
    dateText,
    coverTitle,
    coverPlus,
    ticketsDesc,
  } = styles();
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const toggleSwitch = () => {
    if (enabled) {
      console.log('disabled');
    } else {
      console.log('enabled');
    }
    setEnabled(!enabled);
  };
  return (
    <View>
      <View style={container}>
        <TouchableOpacity
          style={{marginLeft: Sizes.size10}}
          onPress={() => navigation.navigate('Challenge')}>
          <ArrowBack />
        </TouchableOpacity>

        <TouchableOpacity
          style={createTouch}
          onPress={() => {
            navigation.navigate('Challenge');
          }}>
          <Text style={createText}>CREATE</Text>
        </TouchableOpacity>
      </View>
      <Text style={title}>New Challenge</Text>
      <TextInput placeholder={'Challenge Title'} style={input} />
      <TouchableOpacity style={input}>
        <View style={{flexDirection: 'row'}}>
          <View style={content}>
            <LocatIcon
              iconWidth={Sizes.size26}
              iconHeight={Sizes.size26}
              iconColor1={'#2e2e2d'}
              iconColor2={'#2e2e2d'}
            />
          </View>
          <View style={{marginLeft: Sizes.size35}}>
            <Text style={locatText}>Gyumri Hatsatun</Text>
            <Text style={location}>Khaghaghutyan oghak 1, Gyumri</Text>
          </View>
          <View style={arrow}>
            <ArrowRight />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={input} onPress={() => setOpen1(true)}>
        <View style={{flexDirection: 'row'}}>
          <View style={content}>
            <Text style={text}>From</Text>
          </View>
          <View style={dateView}>
            <ClockIcon iconWidth={Sizes.size32} iconHeight={Sizes.size32} />
            <Text style={dateText}>
              {moment(date.toString()).format('MMM DD')}
            </Text>
          </View>
          <View
            style={[dateView, {marginLeft: Sizes.size20}]}
            onPress={() => setOpen2(true)}>
            <ClockIcon iconWidth={Sizes.size32} iconHeight={Sizes.size32} />
            <Text style={dateText}>
              {moment(date.toString()).format('HH:mm')}
            </Text>
          </View>
          <View style={arrow}>
            <ArrowRight />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={input} onPress={() => setOpen2(true)}>
        <View style={{flexDirection: 'row'}}>
          <View style={content}>
            <Text style={text}>To</Text>
          </View>
          <View style={dateView}>
            <ClockIcon iconWidth={Sizes.size32} iconHeight={Sizes.size32} />
            <Text style={dateText}>
              {moment(date2.toString()).format('MMM DD')}
            </Text>
          </View>
          <View style={[dateView, {marginLeft: Sizes.size20}]}>
            <ClockIcon iconWidth={Sizes.size32} iconHeight={Sizes.size32} />
            <Text style={dateText}>
              {moment(date2.toString()).format('HH:mm ')}
            </Text>
          </View>
          <View style={arrow}>
            <ArrowRight />
          </View>
          <DatePicker
            modal
            mode={'datetime'}
            open={open1}
            date={date}
            onConfirm={date => {
              setOpen1(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen1(false);
            }}
          />
          <DatePicker
            modal
            mode={'datetime'}
            open={open2}
            date={date2}
            onConfirm={date2 => {
              setOpen2(false);
              setDate2(date2);
            }}
            onCancel={() => {
              setOpen2(false);
            }}
          />
        </View>
      </TouchableOpacity>
      <View style={{marginBottom: Sizes.size50}}>
        <Text style={coverTitle}> Cover image</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={coverPlus}>
            <PlusIcon />
          </TouchableOpacity>
          <View
            style={{
              top: Sizes.size30,
              left: Sizes.size90,
              width: '100%',
              marginRight: Sizes.size100,
              paddingRight: Sizes.size80,
            }}>
            <CoverImages />
          </View>
        </View>
      </View>
      <View style={input}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginLeft: Sizes.size5, marginRight: Sizes.size50}}>
            <Text style={locatText}>Tickets</Text>
            <Text style={ticketsDesc}>You can set up price for this event</Text>
          </View>

          <Switch
            trackColor={{false: '#acb2c1', true: '#045afd'}}
            thumbColor={enabled ? '#ffffff' : '#ffffff'}
            onValueChange={toggleSwitch}
            value={enabled}
          />
        </View>
      </View>
    </View>
  );
}

export default AddScreen;
