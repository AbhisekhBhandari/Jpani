import React from 'react';
import {KeyboardAvoidingView, SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import Header from '@/modules/private/conversation/components/header';
import Input from '@/shared/components/input';
import {styles} from './styles';
import Message from '@/modules/private/conversation/components/message';
import useConversation from '@/modules/private/conversation/hooks/useConversation';
import Icon from '@/shared/components/icon';
import {Send} from '@/shared/assets/icons';

export default function Conversation() {
  const {conversations} = useConversation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header title="Order - #129129" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
        {conversations.map(message => (
          <Message key={message.id} messageInfo={message} />
        ))}
      </ScrollView>
      <KeyboardAvoidingView style={styles.footer}>
        <View style={styles.containerInput}>
          <Input placeholder="general.type_here" />
        </View>
        <TouchableOpacity style={styles.containerIcon}>
          <Icon customStyles={styles.icon} icon={Send} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
