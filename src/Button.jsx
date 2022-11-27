import classNames from 'classnames';
import React from 'react';

const Button = (props) => {
    return (
        <div className={classNames('min-w-[120px] text-center border-y border-blue px-[16px] py-[8px] hover:bg-blue hover:text-white ',
        'hover:cursor-pointer transition duration-500 ease-in-out', props.classname)}
        onClick={props.onClick}>
            {props.name}
        </div>
    );
};

export default Button;