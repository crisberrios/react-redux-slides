import React from 'react';
import PropTypes from 'prop-types';
import WelcomeCard from '../components/WelcomeCard';
import CardList from '../components/CardList';

const Dashboard = ({ welcomeMsg, cards }) => (
  <div className="mdl-layout__container">
    <div className="mdl-layout">
      <div className="mdl-layout mdl-color--grey-100">
        <div className="dashboard-wrapper">
          <WelcomeCard {...welcomeMsg} />
          <CardList cards={cards} />
        </div>
      </div>
    </div>
  </div>
);

Dashboard.propTypes = {
  welcomeMsg: PropTypes.shape({
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    msg: PropTypes.string,
  }),
  cards: PropTypes.arrayOf(PropTypes.shape({
    className: PropTypes.string,
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    msg: PropTypes.string,
    id: PropTypes.number,
  })),
};

Dashboard.defaultProps = {
  welcomeMsg: null,
  cards: [],
};

export default Dashboard;
