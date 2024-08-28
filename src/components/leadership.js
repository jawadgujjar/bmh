import React from 'react';
import { Avatar } from 'antd';
import './leadership.css';

const Leadershipteam = () => {
    const teamMembers = [
        { name: 'CEO', imgSrc: 'https://cdn.discordapp.com/attachments/1275985777267966043/1275988075838705704/BMH_Icon.png?ex=66c88cbf&is=66c73b3f&hm=fde6493610c74f92767ecf8e0bfc39bbb5909bfb4859446ed2ff48a61b694704&'},
        { name: 'Managing Director', imgSrc: 'https://cdn.discordapp.com/attachments/1275985777267966043/1275988075838705704/BMH_Icon.png?ex=66c88cbf&is=66c73b3f&hm=fde6493610c74f92767ecf8e0bfc39bbb5909bfb4859446ed2ff48a61b694704&' },
        { name: 'Human Resource Manager', imgSrc: 'https://cdn.discordapp.com/attachments/1275985777267966043/1275988075838705704/BMH_Icon.png?ex=66c88cbf&is=66c73b3f&hm=fde6493610c74f92767ecf8e0bfc39bbb5909bfb4859446ed2ff48a61b694704&' },
        { name: 'Information Technology Managar', imgSrc: 'https://cdn.discordapp.com/attachments/1275985777267966043/1275988075838705704/BMH_Icon.png?ex=66c88cbf&is=66c73b3f&hm=fde6493610c74f92767ecf8e0bfc39bbb5909bfb4859446ed2ff48a61b694704&' },
        { name: 'Marketing Manager', imgSrc: 'https://cdn.discordapp.com/attachments/1275985777267966043/1275988075838705704/BMH_Icon.png?ex=66c88cbf&is=66c73b3f&hm=fde6493610c74f92767ecf8e0bfc39bbb5909bfb4859446ed2ff48a61b694704&' },
        { name: 'Brand Marketing Manager', imgSrc: 'https://cdn.discordapp.com/attachments/1275985777267966043/1275988075838705704/BMH_Icon.png?ex=66c88cbf&is=66c73b3f&hm=fde6493610c74f92767ecf8e0bfc39bbb5909bfb4859446ed2ff48a61b694704&' }
    ];

    return (
        <section id="about">
            <div>
                <h1 className="ourleadership">Our Leadership Team</h1>
            </div>
            <div className="avatar-container">
                {teamMembers.map((member, index) => (
                    <div key={index} className="avatar-item">
                        <Avatar className="avatar" src={member.imgSrc} />
                        <div className="avatar-name">{member.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Leadershipteam;
