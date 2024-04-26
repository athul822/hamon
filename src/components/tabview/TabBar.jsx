import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import TabTitleItem from './TabTitleItem';
import { useSelector } from 'react-redux';

const TabBar = ({ menu }) => {
  const tabBarRef = useRef(null);
  const activeTab = useSelector((state) => state.tab.value);

  // Scroll the active tab into view when it changes
  useEffect(() => {
    if (tabBarRef.current) {
      const activeTabElement = tabBarRef.current.children[activeTab];
      if (activeTabElement) {
        activeTabElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center', // Ensures the active tab is centered
        });
      }
    }
  }, [activeTab]);

  return (
    <TabBarContainer ref={tabBarRef}>
      {menu &&
        menu.map((item, index) => (
          <TabTitleItem key={index} title={item.menu_category} id={index} />
        ))}
    </TabBarContainer>
  );
};

export default TabBar;

const TabBarContainer = styled.div`
  display: flex;
  gap: 1em; // Reduced the gap for a smoother scrolling experience
  overflow-x: auto; // Enable horizontal scrolling
  overflow-y: hidden;
  padding: 1em;
  max-height: 60px;
  white-space: nowrap; // Ensures no wrapping
  &::-webkit-scrollbar {
    display: none; // Completely hides the scrollbar
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none; // No scrollbar visible, retains scrolling
`;
