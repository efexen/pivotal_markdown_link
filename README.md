Pivotal Markdown Link (PMDL)
======

PMDL is a Chrome [Content Script Extension](https://developer.chrome.com/extensions/content_scripts) that places an extra button into pivotal tracker story card.

Clicking the button will copy a markdown link to the story to your clipboard and ready to paste into Github PR or wherever

Currently the format of text copied is hardcoded as

```md
[id](url) - title
```

For instance

```md
[#100734444](https://www.pivotaltracker.com/story/show/100734444) - Add option to configure the format of the copied text
```

### Todo

Here's what's left to do, PRs very welcome :wink:

[ ] Add ability to customise text template
[ ] Rewrite jQuery bits to remove dependency
