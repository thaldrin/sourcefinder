# Sourcefinder by [Lio](https://wrwlf.co)

Sourcefinder is a e621 Source finder module for [Thaldrin] v4

# Usage

```ts
import Sourcefinder from "@thaldrin/sourcefinder";
const useragent = "Project/Version (Website)";
const sourcefinder = new Sourcefinder(useragent);
sourcefinder
  .find([
    "https://static1.e621.net/data/4b/ea/4bea9ba90bdc3bd128f60c7dca2856a1.png",
  ])
  .then((r) => console.log(r));
// => ['https://e621.net/posts/2653449']
```

or like this
![](https://media.discordapp.net/attachments/498123840547848192/828362247637827624/unknown.png)

[thaldrin]: https://thaldr.in
