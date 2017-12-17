# cyberpolin's resume portfolio

One think I've failed over the time is to keep track of my work, today I was looking for a contract, and again I didn't have a good portfolio put together, so I decided tu pull this one over the weekend.

Let's code...


# Who is Cyberpolin

cyberpolin's full stack portfolio, resume, bolg or something like that


# How am I pulling this off?

Let's plan it first, I need a design, sadly I don't have that much designer skill so I have bought some themes over the time, I am using one of those.

![The original design](/img/original-design.png "cyberpolin's originar resume design")

Later I need to create a todo list, usually I use kanban, github have a decent one, and can be hook up with issues, so I'll create issues to solve.

First issue install create react app and initial configuration.

Shoot! I almost forgot, I need to configure github project ( the way the call kanban ). Github have some presets for the lists inside kanban, so I'll take advantage of them, in this way every new issue will be added to de To Do, whenever I close the issue it will go to Done list.

![Github project configuration](/img/github-kanban-configuration.png)

Once I have this, now I'll begin making issues...

# Slicing the design

One of the most important ones is properly slicing the design into HTML tags, usually I use os X preview app.


![The slicing before coding](/img/design-slice.png "Using colors is easier")

I won't forget mobile!

![#neverforget](/img/mobile-design-slice.png "Don't forget mobile")


# Now react actual components

Now I'll add the actual react components, I will use styled components, because it helps a lot keeping styles component based, but won't get in the middle of the JSX code.





## Caveats

I had to move react app into a `app` folder because github pages doesn't suport a node server, so in order to build the react app I modified the package.json

```js
"build": "react-scripts build && cp -rf build/ ../",
```

This way a built version is pushed to the github pages root.
