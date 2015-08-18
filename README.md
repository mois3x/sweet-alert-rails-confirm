sweet-alert-rails-confirm
=========================

[![Build Status](https://travis-ci.org/mois3x/sweet-alert-rails-confirm.svg?branch=master)](http://travis-ci.org/mois3x/sweet-alert-rails-confirm)


A Rails confirm replacement with SweetAlert

depends on http://github.com/Najtmare/sweet-alert-rails

Install:
    gem 'sweet-alert-confirm'
    
## Requirements
Rails >= 3.1

## Usage


application.js:

```javascript
//= require sweet-alert-confirm
```
application.css:

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
        html: false
        } 
```

![Custom confirm](https://cloud.githubusercontent.com/assets/5833678/4653700/14389916-54b0-11e4-9850-14ee970e9345.png)

## Contribute

Fork the repo & pull request you fix/feature

append `RAILS_VERSION=4.1.2` or whichever you target before your `bundle` command ex: `RAILS_VERSION=4.1.2 bundle install`

please add/modify test examples on fix or features

