import { useEffect, useState } from "react";

type Resize = {
    breakpoint :number
}

export function useResize({breakpoint}:Resize) {
    const [isResize, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkWidth = () => {
            setIsDesktop(window.innerWidth >= breakpoint);
        };

        checkWidth(); // первый запуск

        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    }, [breakpoint]);

    return isResize;
}