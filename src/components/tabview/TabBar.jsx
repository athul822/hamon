import React from 'react'
import styled from 'styled-components'

const TabBar = ({ menu }) => {
    return (
        <TabBarConainer>
            {
                menu && menu.map(item => (
                    <TabItem>
                        <h6 className='text-white font-semibold whitespace-nowrap'>{item.menu_category}</h6>
                    </TabItem>
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
    padding: 1em;
`
const TabItem = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid red;
    padding: .5em;
`