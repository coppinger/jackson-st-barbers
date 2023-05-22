import { google } from "googleapis";

export async function getContent() {
    try {
        const scopes = [
            "https://www.googleapis.com/auth/spreadsheets.readonly",
        ];
        const jwt = new google.auth.JWT(
            process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
            null,
            // we need to replace the escaped newline characters
            // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
            process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
            scopes
        );

        const sheets = google.sheets({ version: "v4", auth: jwt });

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: "Schedule!A1:E8",
        });

        const rows = response.data.values;

        let schedule = [];
        if (rows.length) {
            schedule = rows.map((row) => ({
                day: row[0],
                opening: row[1],
                closing: row[2] || null,
                reopening: row[3] || null,
                reclosing: row[4] || null,
            }));
        }

        const response2 = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: "Services!A2:B20",
        });

        const rows2 = response2.data.values;

        let services = [];
        if (rows2.length) {
            services = rows2.map((row) => ({
                service: row[0],
                price: row[1],
            }));
        }

        return { schedule, services };
    } catch (err) {
        console.log(err);
    }

    return { schedule: [], services: [] };
}
