import React from "react";
import { useMediaQuery } from 'react-responsive';

export const DesktopMax = ({ children }: {children : any}) => {
    const isDesktopMax = useMediaQuery({ minWidth: 1366 })
    return isDesktopMax ? children : null
};

export const Desktop = ({ children }: {children : any}) => {
    const isDesktop = useMediaQuery({ minWidth: 1201 })
    return isDesktop ? children : null
};

export const WithoutDesktop = ({ children }: {children : any}) => {
    const isWithoutDesktop = useMediaQuery({ maxWidth: 1200 })
    return isWithoutDesktop ? children : null
};

export const DesktopAndLaptop = ({ children }: {children : any}) => {
    const isDesktopAndLaptop = useMediaQuery({ minWidth: 901, maxWidth: 1365 })
    return isDesktopAndLaptop ? children : null
};

export const Laptop = ({ children }: {children : any}) => {
    const isLaptop = useMediaQuery({ minWidth: 901, maxWidth: 1200 })
    return isLaptop ? children : null
};

export const WithoutLaptop = ({ children }: {children : any}) => {
    const isWithoutLaptop = useMediaQuery({ minWidth: 901, maxWidth: 1200 })
    return isWithoutLaptop ? null : children
};

export const LaptopMin = ({ children }: {children : any}) => {
    const isLaptopMin = useMediaQuery({ minWidth: 901 })
    return isLaptopMin ? children : null
};

export const Tablet = ({ children }: {children : any}) => {
    const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 900 })
    return isTablet ? children : null
};

export const TabletAndMobile = ({ children }: {children : any}) => {
    const isTabletAndMobile = useMediaQuery({ maxWidth: 900 })
    return isTabletAndMobile ? children : null
};

export const Mobile = ({ children }: {children : any}) => {
    const isMobile = useMediaQuery({ maxWidth: 640 })
    return isMobile ? children : null
};

export const MobileMin480 = ({ children }: {children : any}) => {
    const isMobileMin480 = useMediaQuery({ minWidth: 480 })
    return isMobileMin480 ? children : null
};

export const MobileMax479 = ({ children }: {children : any}) => {
    const isMobileMax479 = useMediaQuery({ maxWidth: 479 })
    return isMobileMax479 ? children : null
};

export const WithoutMobile = ({ children }: {children : any}) => {
    const isWithoutMobile = useMediaQuery({ minWidth: 641 })
    return isWithoutMobile ? children : null
};
//
// export const Default = ({ children }: {children : any}) => {
//     const isNotMobile = useMediaQuery({ minWidth: 768 })
//     return isNotMobile ? children : null
// };