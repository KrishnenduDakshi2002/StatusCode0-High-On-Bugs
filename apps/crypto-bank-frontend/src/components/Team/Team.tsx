// src/components/Team.js
import React from "react";
import "./Team.scss";

import pimg from '../../assets/images/backimg.jpg'

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      profile_image:{pimg},
      avatar: "path-to-avatar-1.jpg", // Replace with the actual avatar path
    },
    {
      name: "Jane Smith",
      role: "COO",
      profile_image:{pimg},
      avatar: "path-to-avatar-2.jpg", // Replace with the actual avatar path
    },
    {
      name: "Jane Smith",
      role: "COO",
      profile_image:{pimg},
      avatar: "path-to-avatar-2.jpg", // Replace with the actual avatar path
    },
    {
      name: "Jane Smith",
      role: "COO",
      profile_image:{pimg},
      avatar: "path-to-avatar-2.jpg", // Replace with the actual avatar path
    },
    {
      name: "Jane Smith",
      role: "COO",
      profile_image:{pimg},
      avatar: "path-to-avatar-2.jpg", // Replace with the actual avatar path
    },
    // Add more team members as needed
  ];

  return (
    <div className="team-container">
      <section className="team">
        <h2 className="team__heading">Our Team</h2>
        <div className="team__grid">

          <div className="row-1-container">
          <div className="team__card" style={{
            }}>
              <div className="team__card-avatar">
                <img
                  src={pimg}
                  className="team__avatar-img"
                />
              </div>
              <div className="team__card-content">
                <h3 className="team__member-name">Name</h3>
                <p className="team__member-role">COO</p>
              </div>
            </div>

            <div className="team__card" style={{
            }}>
              <div className="team__card-avatar">
                <img
                  src={pimg}
                  className="team__avatar-img"
                />
              </div>
              <div className="team__card-content">
                <h3 className="team__member-name">Name</h3>
                <p className="team__member-role">COO</p>
              </div>
            </div>

            <div className="team__card" style={{
            }}>
              <div className="team__card-avatar">
                <img
                  src={pimg}
                  className="team__avatar-img"
                />
              </div>
              <div className="team__card-content">
                <h3 className="team__member-name">Name</h3>
                <p className="team__member-role">COO</p>
              </div>
            </div> 
          </div>

          <div className="row-1-container">
          <div className="team__card" style={{
            }}>
              <div className="team__card-avatar">
                <img
                  src={pimg}
                  className="team__avatar-img"
                />
              </div>
              <div className="team__card-content">
                <h3 className="team__member-name">Name</h3>
                <p className="team__member-role">COO</p>
              </div>
            </div>

            <div className="team__card" style={{
            }}>
              <div className="team__card-avatar">
                <img
                  src={pimg}
                  className="team__avatar-img"
                />
              </div>
              <div className="team__card-content">
                <h3 className="team__member-name">Name</h3>
                <p className="team__member-role">COO</p>
              </div>
            </div>
          </div>
        {/* <div className="team__card" style={{
              gridColumnStart : 2,
            }}>
              <div className="team__card-avatar">
                <img
                  src={pimg}
                  className="team__avatar-img"
                />
              </div>
              <div className="team__card-content">
                <h3 className="team__member-name">Name</h3>
                <p className="team__member-role">COO</p>
              </div>
            </div>

            <div className="team__card" style={{
              gridColumnStart : 3
            }}>
              <div className="team__card-avatar">
                <img
                  src={pimg}
                  className="team__avatar-img"
                />
              </div>
              <div className="team__card-content">
                <h3 className="team__member-name">Name</h3>
                <p className="team__member-role">COO</p>
              </div>
            </div>

            <div className="team__card" style={{
              gridColumnStart : 4
            }}>
              <div className="team__card-avatar">
                <img
                  src={pimg}
                  className="team__avatar-img"
                />
              </div>
              <div className="team__card-content">
                <h3 className="team__member-name">Name</h3>
                <p className="team__member-role">COO</p>
              </div>
            </div>

            <div className="team__card" style={{
              gridColumnStart : 2,
              gridRowStart:2
            }}>
              <div className="team__card-avatar">
                <img
                  src={pimg}
                  className="team__avatar-img"
                />
              </div>
              <div className="team__card-content">
                <h3 className="team__member-name">Name</h3>
                <p className="team__member-role">COO</p>
              </div>
            </div>

            <div className="team__card" style={{
              gridColumnStart : 3,
              gridRowStart:2
            }}>
              <div className="team__card-avatar">
                <img
                  src={pimg}
                  className="team__avatar-img"
                />
              </div>
              <div className="team__card-content">
                <h3 className="team__member-name">Name</h3>
                <p className="team__member-role">COO</p>
              </div>
            </div> */}
        </div>
      </section>
    </div>
  );
};

export default Team;
