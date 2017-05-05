/**
 * Created by Zerk on 04-May-17.
 */

$(function () {
  'use strict';

  const channelers = ['mathil1', 'freecodecamp', 'sing_sing', 'dreamhackcs', 'esl_sc2', 'jacksofamerica', 'ogamingsc2', 'faceittv', 'purgegamers'],
    controls = $('.controls');

  channelers.forEach(function (item) {
    getUserData(item);
  });

  controls.on('click', function (event) {
    if ($(event.target).hasClass('btn--all')) {
      toggeleControls($(event.target));
      toggleChannels('all');
    } else if ($(event.target).hasClass('btn--online')) {
      toggeleControls($(event.target));
      toggleChannels('online');
    } else if ($(event.target).hasClass('btn--offline')) {
      toggeleControls($(event.target));
      toggleChannels('offline');
    }
  });

  function toggeleControls(el) {
    controls.find('button').removeClass('btn--active');
    el.addClass('btn--active');
  }

  function getUserData(user, searchQuery) {
    let category = searchQuery || 'streams',
      apiKey = 'zw4ez3387m23jod5tuzeebtdbknd0b',
      apiUrl = `https://api.twitch.tv/kraken/${category}/${user}?client_id=${apiKey}`;

    $.getJSON(apiUrl).done(function (data) {
      console.log(data);

      if (data.stream) {
        let channelData = {
          logo: data.stream.channel.logo,
          name: data.stream.channel.display_name,
          icon: 'img/online.png',
          isOnline: true,
          statusText: data.stream.channel.status
        };
        updateUI(channelData);
      } else if (data.name === user) {
        let channelData = {
          logo: data.logo,
          name: data.display_name,
          icon: 'img/offline.png',
          isOnline: false
        };
        updateUI(channelData);
      } else {
        getUserData(user, 'users');
      }
    });
  }

  function updateUI(data) {
    let statusIcon = '',
      title = '';

    if (data.isOnline) {
      let statusSvg = `<svg class="channel-card__status-icon"><use xlink:href="img/status.svg#root"></use></svg>`;
      statusIcon = `<i class="channel-card__status" data-online="true" title="online">${statusSvg}</i>`;
    } else {
      let statusSvg = `<svg class="channel-card__status-icon" style="fill: #FF4242;"><use xlink:href="img/status.svg#root"></use></svg>`;
      statusIcon = `<i class="channel-card__status" data-online="false" title="offline">${statusSvg}</i>`;
    }

    if (data.statusText) {
      title = `<p class="channel-card__descr">${data.statusText}</p>`;
    }

    let name = `<a href="#" class="channel-card__name">${data.name}</a>`,
      infoContainer = `<div class="channel-card__info">${name}${title}</div>`,
      channelImage = `<img class="channel-card__img" src=${data.logo}>`,
      channelCard = $(`<div class="channel-card">${channelImage}${infoContainer}${statusIcon}</div>`),
      container = $('.results-container');

    container.append(channelCard);
  }

  function toggleChannels(status) {
    const channels = $('.channel-card');

    channels.hide();

    if (status === 'online') {
      channels.each(function () {
        if ($(this).find('i').attr('data-online') === 'true') {
          $(this).show();
        }
      });
    } else if (status === 'offline') {
      channels.each(function () {
        if ($(this).find('i').attr('data-online') === 'false') {
          $(this).show();
        }
      });
    } else {
      channels.show();
    }
  }
});
