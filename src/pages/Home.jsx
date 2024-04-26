import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import HeaderBar from '../components/header/HeaderBar';
import { getApiData } from '../services/api';
import TabBar from '../components/tabview/TabBar';
import DishCard from '../components/dish/DishCard';
import { useDispatch, useSelector } from 'react-redux';
import TabView from '../components/tabview/TabView';
import SwipeableViews from 'react-swipeable-views';
import { setIndex } from '../store/features/tab/tabSlice';
const Home = () => {
  // const [activeTab, setActiveTab] = useState(1);
  const activeTab = useSelector((state) => state.tab.value);
  const [data, setData] = useState(null); // data is initially null
  const [isLoading, setIsLoading] = useState(true); // track loading state
  const [error, setError] = useState(null); // track error state
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getApiData('db0018c8-5982-4d89-a54f-f51fe14d3c89');
        setData(response.data[0]);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setError("An error occurred while fetching data.");
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  const LodingScreen = ({text}) => {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
       <p>{text}</p>
      </div>
    )
  }

  if (isLoading) {
    return <LodingScreen text="Loading..." />
  }

  if (error) {
    return <LodingScreen text={error} />;
  }

  if (!data) {
    return <LodingScreen text="No data available" />;
  }

  return (
    <MainContainer>
      <div className="container mx-auto px-3 flex flex-col">
        <HeaderBar title={data.restaurant_name} />
        <TabBar
          menu={data.table_menu_list}
          activeTab={activeTab}
          // setActiveTab={setActiveTab}
        />
        <TabViewContainer>
          <SwipeableViews 
            index={activeTab}
            onChangeIndex={(index) => dispatch(setIndex(index))}
          >
          {
            data.table_menu_list.map((item, index) => (
              <TabView data={item} />
            ))
       
          }
          {/* <TabView data={data.table_menu_list} /> */}

          </SwipeableViews>
          
          {/* {
            data.table_menu_list && data.table_menu_list[activeTab].category_dishes.map((item, index) => (
              <DishCard dish={item} />
            ))
          } */}
        </TabViewContainer>
      </div>
    </MainContainer>
  );
};

export default Home

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
`

const TabViewContainer = styled.div`
  // flex-grow: 1;
  overflow: scroll;
  display: flex;
  gap: .5px;
  flex-direction: column;
`