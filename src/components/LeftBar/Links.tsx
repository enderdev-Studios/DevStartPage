import { UrlDomain } from "../../constants/constants";

export default function Link({ name, url, Onclick }: { name: string, url: string , Onclick: (e: any) => void }) {
    const domain = new URL(url).origin;
    const iconUrl = `${UrlDomain}${domain}`;
    return (
        <li className="w-full text-left p-1 rounded mt-1">
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full w-fit">
            <a href={url} rel="noopener noreferrer" className="flex items-center gap-2">
                <img src={iconUrl} alt="" width={16} height={16} className="rounded-sm"/>
                {name}
            </a>
            <button onClick={Onclick} className="cursor-pointer hover:outline-gray-200 hover:outline-0 ml-3"><i className='bx bx-x'></i></button>
            </div>
        </li>
    );
};
