import { ChangeEvent } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  onChangeHandler,
  placeholder,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    onChange={onChangeHandler}
    placeholder={placeholder}
  />
);

export default SearchBox;
