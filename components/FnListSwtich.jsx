import React from 'react';
import {View} from 'react-native';
import FnText from './FnText';
import FnSwitch from './FnSwitch';
import {COLORS} from '../utils/Colors';

const FnListSwitch = ({
  text = '',
  value = '',
  onValueChange = () => {},
  disabled = false,
  borderBottom = false,
}) => {
  const listView = {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: borderBottom ? 1 : 0,
    borderBottomColor: borderBottom ? COLORS.borderGray : '',
  };

  const listTitle = {
    flex: 1,
    marginRight: 14,
  };

  return (
    <View style={listView}>
      <View style={listTitle}>
        <FnText text={text} />
      </View>
      <View>
        <FnSwitch
          value={value}
          onValueChange={onValueChange}
          disabled={disabled}
        />
      </View>
    </View>
  );
};

export default FnListSwitch;
