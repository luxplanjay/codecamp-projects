/**
 * Created by Zerk on 04-May-17.
 */

$(function () {
  'use strict';

  const app = {
    channels: ['freecodecamp', 'sing_sing', 'dreamhackcs', 'esl_sc2', 'jacksofamerica', 'ogamingsc2', 'faceittv', 'purgegamers', 'cretetion', 'habathcx', 'noobs2ninjas', 'brunofin', 'comster404'],
    elements: {
      controls: $('.controls'),
      form: $('.search-form'),
      container: $('.results-container')
    },
    // $init
    init: function () {
      this.channels.forEach(function (item) {
        this.getUserData(item);
      }.bind(this));

      this.elements.controls.on('click', function (event) {
        if ($(event.target).hasClass('btn--all')) {
          this.toggleControls($(event.target));
          this.toggleChannels('all');
        } else if ($(event.target).hasClass('btn--online')) {
          this.toggleControls($(event.target));
          this.toggleChannels('online');
        } else if ($(event.target).hasClass('btn--offline')) {
          this.toggleControls($(event.target));
          this.toggleChannels('offline');
        }
      }.bind(this));

      this.elements.form.on('submit', function (e) {
        e.preventDefault();
        let target = $('.search-form input').val();

        this.findChannel(target);
      }.bind(this));
    },
    // $getUserData
    getUserData: function (user, searchQuery) {
      let category = searchQuery || 'streams',
        apiKey = 'zw4ez3387m23jod5tuzeebtdbknd0b',
        apiUrl = `https://api.twitch.tv/kraken/${category}/${user}?client_id=${apiKey}`;

      $.getJSON(apiUrl)
        .done(function (data) {
          if (data.stream) {
            let channelData = {
              logo: data.stream.channel.logo,
              name: data.stream.channel.display_name,
              url: data.stream.channel.url,
              isOnline: true,
              statusText: data.stream.channel.status
            };
            this.updateUI(channelData);
          } else if (data.name === user) {
            let channelData = {
              logo: data.logo,
              name: data.display_name,
              url: `https://www.twitch.tv/${data.name}`,
              isOnline: false,
              statusText: ''
            };
            this.updateUI(channelData);
          } else {
            this.getUserData(user, 'users');
          }
        }.bind(this))
        .fail(function () {
          let channelData = {
            logo: 'img/error.jpg',
            name: user,
            url: '',
            isOnline: false,
            statusText: 'account closed or not found'
          };
          this.updateUI(channelData);
        }.bind(this));
    },
    // $updateUI
    updateUI: function (data) {
      const tpl = $('#channel-card').html(),
        compiled = _.template(tpl)(data);

      this.elements.container.append(compiled);
    },
    // $toggleControls
    toggleControls: function (el) {
      this.elements.controls.find('button').removeClass('btn--active');
      el.addClass('btn--active');
    },
    // $toggleChannels
    toggleChannels: function (status) {
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
    },
    // $findChannel
    findChannel: function (val) {
      $('.channel-card .channel-card__name').each(function () {
        let el = $(this);
        if (el.text().toLowerCase() === val.toLowerCase()) {
          el.parents('.channel-card').show();
        } else {
          el.parents('.channel-card').hide();
        }
      });
    }
  };

  app.init();
});
