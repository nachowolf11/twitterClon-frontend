import { useRef, useState } from "react";
import { useSearch } from "./";

export const useSearchBar = (setText) => {

    const [query, setQuery] = useState('')
    const { results, loading, setResults } = useSearch(query);

    const debounceRef = useRef();
    const inputRef = useRef();
    const resultContainerRef = useRef();

    const handleChange = (e) => {
        if( debounceRef.current ){
            clearTimeout( debounceRef.current )
        }

    debounceRef.current = setTimeout(() => {
            setQuery(e.target.value);
    }, 300);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setText(inputRef.current.value)
        inputRef.current.blur()
    }
    
    const handleInputBlur = () => {
        setTimeout(() => {
            try {
                resultContainerRef.current.style.display = 'none'
            } catch (error) {
            }
        }, 100);
    }
    const handleInputFocus = () => {
        resultContainerRef.current.style.display = 'block'
    }

    return{
        results,
        loading,
        query,
        inputRef,
        resultContainerRef,
        handleChange,
        handleSubmit,
        handleInputBlur,
        handleInputFocus,
    }
}