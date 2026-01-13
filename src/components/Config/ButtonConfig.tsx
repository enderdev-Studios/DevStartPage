
interface ButtonConfigProps {
    children: React.ReactNode;
    props?: Omit<React.HTMLAttributes<HTMLButtonElement>, 'className'>;
}

export default function ConfigButton({ children, props }: ButtonConfigProps) {

    return (

        <button className="dark:bg-[#89b4fa] dark:hover:bg-[#6ca0f5] bg-[#1e66f5] hover:bg-[#1c56c9] text-[#4c4f69] dark:text-[#cdd6f4] font-bold py-2 px-6 rounded-xl my-4 cursor-pointer" {...props}>
            {children}
        </button>
    );
};