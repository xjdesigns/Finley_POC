import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  useColorScheme,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import {useSelector, useDispatch} from 'react-redux';
import {setConversation, resetConversation} from '../../store/conversation';
import FnText from '../../components/FnText';
import FnSearchInput from '../../components/FnSearchInput';
import FnConversationActionBar from '../../components/FnConversationActionBar';
import {COLORS} from '../../utils/Colors';
import {getAndroidPadding} from '../../utils/Style';
import {MOCK_QUESTIONS, MOCK_RESPONSES} from '../../mock/mock-conversation';

const ConversationSearch = () => {
  const scrollViewRef = useRef();
  const dispatch = useDispatch();
  const {questions, responses} = useSelector(state => state.conversation);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const height = useHeaderHeight();
  const [search, setSearch] = useState('');

  const baseStyle = {
    flex: 1,
  };

  const backgroundStyle = {
    backgroundColor: theme.background,
    ...baseStyle,
    ...getAndroidPadding,
  };

  const safeView = {
    flex: 1,
  };

  const innerView = {
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
  };

  const questionView = {
    padding: 8,
    marginBottom: 18,
    maxWidth: '80%',
    alignSelf: 'flex-end',
    backgroundColor: theme.lightBlueBackground,
    borderRadius: 18,
  };

  const handleSearch = () => {
    dispatch(
      setConversation({
        questions: MOCK_QUESTIONS,
        responses: MOCK_RESPONSES,
      }),
    );
  };

  const handleReset = () => {
    dispatch(resetConversation());
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({animated: true})
          }>
          {questions.length === 0 && (
            <View style={innerView}>
              <FnText text="I'm Mai. I work in your virtual mailroom. What can I help you find today?" />
            </View>
          )}
          {questions.length > 0 && (
            <View style={styles.conversationView}>
              {questions.map((c, idx) => {
                const res = responses[0];

                return (
                  <React.Fragment key={idx}>
                    <View style={questionView}>
                      <FnText
                        text="Did I get my W2 from work last year?"
                        fnTextStyles={styles.text}
                      />
                    </View>

                    {res && (
                      <View style={styles.responseView}>
                        <FnText
                          text="It looks like you got a few important items from Happily, Inc. in January, 2023 that could be your W2."
                          fnTextStyles={styles.text}
                        />
                      </View>
                    )}
                  </React.Fragment>
                );
              })}
            </View>
          )}
        </ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={height}>
          <View style={styles.searchView}>
            <FnConversationActionBar
              fnBarStyles={styles.actionBar}
              onRefresh={handleReset}
            />
            <FnSearchInput
              value={search}
              onChangeText={setSearch}
              onClear={() => setSearch('')}
              onSubmit={handleSearch}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 400,
  },
  searchView: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderGray,
  },
  conversationView: {
    paddingHorizontal: 20,
    flex: 1,
  },
  responseView: {
    marginBottom: 18,
    maxWidth: '80%',
  },
  actionBar: {
    marginBottom: 18,
  },
});

export default ConversationSearch;
