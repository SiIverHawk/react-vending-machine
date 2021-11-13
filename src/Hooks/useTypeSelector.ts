import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "./../State/store/store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
