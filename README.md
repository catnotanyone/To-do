# To-do

[Jump to TL;DR](#tldr)

It's a to-do list. You can use it if you want. Everything is saved right on your browser's local storage, so your list is always just a click away. Just make sure not to clear your browser history, or your list goes with it! 💀

---

## About the Project

I built the original version of this as a simple to-do list, no localStorage, nothing fancy(Behind the Scenes). Just add tasks and go (Kinda stupid (￣m￣）)

Then I asked [Sonnet](https://www.anthropic.com/claude/sonnet) (AI bro) to help clean it up, and he went full beast mode. He rewrote the whole thing using JavaScript classes and added localStorage support (which I hadn't even touched in JavaScript). 

Since I mentioned I don’t understand classes yet, he made a version without them.
Here is a list of all versions:

- **v0 (my crappy version)**: `index_v0.html` Plain JavaScript and functions. No edit button and no LocalStorage support (yet).
- **v1 (Sonnet – Class-based)**: `index_v1.html` Uses classes + localStorage. No edit button yet.
- **v2 (Sonnet – No Classes)**: `index.html` Same layout and functionality as v1, but rewritten in plain JavaScript objects. Kinda easier for me to follow.
  
Both of Sonnet’s versions share the same localStorage, so your list will carry over between them. My original version doesn’t use storage at all—reload the page, and the list is gone ...(*￣０￣)ノ

---

### Current Deployed Version

**Version 2 (Sonnet – No Classes)**

---

### Features to Add in My Version

- [ ] LocalStorage support.
- [ ] Edit button.
- [ ] Proper "Complete" button (right now, you just click on the text).
- [ ] Add search (for all the lazy asses out there who treat their to-do list like a wishlist)

---

### Features I’ll Probably Never Add but Sound Cool

- [ ] Dark mode that syncs with your soul.
- [ ] Cross-device sync without a backend (because magic, I guess?).
- [ ] Voice input like “Add ‘do the dishes’ to my eternal guilt pile.”
- [ ] AI that nags you to actually finish your tasks.
- [ ] Drag-and-drop reordering, because clicking is too much work.

---

## TL;DR

It’s just a to-do list site. No sign-in, no cloud sync, no BS.
Add your tasks, check them off, and don’t forget—if you clear your browser history, it’s game over 💀

---

## License

I don’t know anything about licenses, so there isn't one. This was just a fun learning project, and Sonnet’s code was AI-generated. Feel free to use, remix, or break it however you want. 😄
