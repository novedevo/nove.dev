+++
template = "page.html"
+++

This was inspired by jan Misali's video on the game.
The first version was written in Python, as it's one of my stronger languages and maps well to prototyping hobby projects.
However, I was looking to learn the Rust programming language, and this seemed like a good place to start. 
I read through "The Book", which is generally the recommended way for someone with programming experience to learn Rust.
As I worked my way through it, I gradually built up each layer of the program with whatever I had just learned from the Book.
This is an effective way to learn, in my experience, as it combines theory with the immediate creative application of that theory, cementing the knowledge in your mind.
Pretty soon, I reached feature-parity with the Python version, and I wanted to see what the difference in performance was.
To my surprise, without modifying any aspect of the algorithm from the Python edition, my first-ever program in Rust was immediately >10x faster than its Python equivalent.
Rust also ensured I was aware of many classes of potential logic errors and made me actively choose to (dangerously) disregard them, whereas Python disregards them by default at runtime.

At this point I abandoned my Python version, enraptured as I was in this strange new language.

In testing, several gaps became apparent.
I was initially using the Scrabble dictionary as my database for possible words, but this dataset has two major issues.
First, it doesn't include any words of over 15 letters, the width of a standard Scrabble board. 
Since an adversarial player will often snarkily guess "pneumonoultramicroscopicsilicavolcanoconiosis" or something similar, this is an issue.
Secondly, using this dataset means my bot has no awareness of word prevalence or frequency, so an extremely common word that happens to share many letters with other words, such as apples, isn't guessed within the guess limit.
These two failings combine to create a serious flaw.
My solution to this was to incorporate psycholinguistics.

My ideal metric is what I term "prevalence", meaning what fraction of the population knows a given word.
My reasoning is that words which very few people know are less likely to be chosen, and thus we can ignore them at first.
Word frequency is not enough; players are no more likely to try "the" than "apple".
This means that simply analyzing a corpus is not helpful.

My initial search for a psycholinguistic database landed on an ancient zip file from an academic study in 1987. 
It contained a few files of C code, a man page, a broken .DOC file, and a mysterious .DCT file.
At first I tried compiling the C, but neither GCC nor clang compiled it successfully.
Opening the files was horrifying: apparently this was from a time before consistent style was important. 
Ever seen reverse indentation?
The tabs/spaces debate has a common enemy: 1-space indentation!
...and much more.
I moved on, hoping to avoid wrangling with 800 lines of uncommented C
Hoping that the .DCT file would be enough to work with, I opened it to discover what appeared to be garbled numerical data, mostly zeroes, followed by the words in alphabetical order.
The dataset was extremely messy.
Opening the .doc file was a challenge: a modern release of Word disliked the table encoding method and refused to render anything that wasn't plain text.
However, it gave me enough information necessary to understand the .DCT file: the numerical data was split into columns of fixed width with no delimiters, then there were a few columns of variable width deliminated by commas.
Unnecessarily obtuse, in my view, but perhaps the CSV hasn't been invented. 
The sheer amount of zeroes implied that a CSV would have actually been smaller as well as more legible, but I digress.
Catastrophically for my usecase, not all of the entries had data in all the columns. 
In fact, less than 1% of the database had the prevalence information I was seeking!
My search continues.

Next, I landed upon a more recent study, which used a website and volunteers to gather the exact prevalence data I was seeking!
The internet-based nature of the study meant that its dataset was substantial, close to 1/3 of the Scrabble dictionary I was using before.
I modified my program to use a BTreeSet instead of a HashSet, loaded in the new data, sorted it by prevalence, and tested again.
This gave a substantial improvement!
It can now reliably guess any word in the new dataset that I've tried.
It's still not perfect, though. 
If the chosen word is only in the Scrabble dictionary, it struggles for the same reasons as before.
I think this would be rectified with a more comprehensive dataset, but I'm not currently aware of one.
If you know an open-access dataset that you think would help me, send me an email or open a PR!

Now that I had a fairly reliable scrabble bot, I wanted to show it off, and learn some more new skills in the process.
Adding it to my website seemed like the best option. 
I could run it server-side, but my current hosting provider only allows for static sites, and I'm not willing to pay a VPS for the fairly substantial computational load or open my home network up to external requests.
Instead, I decided to try WebAssembly (WASM), a fairly new technology that should allow for near-native-speed code execution running client-side in the browser.
Multiple languages can compile to WASM, including C and C++ (as well as Unity, interestingly), but Rust's ecosystem is one of the most mature.
In keeping with the standard Rust paradigm, there are a few "books" written for Rust and WASM.
One of these results in a hello-world program, another renders Conway's Game of Life.
For me, compiling to WASM is the easy part.
I'm inexperienced with modern JavaScript tooling, meaning this is another area of potential learning!
Namely, before this project, I had little experience with Node.js, npm, webpack, ES6 modules, etc.
There's a neat commandline tool building off of webpack called wasm-pack that builds and bundles your Rust code together into a static website, which is very helpful.
I don't think I fully understand the tools I'm using yet, but I love to learn in the real world, by doing.

This is where the project stands as of today. It's fully usable as an interactive command-line application, and I can spin up a webserver and interact with it through the JS console.
The next step is building an interactive game out of it, which involves leveling up my JavaScript skills and writing some HTML/CSS.
Soon, you'll be able to interact with it here.
Fair warning, the page-load is pretty heavy due to the WASM.
Rust (really, it's LLVM's fault) creates large executables, and it's not helped by my inlining of the databases!
