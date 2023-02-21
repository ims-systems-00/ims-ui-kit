import Spinner from "./SpinnerBase"

const Loading = ({ color = "primary", text = "Loading..." }) => {
    return (
        <h5 className={"text-center "}>
            <Spinner size={"sm"} type="grow" /> {text}
        </h5>
    );
};

export default Loading;