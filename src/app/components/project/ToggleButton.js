"use client";

import styled from "styled-components";

const ToggleContainer = styled.div`
  position: relative;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e6e6e6;
  border-radius: 30px;
  padding: 2px;
  margin: 5px;
`;

const ToggleButton = styled.button`
  flex: 1;
  padding: 8px 2px 4px 2px;
  font-weight: 300;
  border: none;
  background: none;
  cursor: pointer;
  color: ${(props) => (props.active ? "#fff" : "#666")};
  transition: color 0.3s ease-in-out;
  position: relative;
  z-index: 2;
`;

const ActiveIndicator = styled.div`
  position: absolute;
  left: ${(props) => (props.$selected === "B2B" ? "6px" : "calc(50% + 3px)")};
  width: calc(50% - 8px);
  height: calc(100% - 10px);
  background: #000000;
  border-radius: 30px;
  transition: left 0.3s ease-in-out;
  z-index: 1;
`;

const ProjectToggleButton = ({ activeButton, setActiveButton }) => {
  return (
    <ToggleContainer>
      <ActiveIndicator $selected={activeButton} />
      <ToggleButton
        active={activeButton === "B2B"}
        onClick={() => setActiveButton("B2B")}
      >
        B2B
      </ToggleButton>
      <ToggleButton
        active={activeButton === "B2C"}
        onClick={() => setActiveButton("B2C")}
      >
        B2C
      </ToggleButton>
    </ToggleContainer>
  );
};

export default ProjectToggleButton;
