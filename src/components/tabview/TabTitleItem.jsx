import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { setIndex } from '../../store/features/tab/tabSlice';

const TabTitleItem = ({title,id}) => {
    const dispatch = useDispatch();
    const handleTabClick = () => {
        console.log("title", title, id);
        dispatch(setIndex(id))
    }
    const activeTab = useSelector((state) => state.tab.value);
    console.log("activeTabinside", activeTab,id);
    return (
        <TabItem selected={activeTab === id} onClick={handleTabClick}>
            <TabTitle selected={activeTab === id} className='font-semibold whitespace-nowrap'>{title}</TabTitle>
        </TabItem>
    )
}

export default TabTitleItem


const TabItem = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    border-bottom: 3px solid ${(props) => (props.selected ? "red" : "transparent")};
`
const TabTitle = styled.p`
    color: ${(props) => (props.selected ? "red" : "white")};
`