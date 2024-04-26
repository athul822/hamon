import React from 'react'
import styled from 'styled-components'
import TabTitleItem from './TabTitleItem'

const TabBar = ({ menu }) => {
    return (
        <TabBarConainer>
            {
                menu && menu.map((item,index) => (
                   <TabTitleItem title={item.menu_category} id={index} />
                ))
            }
        </TabBarConainer>
    )
}

export default TabBar

const TabBarConainer =styled.div`
    display: flex;
    gap: 3em;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 1em;
    flex-grow: 1;
    max-height: 60px;   

`
