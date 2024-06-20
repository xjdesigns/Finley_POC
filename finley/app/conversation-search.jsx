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
import {setConversation} from '../../store/conversation';
import FnText from '../../components/FnText';
import FnSearchInput from '../../components/FnSearchInput';
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

  const searchView = {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderGray,
  };

  const conversationView = {
    paddingHorizontal: 20,
    flex: 1,
  };

  const questionView = {
    padding: 8,
    marginBottom: 18,
    maxWidth: '80%',
    alignSelf: 'flex-end',
    backgroundColor: theme.lightBlueBackground,
    borderRadius: 18,
  };

  const responseView = {
    marginBottom: 18,
    maxWidth: '80%',
  };

  const handleSearch = () => {
    dispatch(
      setConversation({
        questions: MOCK_QUESTIONS,
        responses: MOCK_RESPONSES,
      }),
    );
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
            <View style={conversationView}>
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
                      <View style={responseView}>
                        <FnText
                          text="It looks like you got a few important items from Happily, Inc. in January, 2023 that could be your W2."
                          fnTextStyles={styles.text}
                        />
                      </View>
                    )}
                  </React.Fragment>
                );
              })}
              {/* <View style={questionView}>
                <FnText
                  text="Did I get my W2 from work last year?"
                  fnTextStyles={styles.text}
                />
              </View>

              <View style={responseView}>
                <FnText
                  text="It looks like you got a few important items from Happily, Inc. in January, 2023 that could be your W2."
                  fnTextStyles={styles.text}
                />
              </View>

              <View style={questionView}>
                <FnText
                  text="How much mail did I receive from progressive last year?"
                  fnTextStyles={styles.text}
                />
              </View>

              <View style={responseView}>
                <FnText
                  text="Last year you received 46 items from Progressive Insurance. 23/46 were important, 23/46 were not."
                  fnTextStyles={styles.text}
                />
              </View> */}
            </View>
          )}
        </ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={height}>
          <View style={searchView}>
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
});

export default ConversationSearch;
