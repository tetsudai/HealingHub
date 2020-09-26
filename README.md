# Healing Hub website

The official website for the Healing Hub Discord server and subsidiary Florence Care Packages.

Created by [aidswidjaja](https://github.com/aidswidjaja) for Healing Hub Inc under the [tetsudai](https://github.com/tetsudai] project. tetsudai helps online communities grow and makes the internet a better place by providing solutions to communities all across the internet! You can learn more about us at [tetsudai.github.io](https://tetsudai.github.io)

**Visit the development version of this site at [healinghub.netlify.app](https://healinghub.netlify.app) (this will form the future production version)**

# Development info

- this is a static site that uses the Jamstack philsophy. I went with this because
    - it's really fast (great for people with bad internet connections like me)
    - super easy to maintain (no fiddling around with nginx here!) and
    - it costs virtually zero (just run it on netlify/gh pages and you're good to go)
- when working with this site locally, please disable strict CORS policy.
    - On Firefox, type `about:config` into the address bar, click through the warning and set `strict_origin_policy` to **`false`**
    - On Chrome, you could try use a web extension (do a google search) or read more [here for Windows users](https://alfilatov.com/posts/run-chrome-without-cors/) and [here for Mac users](https://medium.com/swlh/avoiding-cors-errors-on-localhost-in-2020-5a656ed8cefa)
    - you won't get CORS issues when the site is eventually deployed to a CDN

# License

Website code is available under the [MIT license](https://github.com/tetsudai/HealingHub/blob/master/LICENSE). (c) aidswidjaja 2020

Media, text content, and other creative works are copyright (c) Healing Hub 2020. All rights reserved.
