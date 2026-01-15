
interface ButtonConfigProps {
    children: React.ReactNode;
    props?: Omit<React.HTMLAttributes<HTMLButtonElement>, 'className'>;
}

export default function ConfigButton({ children, props }: ButtonConfigProps) {

    return (

        <button className="dark:bg-[#89b4fa] dark:hover:bg-[#6ca0f5] bg-[#1e66f5] hover:bg-[#1c56c9] text-text-mocha-0 dark:text-text-latte-0 font-bold py-2 px-3 rounded-xl my-4 cursor-pointer mx-3 " {...props}>
            {children}
        </button>
    );
};