import PropTypes from 'prop-types';

declare function HeaderBar({ theme, LeftContent, RightContent, topNav, tabbed, }: {
    theme: any;
    LeftContent: any;
    RightContent: any;
    topNav: any;
    tabbed: any;
}): JSX.Element;
declare namespace HeaderBar {
    namespace propTypes {
        const theme: PropTypes.Requireable<string>;
        const LeftContent: PropTypes.Requireable<(...args: any[]) => any>;
        const RightContent: PropTypes.Requireable<(...args: any[]) => any>;
        const topNav: PropTypes.Requireable<boolean>;
        const tabbed: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const theme_1: any;
        export { theme_1 as theme };
        const LeftContent_1: any;
        export { LeftContent_1 as LeftContent };
        const RightContent_1: any;
        export { RightContent_1 as RightContent };
        const topNav_1: boolean;
        export { topNav_1 as topNav };
        const tabbed_1: boolean;
        export { tabbed_1 as tabbed };
    }
}

declare function HeaderButton({ children, theme, topNav, }: {
    children: any;
    theme: any;
    topNav: any;
}): JSX.Element;
declare namespace HeaderButton {
    namespace propTypes {
        const theme: PropTypes.Requireable<string>;
        const topNav: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const theme_1: any;
        export { theme_1 as theme };
        const topNav_1: boolean;
        export { topNav_1 as topNav };
    }
}

declare function HeaderTabs({ children, theme, value, onChange }: {
    children: any;
    theme: any;
    value: any;
    onChange: any;
}): JSX.Element;
declare namespace HeaderTabs {
    namespace propTypes {
        const theme: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const theme_1: any;
        export { theme_1 as theme };
    }
}

declare function TopNavLogo({ theme }: {
    theme: any;
}): JSX.Element;
declare namespace TopNavLogo {
    namespace propTypes {
        const theme: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const theme_1: any;
        export { theme_1 as theme };
    }
}

export { HeaderBar, HeaderButton, HeaderTabs, TopNavLogo };
