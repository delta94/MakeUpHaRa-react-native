import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import moment from 'moment';
import CustomStatusBar from '../common/CustomStatusBar';
import LoadingComponent from '../common/LoadingComponent';
import styles from './StyleContainer';

const HistoryListComponent = ({
  navigation,
  colorScheme,
  historyList,
  loading,
  handlePress,
}) => {
  if (loading || !historyList) {
    return <LoadingComponent colorScheme={colorScheme} />;
  }
  const title = historyList[0].title.name;
  const titleName = title.length <= 30 ? title : title.slice(0, 25) + '...';
  const HistoryItem = ({ revision, publishedDate, borderStyle }) => {
    return (
      <View style={borderStyle}>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => {
            handlePress({ id: title, r: revision });
            navigation.goBack();
          }}
        >
          <Text
            style={
              colorScheme === 'dark'
                ? styles.darkListItem
                : styles.lightListItem
            }
          >
            리비전: {revision}
          </Text>
          <Text
            style={
              colorScheme === 'dark' ? styles.darkListItem : styles.ightListItem
            }
          >
            작성 일자: {moment(publishedDate).format('YYYY-MM-DD')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <CustomStatusBar colorScheme={colorScheme} />
      <View
        style={
          colorScheme === 'dark' ? styles.darkContainer : styles.lightContainer
        }
      >
        <View style={styles.titleBox}>
          <Text
            style={[
              { ...styles.title },
              colorScheme === 'dark'
                ? { ...styles.darkTitle }
                : { ...styles.lightTitle },
            ]}
          >
            {titleName}
          </Text>
        </View>
        <View style={styles.subTitleBox}>
          <Text
            style={[
              { ...styles.subTitle },
              colorScheme === 'dark'
                ? { ...styles.darkSubTitle }
                : { ...styles.lightSubTitle },
            ]}
          >
            문서 역사
          </Text>
        </View>
      </View>
      <FlatList
        data={historyList}
        style={
          colorScheme === 'dark'
            ? { ...styles.darkContainer }
            : { ...styles.lightContainer }
        }
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => (
          <HistoryItem
            revision={item.revision}
            publishedDate={item.publishedDate}
            borderStyle={
              index === 0
                ? [
                    { ...styles.listItemBorder, ...styles.listItemBorderTop },
                    colorScheme === 'dark'
                      ? { ...styles.darkListItemBorder }
                      : { ...styles.lightListItemBorder },
                  ]
                : [
                    { ...styles.listItemBorder },
                    colorScheme === 'dark'
                      ? { ...styles.darkListItemBorder }
                      : { ...styles.lightListItemBorder },
                  ]
            }
          />
        )}
      />
      <View style={styles.buttonSection}>
        <TouchableOpacity
          style={[
            { ...styles.button },
            colorScheme === 'dark'
              ? { ...styles.darkButton }
              : { ...styles.lightButton },
          ]}
          onPress={() => navigation.goBack()}
        >
          <Text>뒤로가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HistoryListComponent;
