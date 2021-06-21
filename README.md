# 2020-covid19

**Live demo** https://ebuddj.github.io/2020-covid19/

## Number of confirmed Covid-19 cases per continent (EBU)

Chinese authorities informed the WHO on January 9 that a new virus was the cause of multiple pneumonia cases in the country, sounding the alarm to what became the COVID-19 pandemic.

There are four different animations with different data sets:
1) [First graph shows the cumulative number of cases per continent](https://ebuddj.github.io/2020-covid19/#data=cumulative)
2) [Second graph shows the average number of new daily cases in a 14 day period per continent](https://ebuddj.github.io/2020-covid19/#data=daily)
3) [Third graph the cumulative number of deaths in selected four Nordic countries](https://ebuddj.github.io/2020-covid19/#data=cumulative_scandinavia)
4) [Fourth graph shows the number of new daily cases in a 14 day period in selected four Nordic countries per 100,000 population](https://ebuddj.github.io/2020-covid19/#data=daily_scandinavia)

The graph shows the data on a linear scale. The numbers are absolute expect on the fourth one where the numbers are relative to each country's population.

The colors for the continents have been taken from from [this map](https://commons.wikimedia.org/wiki/File:Continents_by_colour.png). The continents appear in the following order: Asia, Europe, North America, South America, Africa, Oceania which resembles how the outbreak spread chronologically. 

Data is between 31st January 2020 and 13th July 2020.

**Sources**
* [OurWorldInData](https://ourworldindata.org/coronavirus)
* [Wikipedia](https://commons.wikimedia.org/wiki/File:Continents_by_colour.png)

**EBU links**
* [News Exchange](https://news-exchange.ebu.ch/item_detail/fe25e1bca9ba0dd57f6deedad3477a09/2020_21031183), 2020-07-09
* [News Exchange](https://news-exchange.ebu.ch/item_detail/9f9ce24ce897c792fbe2e4a179b2de81/2020_21032251), 2020-07-15
* [News Exchange](https://news-exchange.ebu.ch/item_detail/9f9ce24ce897c792fbe2e4a179b2de81/2020_21032081), 2020-07-15
* [Social Newswire](https://www.evnsocialnewswire.ch/data/coronavirus-animation-shows-the-number-of-confirmed-covid-19-cases-per-continent-in-the-last-six-months-animation/), 2020-07-09
* [Social Newswire](https://www.evnsocialnewswire.ch/data/coronavirus-animation-shows-number-of-confirmed-covid-19-cases-in-selected-nordic-countries-in-the-last-six-months-animation/), 2020-07-15

**Used by**
* CT/Czechia on CT1 Czech
* CT/Czechia on CT24

## How to use

If you are interested in using the interactive version please contact Teemo Tebest, tebest@ebu.ch

This visualization is part of the EBU News Exchange’s Data Journalism project. Other projects are available: https://news-exchange.ebu.ch/data-journalism

## Rights of usage

The material may be used only by [Eurovision active members and sub-licensees](https://www.ebu.ch/eurovision-news/members-and-sublicensees).

## How to build and develop

This is a Webpack + React project.

* `npm install`
* `npm start`

Project should start at: http://localhost:8080

For developing please refer to `package.json`