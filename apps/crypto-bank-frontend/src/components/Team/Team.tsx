// src/components/Team.js
import React from 'react';
import './Team.scss';

import pimg from '../../assets/images/backimg.jpg';
import kd from '../../assets/images/kd.jpg'
import dp from '../../assets/images/dp.png'
import sm from '../../assets/images/sm.jpg'
import sss from '../../assets/images/sss.png'
import dj from '../../assets/images/dj.jpg'

interface TeamMember {
  name: string;
  role: string;
  profile_image: string;
  avatar: string;
}

const Team = () => {
  const teamMembers: TeamMember = [
    {
      name: 'Krishnendu',
      role: 'Backend',
      profile_image: { kd },
      avatar: 'path-to-avatar-1.jpg', // Replace with the actual avatar path
    },
    {
      name: 'Jane Smith',
      role: 'COO',
      profile_image: { pimg },
      avatar: 'path-to-avatar-2.jpg', // Replace with the actual avatar path
    },
    {
      name: 'Jane Smith',
      role: 'COO',
      profile_image: { pimg },
      avatar: 'path-to-avatar-2.jpg', // Replace with the actual avatar path
    },
    {
      name: 'Jane Smith',
      role: 'COO',
      profile_image: { pimg },
      avatar: 'path-to-avatar-2.jpg', // Replace with the actual avatar path
    },
    {
      name: 'Jane Smith',
      role: 'COO',
      profile_image: { pimg },
      avatar: 'path-to-avatar-2.jpg', // Replace with the actual avatar path
    },
    // Add more team members as needed
  ];

  return (
    <div className="team-container">
      <section className="team">
        <h2 className="team__heading">Our Team</h2>
        <div className="team__grid">
          <div className="row-1-container">
            <div className="team__card" style={{}}>
              <div className="team__card-avatar">
                <img src={kd} className="team__avatar-img" />
              </div>
              <div className="team__card-content">
                <h3 className="team__member-name">Krishnendu</h3>
                <p className="team__member-role">Backend</p>
              </div>
            </div>

            <div className="team__card" style={{}}>
              <div className="team__card-avatar">
                <img src={dp} className="team__avatar-img" />
              </div>
              <div className="team__card-content">
                <h3 className="team__member-name">Debayan</h3>
                <p className="team__member-role">Backend</p>
              </div>
            </div>

            <div className="team__card" style={{}}>
              <div className="team__card-avatar">
                <img src={sss} className="team__avatar-img" />
              </div>
              <div className="team__card-content">
                <h3 className="team__member-name">Sarnavo</h3>
                <p className="team__member-role">Blockchain</p>
              </div>
            </div>
          </div>

          <div className="row-1-container">
            <div className="team__card" style={{}}>
              <div className="team__card-avatar">
                <img src={sm} className="team__avatar-img" />
              </div>
              <div className="team__card-content">
                <h3 className="team__member-name">Soumyadip</h3>
                <p className="team__member-role">Frontend</p>
              </div>
            </div>

            <div className="team__card" style={{}}>
              <div className="team__card-avatar">
                <img src={dj} className="team__avatar-img" />
              </div>
              <div className="team__card-content">
                <h3 className="team__member-name">Debjani</h3>
                <p className="team__member-role">Frontend</p>
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
