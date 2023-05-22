export default function ServiceItem({ service, price }) {
    return (
        <li key={service} className="flex justify-between items-center gap-2">
            <p className="font-bold whitespace-nowrap">{service}</p>
            <hr className="w-full border-t-[1px] border-b-[1px] border-black border-dashed" />
            <p className="w-fit shrink-0">from {price}</p>
        </li>
    );
}
