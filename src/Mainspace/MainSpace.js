import React from "react";
import styled from "styled-components";
import Appointment from "../Appointment/Appointment";
import Contact from "../Contact/Contact";
import Maximize from "../Components/maximize";
import "./mainspace.css";
import Exclamation from "../Components/exclamation";
import ControlPanel from "../Components/control panel";

let size = 17;

const Container = styled.div`
  background-color: white;
  border-radius: 10px 0 0 10px;
  padding: 0 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainSpace = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px 0",
        }}
      >
        <div>Hello Lildiz 👋 </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            border: "1px solid gray",
            padding: "5px  10px",
            borderRadius: "5px",
          }}
        >
          <ControlPanel width={15} height={15} />

          <div
            style={{
              margin: "0 5px 0 0",
            }}
          />

          <div>Edit Widgets</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px 15px 0 15px",
          borderBottom: "1px solid gray",
        }}
      >
        <div className="active">General</div>

        <div>Analysis</div>

        <div>Finance</div>

        <div>Reporting</div>
      </div>

      <div
        style={{
          display: "flex",
          padding: "15px 10px",
          backgroundColor: "black",
          borderRadius: "10px",
          marginTop: "15px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "white",
            width: "70px",
            display: "flex",
            margin: " 0 auto",
          }}
        >
          <Exclamation width={55} height={55} color="gold" />
        </div>

        <div
          style={{
            color: "white",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>Alert from Mickey</div>
            <div>
              3:15 PM
              <span
                style={{
                  color: "gray",
                }}
              >
                {" "}
                (8 MIN AGO)
              </span>
            </div>
          </div>

          <div>
            <span
              style={{
                color: "gray",
              }}
            >
              Location:{" "}
            </span>
            Palm Bay Ct{" "}
            <span
              style={{
                color: "#ff2f00",
              }}
            >
              25.838737, -80.181828
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          margin: "10px 0 10px",
        }}
      ></div>

      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 0 15px 0",
            margin: "0px 0 10px 0",
            borderBottom: "1px solid #bababa",
          }}
        >
          <div>
            Meet Friends <span className="color">September 2019</span>{" "}
          </div>
          <div>
            <Maximize width={size} height={size} />
          </div>
        </div>

        <div>
          <Appointment />
        </div>
      </div>

      <div
        style={{
          margin: "10px 0 10px",
        }}
      ></div>

      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 0 15px 0",
            margin: "0px 0 10px 0",
            borderBottom: "1px solid #bababa",
          }}
        >
          <div>Support Contacts </div>
          <div>
            {" "}
            <Maximize width={size} height={size} />
          </div>
        </div>

        <div>
          <Contact />
        </div>
      </div>
    </Container>
  );
};

export default MainSpace;
