import {
    ActivityIndicator,
    BottomSheet,
    Divider,
    FabButton,
    HeaderDrawer,
    Icon,
    ItemComic,
  } from "../../components";
  import { IMAGES, SORT } from "../../constants";
  import { useNavigation, useTheme } from "@react-navigation/native";
  import { useAppSelector } from "../../redux";
  //import { getComicsService } from "@services";
  import { IComic } from "../../types/comic.type";
  import React, { useEffect, useRef, useState } from "react";
  import { useTranslation } from "react-i18next";
  import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
  import homeStyles from "./style";
  
  const GAP = 10;
  
  const HomeScreen: React.FC = () => {
    const { t } = useTranslation([], { keyPrefix: "homeScreen" });
    const navigation = useNavigation();
    const styles = homeStyles();
    const [data, setData] = useState<Array<IComic>>([
        {
            id: "1",
            title: "Cô gái đến từ hôm qua",
            image: 'https://www.nxbtre.com.vn/Images/Book/nxbtre_full_20092017_050942.jpg',
            content: "content",
            description: "description",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: "2",
            title: "Oregairu Vol 6",
            image: "https://static.wikia.nocookie.net/oregairu-tieng-viet/images/0/0f/LN-Cover-JP-06.png/revision/latest/scale-to-width-down/1000?cb=20210902190536&path-prefix=vi",
            content: "content",
            description: "description",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: "3",
            title: "Sherlock Holmes",
            image: "https://vn-test-11.slatic.net/p/12709e828d7a03928a4ef46ab9841d13.jpg",
            content: "content",
            description: "description",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: "4",
            title: "Lord of the Rings",
            image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg",
            content: "content",
            description: "description",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: "5",
            title: "Đắc nhân tâm",
            image: "https://nxbhcm.com.vn/Image/Biasach/dacnhantam86.jpg",
            content: "content",
            description: "description",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: "6",
            title: "Agatha Christie",
            image: "https://images.penguinrandomhouse.com/cover/9780525565109",
            content: "content",
            description: "description",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ]);
    const theme = useTheme();
    //const user = useAppSelector((state) => state.auth.user);
  
    const filterRef = useRef<any>(null);
    const [isCallApi, setIsCallApi] = useState(false);
  
    const [filter, setFilter] = useState({
      title: "",
      sort: SORT.DESC,
    });
  
    const dataFilter = [
      {
        key: SORT.DESC,
        value: t("sortDesc"),
      },
      {
        key: SORT.ASC,
        value: t("sortAsc"),
      },
    ];
  
    // useEffect(() => {
    //   const unsubscribe = getComicsService(
    //     {
    //       title: filter.title,
    //       sort: filter.sort,
    //     },
    //     (data) => {
    //       setData(data);
    //       console.log(data.length);
    //       setIsCallApi(true);
    //     }
    //   );
    //   return () => unsubscribe();
    // }, [filter]);
  
    // const onPressItem = (item: IComic) => {
    //   navigation.navigate("ComicDetail", {
    //     item: item,
    //   });
    // };
  
    // const onPressItemFilter = (key: SORT) => {
    //   setFilter({ ...filter, sort: key });
    //   filterRef.current?.close();
    // };
  
    // const getLabel = () => {
    //   const find = dataFilter.find((e) => e.key == filter.sort);
    //   return find?.value;
    // };
  
    // const onFab = () => {
    //   navigation.navigate("Search");
    // };
  
    return (
      <>
        {/* <HeaderDrawer
          title={t("title")}
          rightComponent={
            <>
              <TouchableOpacity
                onPress={() => {
                  filterRef.current?.open();
                }}
              >
                <Icon name={"filter"} type={"ant-design"} />
              </TouchableOpacity>
            </>
          }
        /> */}
        <Image source={IMAGES.BANNER} style={styles.banner} />
        <View style={[styles.container, { marginHorizontal: GAP }]}>
          <Text style={styles.label}>Gợi ý cho bạn</Text>
          <FlatList
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => {
              return (
                <ItemComic
                  item={item}
                    onPress={() => {}}
                  gap={GAP}
                />
              );
            }}
            columnWrapperStyle={{ gap: GAP }}
            contentContainerStyle={{ gap: GAP }}
            ListEmptyComponent={() => (
              <View style={styles.viewEmpty}>
                {isCallApi ? (
                  <Text style={styles.empty}>{t("noResult")}</Text>
                ) : (
                  <ActivityIndicator />
                )}
              </View>
            )}
          />
          <BottomSheet
            adjustToContentHeight
            ref={filterRef}
            HeaderComponent={
              <>
                <FlatList
                  contentContainerStyle={styles.filterList}
                  data={dataFilter}
                  renderItem={({ item }) => {
                    const checked = item.key == filter.sort;
  
                    return (
                      <>
                        <TouchableOpacity
                          style={styles.itemFilter}
                        >
                          <Text style={styles.titleItemFilter}>{item.value}</Text>
                          <Icon
                            name={"check"}
                            type={"ant-design"}
                            color={
                              checked ? theme.colors["primary"] : "transparent"
                            }
                          />
                        </TouchableOpacity>
                      </>
                    );
                  }}
                  ItemSeparatorComponent={() => <Divider />}
                />
              </>
            }
          />
          <FabButton style={styles.fabButton} />
        </View>
      </>
    );
  };
  
  export default HomeScreen;
  