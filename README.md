sweet-alert-rails-confirm
=========================

[![Build Status](https://travis-ci.org/mois3x/sweet-alert-rails-confirm.svg?branch=master)](http://travis-ci.org/mois3x/sweet-alert-rails-confirm)


A Rails confirm replacement with SweetAlert

depends on https://github.com/t4t5/sweetalert

So you need to Install:
    gem 'sweet-alert'

Or the latest with:
    gem 'rails-assets-sweetalert' # Using https://rails-assets.org/ 

## Requirements
Rails >= 3.1

## Usage

Add it to your Gemfile:
```ruby
gem 'sweet-alert'
gem 'sweet-alert-confirm'
```

Add the following to application.js:

```javascript
//= require sweet-alert
//= require sweet-alert-confirm
```
Add the following to application.css:

```css
/*
 *= require sweet-alert
 */
```

### Custom options


You can pass options in `data:`
```Ruby
 data: {
  confirm: 'Are you ready?'
  :'confirm-button-text' => 'Im ready',
  :'cancel-button-text' => 'No way',
  :'confirm-button-color' => '#66CD00',
  :'sweet-alert-type' => 'info',
  text: 'This is a subtitle',
  :'image-url' => '/pic.png'
}
```

![Custom confirm](https://cloud.githubusercontent.com/assets/5833678/4653700/14389916-54b0-11e4-9850-14ee970e9345.png)

Default options that will be used application wide so it is not nessecary to set the option on each link. Put this object inside your app to override default options with `sweetAlertConfirmConfig` object.

```Javascript
var sweetAlertConfirmConfig = {
  title: 'Are you sure?',
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#DD6B55',
  confirmButtonText: 'Ok'
};
```

### Before Callback

A callback that will be runned before alert is shown. Returning `false` will display the alert and `true` will _not_ display it.

`data-saBeforeFunction='myFunction'`

## Contribute

Fork the repo & pull request you fix/feature

append `RAILS_VERSION=4.1.2` or whichever you target before your `bundle` command ex: `RAILS_VERSION=4.1.2 bundle install`

please add/modify test examples on fix or features
