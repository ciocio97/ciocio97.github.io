"use client";

import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Tabs = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  padding-top: 5px;
`;

const Tab = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 300;
  padding: 8px 20px;
  cursor: pointer;
  color: ${(props) => (props.$isTabActive ? "#000000" : "#666")};
  position: relative;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #000000;
  }
`;

const Underline = styled.div`
  position: absolute;
  bottom: -1px;
  height: 2px;
  background-color: #000000;
  width: ${(props) => props.$width}px;
  left: ${(props) => props.$left}px;
  transition: all 0.3s ease-in-out;
`;

export default function ProjectTab({ data, activeTab, setActiveTab }) {
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });
  const tabRefs = useRef({});

  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      const tabElement = tabRefs.current[activeTab];
      setUnderlineProps({
        left: tabElement.offsetLeft,
        width: tabElement.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <>
      <Tabs>
        {data.map((item) => {
          return (
            <Tab
              key={item.id}
              ref={(el) => (tabRefs.current[item.name] = el)}
              $isTabActive={activeTab === item.name}
              onClick={() => setActiveTab(item.name)}
            >
              {item.name}
            </Tab>
          );
        })}
        <Underline $left={underlineProps.left} $width={underlineProps.width} />
      </Tabs>
    </>
  );
}
