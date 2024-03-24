import React from "react";
import { useState, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";

interface PaginationProps{
    itemsPerPage: number;
    totalItems: number;
    currentPage: number;
    paginate: any;
}

const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
    const [pageNumbers, setPageNumbers] = useState<any[]>([]);
	const maxPageNumbersShow = 4;
	const [startPageNumber, setStartPageNumber] = useState(2);
	const totalPage = Math.ceil(totalItems / itemsPerPage);
	useEffect(() => {
		const LoadPageNumbers = () => {
			setPageNumbers([]);
			let pageNumbersData = [];
			if(totalPage <= 6){
				for(let i = 1; i <= totalPage; i++){
					pageNumbersData.push(i);
				}
			}
			else{
				pageNumbersData.push(1);
				if(startPageNumber - 1 != 1){
					pageNumbersData.push('...')
				}
				for(let i = startPageNumber; i < startPageNumber + maxPageNumbersShow; i++){
					pageNumbersData.push(i);
				}
				if(startPageNumber + maxPageNumbersShow != totalPage){
					pageNumbersData.push('...')
				}
				pageNumbersData.push(totalPage);
			}
			setPageNumbers(pageNumbersData);
		};
		
		LoadPageNumbers();
	}, [startPageNumber, currentPage, totalPage]);

	const ChangePageNumbers = (option: any) => {
		let newPageNumber = currentPage;
		if(option == 'next' && startPageNumber + maxPageNumbersShow - 1 !== totalPage){
			//setStartPageNumber(startPageNumber + 1);
			newPageNumber = currentPage + 1
            paginate(newPageNumber);
		}
		if(option == 'prev' && currentPage > 1){
			//setStartPageNumber(startPageNumber - 1);
			newPageNumber = currentPage - 1
            paginate(newPageNumber);
		}
		if(newPageNumber > 2 && (newPageNumber <= totalPage - 4)){
			setStartPageNumber(newPageNumber-1);
		}
		else{
			if(newPageNumber < (totalPage/2)){
				setStartPageNumber(2);
			}
			else{
				setStartPageNumber(totalPage - 4);
			}
		}
	}
  	return (
		<div className="pagination">
			<BsChevronDown onClick={() => ChangePageNumbers('prev')} className="pagination__show-prev-btn"/>
			{pageNumbers.map((number, index) => (
				<div className={`pagination__item ${
				number === currentPage ? "selected" : ""
				}`} key={index} onClick={() => {
						paginate(number);
						if(number > 2 && (number <= totalPage - 4)){
							setStartPageNumber(number-1);
						}
						else{
							if(number < (totalPage/2)){
								setStartPageNumber(2);
							}
							else{
								setStartPageNumber(totalPage - 4);
							}
						}
					}}>
					{number}
				</div>
			))}
			<BsChevronDown onClick={() => ChangePageNumbers('next')} className="pagination__show-next-btn"/>
		</div>
  	);
};

export default Pagination;