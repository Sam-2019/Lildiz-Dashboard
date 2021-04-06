import React from "react";
import styled from "styled-components";
import { TiHome } from "react-icons/ti";
import { IoMail } from "react-icons/io5";
import { RiSettings3Fill } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { AiFillBell } from "react-icons/ai";
import "./sidebar.css";

const Container = styled.div`

  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  height: 100vh;
`;

let size = "32px";

const Sidebar = () => {
  return (
    <Container>
      <div className="iconWrapper">
        <TiHome size={size} className="icon" />
      </div>
      <div className="iconWrapper">
        <AiFillBell size={size} className="icon" />
      </div>
      <div className="iconWrapper">
        <IoMail size={size} className="icon" />
      </div>
      <div className="iconWrapper">
        <FaClipboardList size={size} className="icon" />
      </div>
      <div className="iconWrapper">
        <MdDateRange size={size} className="icon" />
      </div>
      <div className="iconWrapper">
        <RiSettings3Fill size={size} className="icon" />
      </div>
    </Container>
  );
};

export default Sidebar;
