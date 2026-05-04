declare const style: (rest: any) => {
    control: (provided: any, state: any) => any;
    valueContainer: (provided: any, state: any) => any;
    indicatorSeparator: (state: any) => {
        display: string;
    };
    indicatorsContainer: (provided: any, state: any) => any;
};
declare const formatCreateLabel: (word: any, inputValue: any) => string;
declare const disableInvalidEmail: (option: any) => boolean;
declare const disableValidEmail: (option: any) => boolean;
export { style, formatCreateLabel, disableValidEmail, disableInvalidEmail };
