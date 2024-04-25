import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import HeaderBar from '../components/header/HeaderBar';
import { getApiData } from '../services/api';
import TabBar from '../components/tabview/TabBar';
import DishCard from '../components/dish/DishCard';

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [data, setData] = useState(null); // data is initially null
  const [isLoading, setIsLoading] = useState(true); // track loading state
  const [error, setError] = useState(null); // track error state

  useEffect(() => {
    getApiData('db0018c8-5982-4d89-a54f-f51fe14d3c89')
      .then(response => {
        console.log(response.data[0]);
        setData(response.data[0]);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("An error occurred while fetching data.");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  return (
    <MainContainer>
      <div className="container mx-auto px-3 flex flex-col">
        <HeaderBar title={data.restaurant_name} />
        <TabBar
          menu={data.table_menu_list}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabViewContainer>
          {
            data.table_menu_list && data.table_menu_list[activeTab].category_dishes.map((item, index) => (
              <DishCard dish={item} />
            ))
          }
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
  flex-grow: 1;
  overflow: scroll;
  display: flex;
  gap: .5px;
  flex-direction: column;
`