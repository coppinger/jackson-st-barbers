export default function ScheduleListItem({
    day,
    opening,
    closing,
    reopening,
    reclosing,
}) {
    if (day !== "Day") {
        return (
            <>
                <li
                    key={day}
                    className="flex justify-between gap-2 items-center"
                >
                    <p className="font-bold whitespace-nowrap uppercase text-lg">
                        {day}
                    </p>
                    <hr className="w-full border-t-[1px] border-b-[1px] border-white border-dashed" />
                    <p className="whitespace-nowrap text-off-white">
                        {opening === "Closed"
                            ? "Closed"
                            : `${opening} – ${closing}`}
                    </p>
                </li>
                <li className="self-end">
                    {reopening ? (
                        <p className="whitespace-nowrap text-off-white">
                            {reopening} – {reclosing}
                        </p>
                    ) : (
                        ""
                    )}
                </li>
            </>
        );
    }
}
