const { GoogleSpreadsheet } = require("google-spreadsheet");
// credentials you have generated when creating the service account. TIP: DO NOT check this into your Git repo and it to your .gitignore file

let SUPER_SECRTET = process.env.SUPER_SECRET;

const creds = JSON.parse(SUPER_SECRET);

// Create a document object using the ID of the spreadsheet - obtained from its URL.
const doc = new GoogleSpreadsheet(
    "1g6_FLr3W_Mkr_ADLWQs5v7Mepvcjt0YECgUVKKCe0_c"
);

export default async function getVideoData() {
    try {
        // google sheets
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo(); // loads document properties and worksheets
        const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] -- get first sheet in the document

        const rows = await sheet.getRows(); // return the rows from the 1st sheet
        const allVideos = rows.map((row) => {
            // return the data for each video (or whatever each row is in your sheet)
            return {
                id: row.Video,
            };
        });
        // this returns the videos
        return allVideos;
    } catch (error) {
        //   log any errors to the console
        console.log(error);
    }
}
