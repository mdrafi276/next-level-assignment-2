import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {



    try {
        await mongoose.connect(config.DB_URL as string)

        const port = config.PORT;
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })

    } catch (err) {
        console.log(err);
    }

}
main()