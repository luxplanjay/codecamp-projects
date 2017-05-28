import _ from 'lodash';
import template from '../templates/channel-card.hbs';

import errorImg from '../img/error.png';
import statusIcon from '../img/status.svg';

export const APP = (function () {
  'use strict';

  console.log(statusIcon);


  const channels = ['freecodecamp', 'sing_sing', 'dreamhackcs', 'esl_sc2', 'jacksofamerica', 'ogamingsc2', 'faceittv', 'purgegamers', 'cretetion', 'habathcx', 'noobs2ninjas', 'brunofin', 'comster404'],
    elements = {
      controls: document.querySelector('.controls'),
      form: document.querySelector('.search-form'),
      container: document.querySelector('.results-container'),
      buttons: document.querySelectorAll('.btn')
    };

  // $getUserData
  const getUserData = function (user, searchQuery) {
    const category = searchQuery || 'streams',
      apiKey = 'zw4ez3387m23jod5tuzeebtdbknd0b',
      apiUrl = `https://api.twitch.tv/kraken/${category}/${user}?client_id=${apiKey}`;

    function handleFetchError(response) {
      if (!response.ok) {
        let channelData = {
          logo: errorImg,
          name: user,
          url: '',
          icon: statusIcon + '#root',
          isOnline: false,
          statusText: 'account closed or not found'
        };
        updateUI(channelData);

        throw Error(response.statusText);
      }
      return response.json();
    }

    fetch(apiUrl).then(handleFetchError).then(data => {
      if (data.stream) {
        const channelData = {
          logo: data.stream.channel.logo,
          name: data.stream.channel.display_name,
          url: data.stream.channel.url,
          icon: statusIcon + '#root',
          isOnline: true,
          statusText: data.stream.channel.status
        };
        updateUI(channelData);
      } else if (data.name === user) {
        const channelData = {
          logo: data.logo,
          name: data.display_name,
          url: `https://www.twitch.tv/${data.name}`,
          icon: statusIcon + '#root',
          isOnline: false,
          statusText: ''
        };
        updateUI(channelData);
      } else {
        getUserData(user, 'users');
      }
    }).catch(error => console.log(error));
  };

  // $updateUI
  const updateUI = function (data) {
    elements.container.innerHTML += template(data);
  };

  // $toggleControls
  const toggleControls = function (el) {
    _.forEach(elements.buttons, item => item.classList.remove('btn--active'));
    el.classList.add('btn--active');
  };

  // $toggleChannels
  const toggleChannels = function (state) {
    const channels = document.querySelectorAll('.channel-card');

    _.forEach(channels, item => item.style.display = 'none');

    if (state === 'online') {
      handleState(state);
    } else if (state === 'offline') {
      handleState(state);
    } else {
      handleState(null);
    }

    function handleState(val) {
      if (val) {
        _.forEach(channels, item => {
          const value = item.querySelector('i').getAttribute('data-online');
          if (value === val) {
            item.style.display = 'flex';
          }
        });
      } else {
        _.forEach(channels, item => item.style.display = 'flex');
      }
    }
  };

  // $findChannel
  const findChannel = function (val) {
    const channels = document.querySelectorAll('.channel-card .channel-card__name');

    _.forEach(channels, item => {
      if (item.textContent.toLowerCase() === val.toLowerCase()) {
        item.closest('.channel-card').style.display = 'flex';
      } else {
        item.closest('.channel-card').style.display = 'none';
      }
    });
  };

  // $init
  const init = function () {
    _.forEach(channels, item => getUserData(item));

    elements.controls.addEventListener('click', event => {
      const target = event.target;

      if (target.classList.contains('btn--all')) {
        toggleControls(target);
        toggleChannels('all');
      } else if (target.classList.contains('btn--online')) {
        toggleControls(target);
        toggleChannels('online');
      } else if (target.classList.contains('btn--offline')) {
        toggleControls(target);
        toggleChannels('offline');
      }
    });

    elements.form.addEventListener('submit', event => {
      event.preventDefault();
      findChannel(document.querySelector('.search-form input').value);
    });
  };

  return {
    init: init
  };
})();
