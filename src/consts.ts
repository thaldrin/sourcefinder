import pkg from '../package.json'

export default {
    md5: new RegExp(
        "((?:!)?https?://static[0-9]*.(?:e621|e926).net/data/(?:sample/|preview/|)[0-9a-f]{2}/[0-9a-f]{2}/([0-9a-f]{32}).([0-9a-z]+))",
        "igm"),
    search_url: "https://e621.net/posts.json?md5=",
    enine: 'https://e926.net/posts/',
    esix: "https://e621.net/posts/",
    version: pkg.version,
    useragent: `sourcefinder/v${pkg.version} (t8.pm/sourcefinder);`

}