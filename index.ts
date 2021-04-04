// @ts-nocheck
import pgk from "./package.json"
import defaults from "./src/defaults";
import consts from "./src/consts";
import axios from "axios";

export default class Sourcefinder {
    private useragent: string
    constructor(useragent?: string) {
        this.useragent = useragent ? `${useragent} ${consts.useragent}` : consts.useragent

    }

    async find(content: string) {
        let Links = content.match(consts.md5)
        if (!Links) return;
        let Sources: string[] = []
        for (const Index in Links) {
            let ImageURL = Links[Index]
            let ImageHash = ImageURL.split(consts.md5)[2]
            console.log(this.useragent)
            let { data } = await axios.get(`${consts.search_url}${ImageHash}`,
                {
                    headers: {
                        "User-Agent": this.useragent
                    }
                })

            let source: string
            switch (data.post.rating) {
                case "s":
                    source = `${consts.enine}${data.post.id}`
                    break;
                default:
                    source = `${consts.esix}${data.post.id}`
                    break;
            }
            Sources.push(source)
        }

        return Sources
    }

}

