export function HeaderButton({ children, theme, topNav, }: {
    children: any;
    theme: any;
    topNav: any;
}): JSX.Element;
export namespace HeaderButton {
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
import PropTypes from "prop-types";
