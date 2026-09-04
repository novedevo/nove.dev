+++
title = "what is to be done about web hosting in 2026?"
date = 2026-09-03T21:40:00-07:00
[extra]
show_only_description = true
[taxonomies]
tags = ['software']
+++

so far, my web infrastructure has been mostly hosted on cloudflare. they offer a reliable, feature-rich, and fast free tier. however, i've been gradually souring on their business practices and general m.o. as a company. the question is, what alternatives exist? i'm not opposed to paying a nominal fee if i have to (like, maybe $5/mo in total?), but my needs are so modest that i'd really prefer not to if possible. i definitely do not want flexible billing, at least without a limit (that scared me off fastly). if there is the possibility of waking up to thousands in egress fees, i am not interested. i do pay google for cloud storage for my family, and i pay a friend to host a fediverse instance for me on her colo.

## static site hosting
this service is free, or nearly so, at many service providers. i currently use cloudflare pages, i used to use github pages, there are options from vercel and others last i checked. none of those are interesting to me at this point. i like the idea of [grebedoc](https://grebedoc.dev) - community-driven web hosting led by an entity i've been following for a long time and whose technical and personal opinions i usually am aligned with. however, it's far from battle-tested, and (imo) carries a higher risk of shutting down prematurely due solely to its recency. still, it's not like you're locked in to a static host. i like grebedoc.

## domain registry
commodity web service that costs a pittance each year. i used to use google domains until they shuttered and i relocated to cloudflare. i have heard good things about porkbun, but honestly the name is distasteful to me and i'd rather not. is njalla any good? more research here is needed.

## cronjob compute
i have a service, <watertable.nove.dev>, that needs to wake up every night, crunch a bunch of time-series data in python, render and upload a website, and shutdown until tomorrow. so far i've been using cloudflare pages' build step to crunch the data and a cloudflare worker on a crontab to trigger the rebuild. it works quite well! this is not a service that i see offered for free from very many other providers. i could leech off of the ci compute of my git host (e.g. tangled, or just github actions (🤮)). i suppose i can self-host the crontab as well. i am somewhat averse to anything involving self-hosting for this particular service, though, because people that aren't me trust and rely on it for accurate and up-to-date information. maybe i will need to get some uptime monitoring service. is that free? hmm.

## email routing
my email is hosted on gmail, and that's not likely to change any time soon. i have been using `<wildcard>`, at, `<my.domain>` (obfuscated in a futile attempt to ward off scrapers) email addresses for a while, though, so i need to keep a wildcard redirect / mx record, or whatever, plus all the dkim/spf/dmarc nonsense. not everyone does this for free, as far as i know. i used to know all the details of email. i should do some more work on our hobby smtp server :)

## call to action
what do you use for these? do you know any good options here? do you host some of these yourself? please let me know! i have a wildcard email record on this domain and love getting emails from humans :)