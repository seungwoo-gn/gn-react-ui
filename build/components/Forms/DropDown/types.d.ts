import React, { SetStateAction } from "react";
interface DropDownProps {
    main: React.ReactNode;
    setMain: React.Dispatch<SetStateAction<React.ReactNode>>;
    list: React.ReactNode[];
}
export type { DropDownProps };
