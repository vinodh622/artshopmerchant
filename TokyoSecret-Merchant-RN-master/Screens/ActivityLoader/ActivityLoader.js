import React, {useState} from 'react';
import {View, Text, Modal, ActivityIndicator} from 'react-native';
import {global} from '../../Styles/global';

export default function ActivityLoader() {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View>
      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <View style={global.popupBg1}>
          <View style={global.indicatorBg}>
            <ActivityIndicator size="large" color="#EFCB38" />
          </View>
        </View>
      </Modal>
    </View>
  );
}
