import { createElement } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

export default function Button({ size, children }) {
    return createElement('button', {
        className: classNames("bg-[#1d9bf0] rounded-full flex items-center justify-center font-bold hover:bg-[#1a8cd8] transition-colors", {
            "px-4 h-9": size === "normal",
            "px-6 h-12 text-lg w-full": size === "large"
        })
    }, children); // children prop'unu button içinde kullanmayı unutmayalım
}

Button.propTypes = {
    size: PropTypes.oneOf(['normal', 'large'])
}

Button.defaultProps = {
    size: "normal"
}
