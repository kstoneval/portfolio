import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Link } from "@mui/material";
import ResponsiveAppBar from "../components/header";
import { LinkedIn, Mail, GitHub } from "@mui/icons-material";

export default class Contact extends Component {
  render() {
    const contactInfo = [
      {
        img: LinkedIn,
        title: "LinkedIn",
      },
      {
        img: Mail,
        title: "Email",
      },
      {
        img: GitHub,
        title: "GitHub",
      },
    ];
    return (
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#8CB0FF",
          padding: "2%",
          borderRadius: "5%",
          alignSelf: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
        }}
      >
        <div style={{ textAlign: "center", backgroundColor: "#8CB0FF" }}>
          {/* <div
            className="rectangle"
            style={{
              display: "inline-block",
              width: "80px",
              height: "10px",
              background: "#8CB0FF",
              borderRadius: "20%",
              marginBottom: "2%",
            }}
          /> */}
        </div>
        <div className="contactContainer">
          <div
            className="contactContainer"
            style={{
              margin: "5%",
              backgroundColor: "white",
              borderRadius: "5%",
            }}
          >
            <div
              className="aboutMeContent"
              style={{ padding: "5%", textAlign: "center" }}
            >
              <p
                style={{
                  color: "#000000",
                  fontSize: "30px",
                  textAlign: "center",
                  fontWeight: "500",
                  fontFamily: "Avenir",
                  letterSpacing: ".2rem",
                  marginTop: "5%",
                }}
              >
                Contact Me
              </p>
              <p
                style={{
                  fontFamily: "avenir",
                  textAlign: "center",
                  fontSize: "22px",
                }}
              >
                Questions or Inquires? Feel free to reach out!
              </p>
              <div
                style={{
                  fontFamily: "avenir",
                  textAlign: "center",
                  fontSize: "22px",
                  fontWeight: 500,
                  alignSelf: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
                }}
              >



{/* {contactInfo.map((d, i) => (
        <div key={`${d.name}-${i}`} style={{textAlign: "center"}}>
        <p>{d.text}</p>
        <img  style={{height: "70px"}}
              src={d.img}
              className="iconImg"
            />
                        <p>{d.text}</p>

        </div>
      ))} */}

              <div             style={{
              color: "#000000",
              fontSize: "30px",
              textAlign: "center",
              fontWeight: "400",
              fontFamily: "Avenir",
              letterSpacing: ".1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              //   marginTop: 40,
            }}>
                <p >LinkedIn</p>
                <br />
                <Link a href="https://www.linkedin.com/in/kelly-a-stone/">
                  <LinkedIn></LinkedIn>
                </Link>
                </div>

                <div             style={{
              color: "#000000",
              fontSize: "30px",
              textAlign: "center",
              fontWeight: "400",
              fontFamily: "Avenir",
              letterSpacing: ".1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              display: "flex",
              flexGrow: 1,
              //   marginTop: 40,
            }}>
                <p>Email</p>
                <br />
                <Link>
                  <Mail />
                </Link>
                </div>


                <div             style={{
              color: "#000000",
              fontSize: "30px",
              textAlign: "center",
              fontWeight: "400",
              fontFamily: "Avenir",
              letterSpacing: ".1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              display: "flex",
              flexGrow: 1,
              //   marginTop: 40,
            }}>
                <p>Github</p>
                <br />
                <Link a href="https://github.com/kellystone4">
                  <GitHub />
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
