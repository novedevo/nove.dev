+++
title = "catalogue of personal computation"
date = 2025-11-14T20:41:00-08:00
description = "what silicon i use and why"
[extra]
show_only_description = true
[taxonomies]
tags = ['personal', 'hardware']
+++

my desktop is a decommissioned compute server that my old employer was giving away after they got acquired and the new parent pushed everything into aws. it has a 48-core threadripper and 256gb of ram, 128 of which is in a drawer of my desk because it makes my overclock unstable. it's wildly overkill 95% of the time, underpowered 10% of the time (single-core performance was never threadripper's strong suit, and the state of the art has gotten a lot better since zen 2), and very appreciated 5% of the time: i was repeatedly recompiling ffmpeg the other day and task manager claimed i hit 101% cpu usage. it runs windows because elden ring holds me hostage; all my development is done in a wsl2 vm running either nixos or arch. i think nixos solves more or less all linux problems and replaces them with nixos problems, which is a mixed blessing. i use lix instead of cppnix for ideological reasons.

i have a pair of b&w passive bookshelf speakers and a b&w active subwoofer, which i power with a fosi audio v3 amp. i recommend all of these very highly; i listen to a lot of music on them. i plan to get a dac, headphone amp, maybe microphone setup someday.

my home server is composed of extremely sketchy hardware, notwithstanding the redundant zfs storage pool. the side panel won't go back on ever since i swapped the motherboard for one with a hyper 212 evo, which is too tall for the micro-atx case. the power button hasn't worked for 5 years; i use a screwdriver to bridge the pins on the motherboard. two of the four hard drives are failing, which is why i have the other two. the psu fan failed in 2025, so i cannibalized my old gaming pc for its evga (rip) psu and swapped it in. honestly i'm impressed that the 400w psu cooler master included with its bottom-of-the-line case in 2018 lasted 7 years without lighting on fire. the server's main purpose is to run the unifi controller, which i manage with a bizarrely bulletproof bash script, and act as an smb server. i haven't had any issues with the software in years. i ran freenas as a kid but got annoyed with freebsd software availability, then i ran truenas scale but got annoyed by the unfinished betaness of it all, so i gave up on semicustom distributions and installed ubuntu server lts.

my personal laptop is a lenovo yoga i got in 2019 when i was starting my degree, for which it was perfect. it has a touch screen, stylus, and 360 degree hinge with an i7 and 8gb of ram. power use while sleeping is abysmal, performance is terrible when using modern software, 8gb of ram is no longer enough. it can still run wsl2 with arch and a text editor, so i try to use it mostly for that. the speakers and fingerprint reader do not work in linux. the drivers are not open source and no one has managed to reverse engineer them, otherwise i would have put arch on it years ago. eventually, i see myself getting a macbook air.

my work laptop is a macbook pro 16" with an m3 pro and 36gb of ram. battery life and performance are very good, though i think my desktop can still beat it in a multicore drag race.

i have a raspberry pi collecting dust in the closet. i used to have an arm vm on oracle's free plan. it ran a minecraft server for a while, then the backend for a web toy i made, and nothing since they closed it for inactivity in 2024.
