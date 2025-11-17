+++
title = "on correctness"
date = 2025-11-17T13:00:00-08:00
# description = "and not for the reason you think"
[extra]
show_only_description = true
[taxonomies]
tags = ['polemic', 'software']
+++

correctness must be (normative) baseline in software. luckily, correctness is a mathematical property of an algorithm, and thus we can use computers to help humans build correct software. millions of lines of code have been written for the express purpose of helping humans prove subsets of correctness. i'm thinking of (ranked by how much assurance they provide, in decreasing order): formal verification, type systems, linters, property testing, unit testing, fuzzers, autoformatters, syntax highlighters.

---

1. formal verification is the highest standard of correct software. i do not have direct experience with it. to my understanding, it converts many programming errors into much fewer specification errors, which tend to be easier to solve.

2. type systems, when implemented kindly, are the best tool for correctness. they enable local reasoning, tooling support, invariants. when implemented with the sharp edge against the programmer, the programmer learns to hate them. the difference between a kind type system and a sharp type system is how the programmer feels about the type system. if the programmer writhes in its grasp, flailing against the oppressive all-seeing eye of "computer says no", the type system is not helping achieve correct software. if the programmer uses the type system as a tool, sketching their software out in broad strokes, knowing with certainty the potential states and being assured of the correctness of composition, it's good. 
    1. i have a distaste for gradual typing systems, as the flow goes something like this: working, highly dynamic program -> overlaid type system incorrectly proclaims incorrectness -> programmer develops hatred for type systems

3. linters are a good way to soften the blow of a compiler error. moving from "computer says no" to "computer says you're wrong, but here's an escape hatch labelled 'do not use'". the downside of this approach is obvious, however: programmers are creatures of infinite creativity and chaotic alignments. when deadlines are imposed, the programmer is burnt out, or years of useless lints have jaded their saliency checker, lints are ignored and software is built incorrectly. equally, escape hatches allow lint writers to be more careless about false positives, pushing the vicious cycle one step further

4. property testing is interesting to me. i have used it but lightly, and never in anger. from my perspective, property testing gives you 80% of the assurance of formal verification with 20% of the effort. of course, an 80% correct program is rarely good enough. the core conceit is to formalize properties about your functions, formalize ways of generating input to said functions, and machine-checking the whole shebang. 

5. i have described unit testing suites as brittle exoskeletons attached to the nerves of a program. with the slightest twitch, a change to a program can shatter its exoskeleton to dust while self-inflicting great pain. the result of this, and thus the purpose of unit testing systems, is to disincentivise change of any kind. have fun migrating off .net 6.
    1. however, i have had the immense displeasure of refactoring a complicated program with no test suite whatsoever. combined with the total lack of documentation, [hyrum](https://www.hyrumslaw.com/) ensured that any minor modification would break something with no warning. therefore, i consider unit testing to be something of a necessary evil, and keep hope that a better world is possible.
    2. property testing suffers from the same problem in theory, yet in practice the properties are sufficiently abstract as to allow for enough program movement so as to not atrophy.

6. fuzzers are a reduced form of property testing applied to an entire program, usually with some level of codepath-aware analysis to minimize breadth-first-search-itis. the exoskeleton is kept at a safe distance from the slithering muscles beneath, which allows for major refactors that don't change the basic api. however, they don't check correctness. fuzzers can root out memory safety bugs, edge case crashes, and input mishandling, for which they are invaluable, but a fuzzer on its own isn't good enough.

7. autoformatters, like type systems, are best when they are human-focused and not impositional. an autoformatter offloads mental effort from the programmer by keeping a program in a consistent style - the writer doesn't have to fuss about indentation and the reader can load the program into their mental approximation without being distracted by a format different from the one they use. it serves the same purpose as typesetting rules at a scientific journal. the formatter has to be universally applied. it must be consistent and disrespect programmer intentions to be valuable, but its style must be smart enough to not cause anger.
    1. autoformatters can also catch errors themselves, usually by papering over language-level problems. [goto fail](https://en.wikipedia.org/wiki/Unreachable_code#goto_fail_bug), while indicative of a half-dozen problems with the c language (unreachable code is legal, if statements don't require braces, goto in general, rampant mutability, [error codes](https://joeduffyblog.com/2016/02/07/the-error-model/#error-codes)), would have nevertheless been caught by a human reviewer if the code was autoformatted.

8. syntax highlighting instantly catches syntax-level errors without requiring a full compiler pass or linter run. it's the fastest feedback we have available - misspelled a keyword? it's the wrong colour, your brain *knows* something's wrong before you can consciously respond to it. i consider consciousness a slow and error-prone[^consciousness] method of cognition, and short-circuiting it lets you write better code faster. 

---

[^consciousness]: this requires some explanation. when you're doing your best work, you "lose yourself" in it. no one considers a self-conscious or self-aware coding style any good. our consciousness lies, makes up narratives, and generally runs interference. of course, preconscious cognition is much less sophisticated, and so conscious composition is indispensable. for a longer-form meditation on consciousness as a liability, try reading [blindsight](https://www.rifters.com/real/Blindsight.htm)
