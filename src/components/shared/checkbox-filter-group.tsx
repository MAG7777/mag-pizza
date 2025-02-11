'use client'

import React, { useState } from 'react';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';

type Item = FilterChecboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onchange?: (value: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFilterGroup: React.FC<Props> = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = "Searching...",
    onchange,
    defaultValue,
    className
}) => {

    const [showAll, setShowAll] = useState(false);
    const [searchValue, setSearchValue] = useState("");


    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);

    }

    const list = showAll ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase())) 
    : defaultItems?.slice(0, limit);



    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>

            {
                showAll &&
                <div className="mb-5">
                    <Input onChange={onChangeSearchInput}
                        placeholder={searchInputPlaceholder} className="bg-gray-50 border-none" />
                </div>
            }

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrolbar">
                {
                    list.map((item, index) => (
                        <FilterCheckbox
                            key={index}
                            text={item.text}
                            value={item.value}
                            endAdornment={item.endAdornment}
                            checked={false}
                            onCheckedChange={(ids) => console.log(ids)}

                        />
                    ))
                }
            </div>

            {
                items.length > limit && (
                    <div className={showAll ? "border-t border-t-neutral-100 m-4" : ""}>
                        <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
                            {showAll ? "Hide" : "+ Show all"}
                        </button>

                    </div>
                )
            }
        </div>
    );
};