+++
template = "page.html"
title = "Rustup"
+++

# Replicate my Rusty working environment

Installation prerequisites:


- Windows 10
- Windows Subsystem for Linux 2 (WSL2)
- Visual Studio Code
- Windows Terminal


Rust installation is pretty straightforward, as long as you don't bother with your distro's package manager. 
Yes, I know Nix is a marvel of functional programming. 
The instructions are linked on [the official rust installation page]("https://www.rust-lang.org/tools/install), but as of March 2021 they involve running this command in your shell: `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`, then following the instructions. 
To get support for Rust in VS Code, you'll need an extension. 
The default "Rust" one is worse in every way than the "rust-analyzer" extension. 
Stick to the latter option. This gives you many things, including linting, error squigglies, docs-on-hover, and inferred type annotations. 
These benefits only apply if there is a Cargo.toml in the highest-level folder that VS Code has opened. 
Rust compiles with LLVM, so you'll need an LLDB debugging program of some sort to debug it. 
VS Code has an extension called CodeLLDB that works wonders.

To check that everything's working, try cloning the github repository for a popular crate from crates.io, such as regex, and poking around it for a while. 
Syntax highlighting, type annotations, and run | debug buttons should now appear where appropriate.

If you haven't already, try out different extensions and themes for VS Code and your terminal. 
Bracket Pair Colorizer is useful, as is Better TOML for syntax highlighting of your rust config files. 
Solarized is a beautiful, effective colour scheme, but sometimes requires configuration in the terminal, especially with `ls`'s default folder colouration. 
Windows Terminal supports acrylic mode, which you might love or hate. My shell of choice is `zsh`, and I use oh-my-zsh and the Starship prompt with zsh-autosuggestions.
