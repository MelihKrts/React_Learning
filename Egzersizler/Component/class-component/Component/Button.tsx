import React, {Component, ReactNode} from "react";

interface Props {
    children?: ReactNode,
    className?: string,
    onClick: () => void
}

class Button extends Component<Props> {
    render() {
        const {children, className, onClick} = this.props;
        return (
            <button onClick={onClick} className={className}>
                {children || "click me"}
            </button>
        )
    }
}

export default Button;
