export function HeaderBar({ theme, LeftContent, RightContent, topNav, tabbed, }: {
    theme: any;
    LeftContent: any;
    RightContent: any;
    topNav: any;
    tabbed: any;
}): JSX.Element;
export namespace HeaderBar {
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
import PropTypes from "prop-types";
